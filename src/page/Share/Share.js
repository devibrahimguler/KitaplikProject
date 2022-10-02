import React, {useEffect, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './Share.style';
import {useDispatch} from 'react-redux';

import auth from '@react-native-firebase/auth';

import useFetch from '../../hooks/useFetch';
import ShareCard from '../../components/card/ShareCard';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {set_id} from '../../contex/userSlience';

const Share = ({navigation}) => {
  const {loading, error, data} = useFetch('shared', auth().currentUser.uid);
  const {data: fav} = useFetch('favorites', auth().currentUser.uid);
  const [search, setSearch] = useState('');
  const [selection, setSelection] = useState('isim');
  const [newData, setNewData] = useState(data);

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
  useEffect(() => {
    setNewData(data);
  }, [data]);
  useEffect(() => {
    setNewData(
      data.filter(value => {
        if(search != "") {
          if(selection == "isim") {
            return value.data().bookName.startsWith(search);
          } else if (selection == "yazar") {
            return value.data().author.startsWith(search);
          } else {
            return value.data().type.startsWith(search);
          }
        } else {
          return value;
        }
      }),
    );
  }, [search]);
  const renderShared = ({item}) => (
    <ShareCard data={item.data()} navigation={navigation} favData={fav} />
  );
  const toggleName = ()=> {
    setSelection("isim")
  }
  const toggleAuthor = ()=> {
    setSelection("yazar")
  }
  const toggleType = ()=> {
    setSelection("tip")
  }
  if (error) {
    return <Text>error</Text>;
  }
  if (loading) {
    return <Text>loading</Text>;
  }
  return (
    <SafeAreaView style={styles.container}>
      <Input
        name={'account'}
        value={search}
        onChangeText={setSearch}
        placeholder={'Ara...'}
      />
      <View style={styles.inner_container}>
        <Button title={'Ada Göre'} onPress={toggleName} thema={selection == "isim" ? "selection" : "none_selection"}  />
        <Button title={'Yazara Göre'} onPress={toggleAuthor} thema={selection == "yazar" ? "selection" : "none_selection"} />
        <Button title={'Kitap Türüne Göre'} onPress={toggleType} thema={selection == "tip" ? "selection" : "none_selection"}/>
      </View>
      <FlatList data={newData} numColumns={2} renderItem={renderShared} />
    </SafeAreaView>
  );
};

export default Share;
