import React,{useState} from 'react';
import {KeyboardAvoidingView, View, Alert, Platform} from 'react-native';
import styles from './Register.style';
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Logo from '../../components/Logo';

import CatchUserError from '../../utilities/CatchUserError';

const initialSignUpValues = {
  usermail: '',
  password: '',
  repassword: '',
};

const Register = ({navigation}) => {
  const [loading,setLoading] = useState(false);
  const handleSignUp = value => {
    setLoading(true);
    if (value.usermail != '') {
      if (value.password == value.repassword && value.password != "") {
        auth()
          .createUserWithEmailAndPassword(value.usermail, value.password)
          .then(() => {

            var object = {
              imageUrl:
                'https://firebasestorage.googleapis.com/v0/b/kitaplikpro.appspot.com/o/user%2Fdefault.png?alt=media&token=e271990c-40d1-4123-a66a-7168d90367c0',
              username: value.usermail.split("@")[0],
              usershared: 0,
              favorites: 0,
            };

            firestore()
              .collection('user')
              .doc(auth().currentUser.uid)
              .set(object);

            setLoading(false);
            navigation.navigate('MainScreen');
          })
          .catch((err) => {
            CatchUserError(err.code);
            setLoading(false);
          });
      } else {
        Alert.alert('Hata !', 'Şifreler Eşleşmedi !');
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  };

  const toSignIn = () => {
    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <View style={styles.inner_container}>
        <Logo />
        <Formik
          style={styles.container}
          initialValues={initialSignUpValues}
          onSubmit={handleSignUp}>
          {({values, handleChange, handleSubmit}) => (
            <>
              <Input
                name={'account'}
                value={values.usermail}
                onChangeText={handleChange('usermail')}
                placeholder={'Kullanıcı Mail...'}
              />
              <Input
                name={'lock'}
                value={values.password}
                onChangeText={handleChange('password')}
                placeholder={'Şifre...'}
                secureTextEntry={true}
              />
              <Input
                name={'lock'}
                value={values.repassword}
                onChangeText={handleChange('repassword')}
                placeholder={'Şifre Tekrarı...'}
                secureTextEntry={true}
              />
              <Button title={'Kayıt Ol'} onPress={handleSubmit} animating={loading} />
            </>
          )}
        </Formik>
        <Button title={'Geri'} thema={'secondary'} onPress={toSignIn} />
      </View>
    </KeyboardAvoidingView>
  );
};

export default Register;
