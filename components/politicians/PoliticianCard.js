import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import Ratings from './Ratings';

export default class PoliticianCard extends React.Component {
  render() {
    const { object } = this.props;

    return (
      <TouchableOpacity onPress={ () => this.props.navigation.push('PoliticianTabs', {
        object: object,
      })}>
      <View style={styles.cardContainer}>
        <Image source={object.userImage} style={styles.image}/>

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

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
    borderColor: 'grey',
    backgroundColor: 'white',
    marginVertical :5,
  },
  detailsContainer: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  subheader: {
    fontSize: 13,
    color: 'grey',
  },
  subtitle: {
    fontSize: 14,
  },
  image: {
    width: 100,
    height: 100,
    marginLeft: 15,
    marginVertical: 10,
  },
})
