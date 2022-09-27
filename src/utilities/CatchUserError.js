import {Alert} from 'react-native';

const CatchUserError = type => {
  let message = '';
  switch (type) {
    case 'auth/email-already-in-use':
      message = 'Verilen e-posta adresine sahip bir hesap zaten var!';
      break;

    case 'auth/invalid-email':
      message = 'E-posta adresi geçerli değil!';
      break;

    case 'auth/operation-not-allowed':
      message = 'E-posta/şifre hesapları etkinleştirilmemiş!';
      break;

    case 'auth/weak-password':
      message = 'Parola yeterince güçlü değil!';
      break;

    case 'auth/too-many-requests':
      message = 'Çok fazla istek yollandı!';
      break;

      case 'auth/wrong-password':
        message = 'E-posta yada şifre hatalı!';
        break;

    default:
      message = 'Bir hata ile karşılaşıldı!';
  }

  Alert.alert('User Error', message);
};

export default CatchUserError;
