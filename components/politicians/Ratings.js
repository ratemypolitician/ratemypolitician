import React from 'react';
import { View, TouchableOpacity } from 'react-native';

import { AntDesign } from '@expo/vector-icons';

export default function Ratings({
  value,
  size
}){
  let ratingsArray = [];
  for (var i = 1; i <= 5; i++) {
    ratingsArray.push(
      <AntDesign
        key={i}
        size={10}
        name={i <= value ? 'star' : 'staro'}
        color={i <= value ? 'orange' : 'black'}
      />
    )
  }

  return (
    <View style={{ flexDirection: 'row' }}>
    {ratingsArray}
    </View>
  )
}
