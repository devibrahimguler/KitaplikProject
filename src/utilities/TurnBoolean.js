const TurnBoolean = (col, data, docId) => {
  switch (col) {
    case 'fav':
      return !data.find(value => {
        if (value.data().docId == docId) {
          return true;
        }
      });

    case 'shar':
      return !data.find(value => {
        if (value.data().docId == docId) {
          return true;
        }
      });

    default:
      return false;
  }
};

export default TurnBoolean;
