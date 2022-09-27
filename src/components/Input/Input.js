import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './Input.style';

const Input = ({value, onChangeText, placeholder, secureTextEntry = false}) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default Input;
