import React,{useState} from 'react';
import {KeyboardAvoidingView, View, Alert} from 'react-native';
import styles from './Login.style';
import auth from '@react-native-firebase/auth';
import {Formik} from 'formik';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Logo from '../../components/Logo';

import CatchUserError from '../../utilities/CatchUserError';

const initialSignInValues = {
  usermail: '',
  password: '',
};

const Login = ({navigation}) => {
  const [loading,setLoading] = useState(false);
  const handleSignIn = value => {
    setLoading(true);
    if(value.usermail){
      if(value.password) {
        auth()
        .signInWithEmailAndPassword(value.usermail, value.password)
        .then(() => {
          setLoading(false);
          navigation.navigate('MainScreen');
        })
        .catch((err) => {
          setLoading(false);
          CatchUserError(err.code);
        });
      } else {
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  };

  const toSingUp = () => {
    navigation.navigate('RegisterPage');
  };

  const forgetPassword = () => {
    Alert.alert('Uyarı !', 'Geçici olarak servis dışı...');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <View style={styles.inner_container}>
        <Logo />
        <Formik
          style={styles.container}
          initialValues={initialSignInValues}
          onSubmit={handleSignIn}>
          {({values, handleChange, handleSubmit}) => (
            <>
              <Input
                name={'account'}
                value={values.usermail}
                onChangeText={handleChange('usermail')}
                placeholder={'Kullanıcı mail...'}
              />
              <Input
                name={'lock'}
                value={values.password}
                onChangeText={handleChange('password')}
                placeholder={'Şifre...'}
                secureTextEntry={true}
              />
              <Button title={'Giriş Yap'} onPress={handleSubmit} animating={loading} />
            </>
          )}
        </Formik>
        <Button title={'Kayıt Ol'} thema={'secondary'} onPress={toSingUp} />
        <Button
          title={'Şifremi unuttum !'}
          thema={'secondary'}
          onPress={forgetPassword}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;
