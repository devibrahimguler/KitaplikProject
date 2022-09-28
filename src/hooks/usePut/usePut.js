import uuid from 'react-native-uuid';

import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {useState} from 'react';

const usePut = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const put = (path, bookName, author, type) => {
    setLoading(true);
    const id = uuid.v4();
    const reference = storage().ref(`shared/${id}.png`);
    reference
      .putFile(path)
      .then(response => {
        if (response.state == 'success') {
          storage()
            .ref(`shared/${id}.png`)
            .getDownloadURL()
            .then(responseData => {
              const object = {
                docId: id,
                userId: auth().currentUser.uid,
                username: auth().currentUser.email.split('@')[0],
                bookName: bookName,
                author: author,
                type: type,
                image: path,
                url: responseData,
              };
              firestore().collection('shared').doc(id).set(object);
              setLoading(false);
            })
            .catch(err => {
              setLoading(false);
              setError(err);
            });
        }
      })
      .catch(err => {
        setLoading(false);
        setError(err);
      });
  };

  return {put, loading, error};
};

export default usePut;
