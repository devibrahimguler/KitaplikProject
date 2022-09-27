import React from 'react';
import {TouchableOpacity, Text, ActivityIndicator} from 'react-native';
import styles from './Button.style';

const Button = ({title, thema = 'primary', onPress, animating = false}) => {
  return (
    <TouchableOpacity style={styles[thema].container} onPress={onPress} disabled={animating} >
      {animating ? (
        <ActivityIndicator size={'small'} animating={animating} />
      ) : (
        <Text style={styles[thema].title}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
