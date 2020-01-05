import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

export default class PoliticianAchievementCard extends React.Component {
  render() {
    const { object } = this.props;

    return (
      <TouchableOpacity onPress={ () => this.props.navigation.push('AchievementScreen', {
        object: object,
      })}>
      <View style={styles.cardContainer}>
        <Image source={object.imageUri[0].uri} style={styles.image}/>

        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{object.title}</Text>
          <Text style={styles.location}>{object.location}</Text>

          <Text style={styles.status}>{object.status}</Text>
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
  price: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'grey',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  location: {
    fontSize: 14,
  },
  status: {
    fontSize: 13,
    color: 'grey',
    paddingVertical: 10,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
  },
})
