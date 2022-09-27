import {useState, useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const useFetch = col => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetch = () => {
    switch (col) {
      case 'shared':
        firestore()
          .collection("shared")
          .onSnapshot((responseData) => {
            setLoading(false);
            setData(responseData.docs);
          },(err) => {
            setError(err.code);
            setLoading(false);
          })
        break;

        case 'favorite':
          firestore()
            .collection('user')
            .doc(auth().currentUser.uid)
            .collection("favorite")
            .onSnapshot(responseData => {
              setLoading(false);
              setData(responseData.data());
            },err => {
              setError(err.code);
              setLoading(false);
            })
          break;

      default:
        firestore()
          .collection('user')
          .doc(auth().currentUser.uid)
          .get()
          .then(responseData => {
            setLoading(false);
            setData(responseData.data());
          })
          .catch(err => {
            setError(err.code);
            setLoading(false);
          });
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  return {loading, error, data};
};

export default useFetch;
