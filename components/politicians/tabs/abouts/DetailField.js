import React from 'react';
import { View, Text, Image } from 'react-native';

import { styles } from './Styles';
import { AntDesign } from '@expo/vector-icons';

export default function DetailField({
  icon,
  logo,
  value
}){
  return (
    <View style={styles.detailsCard}>
      {icon && (
        <AntDesign name={icon} size={30} style={styles.icon}/>
      )}

      {logo && (
        <Image source={logo} style={styles.image} />
      )}

      <Text style={{ flex: 1 }}>
      {value}
      </Text>
    </View>
  );
}
