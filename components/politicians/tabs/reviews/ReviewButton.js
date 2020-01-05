import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { styles } from './Styles';

export default function ReviewButton({
  color,
  title,
  onPress,
  small,
}){
  return(
    <TouchableOpacity
    onPress={onPress}
    style={[styles.button, { borderColor: color }]}
    >
      <Text style={[styles.buttonText, small ? styles.small : styles.large, { color }]}>
      {title}
      </Text>
    </TouchableOpacity>
  )
}
