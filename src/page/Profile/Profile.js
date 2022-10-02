import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Image,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import styles from './Profile.style';
import auth from '@react-native-firebase/auth';
import {useSelector, useDispatch} from 'react-redux';

import useFetch from '../../hooks/useFetch';

import ShareCard from '../../components/card/ShareCard';
import Button from '../../components/Button';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {set_id} from '../../contex/userSlience';

const Profile = ({navigation, route}) => {
  const curId = useSelector(state => state.name.toId);

  const dispatch = useDispatch();
  const [selection, setSelection] = useState(true);

  const {
    loading: userLoading,
    error: userError,
    data: userData,
  } = useFetch('user', curId);

  const {
    loading: sharLoading,
    error: sharError,
    data: sharData,
  } = useFetch('usershared', curId);

  const {
    loading: favLoading,
    error: favError,
    data: favData,
  } = useFetch('favorites', curId);

  const renderShared = ({item}) => (
    <ShareCard
      data={item.data()}
      navigation={navigation}
      favData={favData}
      sharData={sharData}
    />
  );
  const renderFavorite = ({item}) => (
    <ShareCard
      data={item.data()}
      navigation={navigation}
      favData={favData}
      sharData={sharData}
    />
  );

  const toggleSelection = type => {
    if (type == 'Paylaşılanlar') {
      setSelection(true);
    } else {
      setSelection(false);
    }
  };

  const toBack = () => {
    dispatch(set_id({toId: auth().currentUser.uid}));
    navigation.goBack();
  };
  const toEditProfile = () => {
    navigation.navigate('EditProfilePage', userData);
  };

  useEffect(() => {
    if (route.name == 'toProfilePage') {
      navigation.setOptions({
        headerLeft: () => {
          return (
            <TouchableOpacity style={{marginEnd: 5}} onPress={toBack}>
              <Icon name="arrow-left" size={26} />
            </TouchableOpacity>
          );
        },
      });
    }
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {userError ? (
        <Text>{userError}</Text>
      ) : (
        <>
          {userLoading ? (
            <ActivityIndicator size={25} />
          ) : (
            <View style={styles.inner_container}>
              <Image style={styles.image} source={{uri: userData.imageUrl}} />
              <View>
                <Text style={styles.username}>{userData.username}</Text>
                <Button title={"Profile Düzenle"} thema={"tertiary"} onPress={toEditProfile} />
                <View style={styles.inner_container}>
                  <View>
                    <Text style={styles.title}>Paylaşılanlar</Text>
                    <Text style={styles.sub_title}>{userData.usershared}</Text>
                  </View>
                  <View>
                    <Text style={styles.title}>Favoriler</Text>
                    <Text style={styles.sub_title}>{userData.favorites}</Text>
                  </View>
                </View>
              </View>
            </View>
          )}
        </>
      )}
      <View style={styles.body_container}>
        <View style={styles.body_inner_container}>
          <View style={styles.body_sparator_paylasim}>
            <Button
              title={'Paylaşılanlar'}
              thema={'secondary'}
              onPress={() => toggleSelection('Paylaşılanlar')}
            />
          </View>
          <View style={styles.body_sparator_favori}>
            <Button
              title={'Favoriler'}
              thema={'secondary'}
              onPress={() => toggleSelection('Favoriler')}
            />
          </View>
        </View>
        {selection ? (
          <>
            {sharError ? (
              <Text>{sharError}</Text>
            ) : (
              <>
                {sharLoading ? (
                  <ActivityIndicator size={25} />
                ) : (
                  <FlatList
                    data={sharData}
                    numColumns={2}
                    renderItem={renderShared}
                    scrollEnabled={true}
                  />
                )}
              </>
            )}
          </>
        ) : (
          <>
            {favError ? (
              <Text>{favError}</Text>
            ) : (
              <>
                {favLoading ? (
                  <ActivityIndicator size={25} />
                ) : (
                  <FlatList
                    data={favData}
                    numColumns={2}
                    renderItem={renderFavorite}
                    scrollEnabled={true}
                  />
                )}
              </>
            )}
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Profile;
