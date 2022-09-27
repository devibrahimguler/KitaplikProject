import React from 'react';
import {
  SafeAreaView,
  View,
  Image,
  Text,
  FlatList,
} from 'react-native';
import styles from './Profile.style';

import useFetch from '../../hooks/useFetch';

import Button from '../../components/Button';

const Profile = () => {
  const {loading, error, data} = useFetch();

  const renderBooks = ({item}) => <Text>{item.username}</Text>;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner_container}>
        <Image style={styles.image} source={{uri: data.imageUrl}} />
        <View>
          <Text style={styles.username}>{data.username}</Text>
          <View style={styles.inner_container}>
            <View>
              <Text style={styles.title}>Paylaşılanlar</Text>
              <Text style={styles.sub_title}>0</Text>
            </View>
            <View>
              <Text style={styles.title}>Favoriler</Text>
              <Text style={styles.sub_title}>0</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.body_container}>
        <View style={styles.body_inner_container}>
          <View style={styles.body_sparator_paylasim}>
            <Button title={'Paylaşılanlar'} thema={'secondary'} />
          </View>
          <View style={styles.body_sparator_favori}>
            <Button title={'Favoriler'} thema={'secondary'} />
          </View>
        </View>
        <FlatList data={[data]} renderItem={renderBooks} scrollEnabled={true} />

      </View>
    </SafeAreaView>
  );
};

export default Profile;
