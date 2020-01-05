import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './Styles';
import { AntDesign } from '@expo/vector-icons';

export default function DetailField({
  icon,
  value
}){
  return (
    <View style={styles.detailsCard}>
      <AntDesign name={icon} size={30} style={styles.icon}/>
      <Text style={{ flex: 1 }}>
      {value}
      </Text>
    </View>
  );
}
