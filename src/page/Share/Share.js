import React, {useEffect} from 'react';
import {FlatList, Text, TouchableOpacity} from 'react-native';
import styles from './Share.style';
import {useDispatch} from 'react-redux';

import auth from '@react-native-firebase/auth';

import useFetch from '../../hooks/useFetch';
import ShareCard from '../../components/card/ShareCard';
import {set_id} from '../../contex/userSlience';

const Share = ({navigation}) => {
  const {loading, error, data} = useFetch('shared', auth().currentUser.uid);
  const {data: fav} = useFetch('favorites', auth().currentUser.uid);

  const dispatch = useDispatch();

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
    dispatch(set_id({toId: auth().currentUser.uid}));
    navigation.setOptions({
      headerRight: shareBook,
    });
  }, []);
  const renderShared = ({item}) => (
    <ShareCard
      data={item.data()}
      navigation={navigation}
      favData={fav}
    />
  );
  if (error) {
    return <Text>error</Text>;
  }
  if (loading) {
    return <Text>loading</Text>;
  }
  return <FlatList data={data} numColumns={2} renderItem={renderShared} />;
};

export default Share;
