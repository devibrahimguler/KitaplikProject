import React, {useState} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import styles from './EditProfile.style';
import {Formik} from 'formik';
import {useDispatch} from 'react-redux';
import {launchImageLibrary} from 'react-native-image-picker';
import auth from '@react-native-firebase/auth';
import storage from "@react-native-firebase/storage";
import firestore from "@react-native-firebase/firestore";

import Button from '../../components/Button';
import Input from '../../components/Input';
import {set_id} from '../../contex/userSlience';

const initialUserValue = {
  username: '',
};

const EditProfile = ({navigation, route}) => {
  const userData = route.params;

  const [loading, setLoading] = useState(false);
  const [imgUrl, setImgUrl] = useState(userData.imageUrl);

  const handleSelectImage = async () => {
    const result = await launchImageLibrary({
      mediaType: 'photo',
      presentationStyle: 'formSheet',
      maxWidth: 300,
      maxHeight: 300,
    });
    if (!result.didCancel) {
      const pathToFile = result.assets[0].uri;
      setImgUrl(pathToFile);
    }
  };
  const dispatch = useDispatch();
  const toLogOut = () => {
    auth()
      .signOut()
      .then(() => {
        navigation.navigate('EntryScreen');
        dispatch(set_id({toId: ''}));
      });
  };

  const addImage = async (username, pathToFile) => {
    const reference = storage().ref(`user/${auth().currentUser.uid}.png`);

      await reference.putFile(pathToFile);

      const url = await storage()
        .ref(`user/${auth().currentUser.uid}.png`)
        .getDownloadURL();
      var object = {
        username: username,
        imageUrl: url,
      };
      firestore().collection('user').doc(auth().currentUser.uid).update(object);
      setImgUrl(url);
      setLoading(false);
  }
  const editProfile = (values) => {
    setLoading(true);
    if(values.username && imgUrl != userData.imageUrl) {
      addImage(values.username, imgUrl);
      setLoading(false);
      navigation.goBack();
    }
    else if (imgUrl != userData.imageUrl) {
      addImage(userData.username, imgUrl);
      setLoading(false);
      navigation.goBack();
    }
    else if(values.username) {
      // codu temizle ve username değişirse paylaşılanlarında usernamini değiştir.
      var object = {
        username: values.username,
      };
      firestore().collection('user').doc(auth().currentUser.uid).update(object);
      setLoading(false);
      navigation.goBack();
    }
  };

  return (
    <View style={styles.model}>
      <TouchableOpacity onPress={handleSelectImage}>
        <Image style={styles.image} source={{uri: imgUrl}} />
      </TouchableOpacity>
      <Formik
        style={styles.model}
        initialValues={initialUserValue}
        onSubmit={editProfile}>
        {({values, handleChange, handleSubmit}) => (
          <>
            <Input
              name={'account'}
              value={values.username}
              onChangeText={handleChange('username')}
              placeholder={userData.username}
            />
            <Button
              title={'Kaydet'}
              onPress={handleSubmit}
              animating={loading}
            />
          </>
        )}
      </Formik>
      <Button title={'Vazgeç'} onPress={() => {}} animating={loading} />
      <Button title={'Çıkış Yap'} onPress={toLogOut} animating={loading} />
    </View>
  );
};

export default EditProfile;
