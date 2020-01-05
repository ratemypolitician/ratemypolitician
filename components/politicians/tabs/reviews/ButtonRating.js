import React from 'react';
import { TouchableOpacity } from 'react-native';

import { AntDesign } from '@expo/vector-icons';

export default function ButtonRating({
  name,
  size,
  onPress,
  color
}){
  return (
    <TouchableOpacity onPress={onPress}>
      <AntDesign name={name} size={size} color={color} />
    </TouchableOpacity>
  )
}
