import React, {useState} from 'react';
import {Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import styles from './EditBook.style';
import {launchImageLibrary} from 'react-native-image-picker';
import usePut from '../../hooks/usePut';
import {Formik} from 'formik';

import Button from '../../components/Button';
import Input from '../../components/Input';

const initialBooksValues = {
  bookName: '',
  author: '',
  type: '',
};

const EditBook = ({navigation}) => {
  const [image, setImage] = useState(
    'https://firebasestorage.googleapis.com/v0/b/kitaplikpro.appspot.com/o/shared%2Fselect-image.png?alt=media&token=026cdd1e-e91a-424d-888b-9f0378902d31',
  );
  const {put, loading} = usePut();

  const handleSelectImage = async () => {
    const result = await launchImageLibrary({
      mediaType: 'photo',
      presentationStyle: 'formSheet',
      maxHeight: 300,
      maxWidth: 300,
    });

    if (!result.didCancel) {
      const pathToFile = result.assets[0].uri;
      setImage(pathToFile);
    }
  };
  const handleSharedBook = (values) => {
    console.log(values);
    if(values.bookName != ""){
      if(values.author != ""){
        if(values.type != ""){
          if(image != 'https://firebasestorage.googleapis.com/v0/b/kitaplikpro.appspot.com/o/shared%2Fselect-image.png?alt=media&token=026cdd1e-e91a-424d-888b-9f0378902d31') {
            put(image, values.bookName, values.author, values.type);
            values.bookName = "";
            values.author="";
            values.type="";
            navigation.goBack();
          }
        }
      }
    }
    
  };
  const toSharePage =()=>{
    navigation.goBack();
  }
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.inner_container}
        onPress={handleSelectImage}>
        <Image style={styles.image} source={{uri: image}} />
      </TouchableOpacity>
      <Formik
        style={styles.container}
        initialValues={initialBooksValues}
        onSubmit={handleSharedBook}>
        {({values, handleChange, handleSubmit}) => (
          <>
            <Input
              value={values.bookName}
              onChangeText={handleChange('bookName')}
              placeholder={'Kitap adı...'}
            />
            <Input
              value={values.author}
              onChangeText={handleChange('author')}
              placeholder={'Yazar adı...'}
            />
            <Input
              value={values.type}
              onChangeText={handleChange('type')}
              placeholder={'Kitap türü...'}
            />
            <Button
              title={'Ekle'}
              onPress={handleSubmit}
              animating={loading}
            />
            <Button
              title={'Vazgeç'}
              onPress={toSharePage}
              animating={loading}
            />
          </>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default EditBook;
