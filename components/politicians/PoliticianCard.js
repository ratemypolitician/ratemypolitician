import React, { PureComponent } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Ratings from './Ratings';
import { imageProvider } from './../../assets/ahli/index';
import { styles } from './Styles';

export default class PoliticianCard extends PureComponent {
  render() {
    const { object } = this.props;

    return (
      <TouchableOpacity onPress={ () => this.props.navigation.push('PoliticianTabs', {
        object: object,
      })}>
      <View style={styles.cardContainer}>
        <Image source={imageProvider(object.parlimen)} style={styles.image}/>

        <View style={styles.detailsContainer}>
          <Text style={styles.header}>{object.nama}</Text>
          <Text style={styles.subheader}>{object.jawatan}</Text>
          <Text style={styles.subtitle}>{object.kementerian}</Text>
          <Text style={[styles.subheader, { paddingTop: 10 }]}>
          {object.parlimen} - {object.kawasan}
          </Text>
          <Ratings value={object.ratings} size={10} />
        </View>
      </View>
      </TouchableOpacity>
    );
  }
}
