import React, {useEffect} from 'react';
import {FlatList, Text, TouchableOpacity} from 'react-native';
import styles from './Share.style';

import auth from '@react-native-firebase/auth';

import useFetch from '../../hooks/useFetch';
import ShareCard from '../../components/card/ShareCard';

const Share = ({navigation}) => {
  const {loading, error, data} = useFetch('shared');
  const {data: favData} = useFetch('favorites', auth().currentUser.uid);
  const {data: sharData} = useFetch('usershared', auth().currentUser.uid);

  const toEditBook = () => {
    navigation.navigate('EditBookPage');
  };
  const shareBook = () => {
    return (
      <TouchableOpacity onPress={toEditBook}>
        <Text>Ekle</Text>
      </TouchableOpacity>
    );
  };
  useEffect(() => {
    navigation.setOptions({
      headerRight: shareBook,
    });
  }, []);
  const renderShared = ({item}) => (
    <ShareCard
      data={item.data()}
      navigation={navigation}
      favData={favData}
      sharData={sharData}
    />
  );
  return <FlatList data={data} numColumns={2} renderItem={renderShared} />;
};

export default Share;
