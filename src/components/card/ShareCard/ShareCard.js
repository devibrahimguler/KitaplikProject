import React from 'react';
import {View, Text, Image, TouchableOpacity, Alert} from 'react-native';
import styles from './ShareCard.style';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {useDispatch} from 'react-redux';

import TurnBoolean from '../../../utilities/TurnBoolean';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {set_id} from '../../../contex/userSlience';

const ShareCard = ({data, navigation, favData, sharData}) => {
  const dispatch = useDispatch();
  const addFavorite = () => {
    if (TurnBoolean('fav', favData, data.docId)) {
      firestore()
        .collection('user')
        .doc(auth().currentUser.uid)
        .collection('favorite')
        .doc(data.docId)
        .set(data);
    } else {
      Alert.alert('Favorilerde', 'Favorilerde zaten var!');
    }
  };
  const toVisitProfil = () => {
    if (auth().currentUser.uid != data.userId) {
      dispatch(set_id({toId: data.userId}));
      navigation.navigate('toProfilePage');
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.body_container}>
        <Image style={styles.image} source={{uri: data.url}} />
        <TouchableOpacity onPress={toVisitProfil}>
          <Text style={styles.title}>Kullanıcı:</Text>
          <Text style={styles.username}>{data.username}</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Kitap Adı:</Text>
        <Text style={styles.book_name}>{data.bookName}</Text>
        <Text style={styles.title}>Yazar Adı:</Text>
        <Text style={styles.author}>{data.author}</Text>
        <Text style={styles.title}>Kitap Türü:</Text>
        <Text style={styles.type}>{data.type}</Text>
        <TouchableOpacity style={styles.favori} onPress={addFavorite}>
          <Text style={styles.title}>Favorilere Ekle:</Text>
          <Icon style={styles.icon} name="heart" color={'red'} size={26} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ShareCard;
