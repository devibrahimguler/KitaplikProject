import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Image,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import styles from './Profile.style';
import auth from '@react-native-firebase/auth';

import useFetch from '../../hooks/useFetch';

import ShareCard from '../../components/card/ShareCard';
import Button from '../../components/Button';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Profile = ({navigation, route}) => {
  const [getId, setGetId] = useState(auth().currentUser.uid);

  const [selection, setSelection] = useState(true);
  const {data} = useFetch(null, getId);
  const {data: sharData} = useFetch('usershared', getId);
  const {data: favData} = useFetch('favorites', getId);

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

  const toLogOut = () => {
    auth()
      .signOut()
      .then(() => {
        navigation.navigate('EntryScreen');
        setGetId(null);
      });
  };
  const toBack = () => {
    navigation.goBack();
  };

  useEffect(() => {
    if(route.name=="toProfilePage") {
      setGetId(route.params.docId);
      navigation.setOptions({
        headerLeft: () => {
          return (
            <TouchableOpacity style={{marginEnd: 5}} onPress={toBack}>
              <Icon name="arrow-left" size={26} />
            </TouchableOpacity>
          );
        },
      });
    }else {
      navigation.setOptions({
        headerRight: () => {
          return (
            <TouchableOpacity style={{marginEnd: 5}} onPress={toLogOut}>
              <Icon name="logout-variant" size={26} />
            </TouchableOpacity>
          );
        },
      });
    }
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner_container}>
        <Image style={styles.image} source={{uri: data.imageUrl}} />
        <View>
          <Text style={styles.username}>{data.username}</Text>
          <View style={styles.inner_container}>
            <View>
              <Text style={styles.title}>Paylaşılanlar</Text>
              <Text style={styles.sub_title}>{data.usershared}</Text>
            </View>
            <View>
              <Text style={styles.title}>Favoriler</Text>
              <Text style={styles.sub_title}>{data.favorites}</Text>
            </View>
          </View>
        </View>
      </View>
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
          <FlatList
            data={sharData}
            numColumns={2}
            renderItem={renderShared}
            scrollEnabled={true}
          />
        ) : (
          <FlatList
            data={favData}
            numColumns={2}
            renderItem={renderFavorite}
            scrollEnabled={true}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Profile;
