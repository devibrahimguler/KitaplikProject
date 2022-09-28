import React, { useEffect, useState } from 'react';
import {View, Text, Image} from 'react-native';
import styles from './ShareCard.style';

const ShareCard = ({data}) => {
  return (
    <View style={styles.container}>
      <View style={styles.body_container}>
        <View style={styles.inner_container}>
          <Text style={styles.title}>Kullanıcı:</Text>
          <Text style={styles.username}>{data.username}</Text>
          <Text style={styles.title}>Kitap Adı:</Text>
          <Text style={styles.book_name}>{data.bookName}</Text>
          <Text style={styles.title}>Yazar Adı:</Text>
          <Text style={styles.author}>{data.author}</Text>
          <Text style={styles.title}>Kitap Türü:</Text>
          <Text style={styles.type}>{data.type}</Text>
        </View>
        <Image style={styles.image} source={{uri: data.url}} />
      </View>
    </View>
  );
};

export default ShareCard;
