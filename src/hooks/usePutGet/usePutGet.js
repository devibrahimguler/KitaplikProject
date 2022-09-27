import uuid from 'react-native-uuid';

import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {useState} from 'react';

const usePutGet = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState('');

  const put = (path, bookName, author, type) => {
    setLoading(true);
    const id = uuid.v4();
    const object = {
      docId: id,
      userId: auth().currentUser.uid,
      username: auth().currentUser.email.split('@')[0],
      bookName: bookName,
      author: author,
      type: type,
      image: path,
    };
    firestore().collection('shared').doc(id).set(object);

    const reference = storage().ref(`shared/${id}`);
    reference
      .putFile(path)
      .then(() => {
        setLoading(false);
      })
      .catch(err => {
        setLoading(false);
        setError(err);
      });
  };

  const get = storageId => {
    storage()
      .ref(`shared/${storageId}`)
      .getDownloadURL()
      .then(responseData => {
        setData(responseData);
        setLoading(false);
      })
      .catch(err => {
        setLoading(false);
        setError(err);
      });
  };

  return {put, get, loading, error, data};
};

export default usePutGet;
