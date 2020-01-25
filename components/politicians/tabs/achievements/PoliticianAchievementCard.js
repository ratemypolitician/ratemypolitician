import React, { PureComponent } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';
import { styles } from './Styles';

export default class PoliticianAchievementCard extends PureComponent {
  render() {
    const { object } = this.props;

    return (
      <TouchableOpacity onPress={ () => this.props.navigation.push('AchievementScreen', {
        object: object,
      })}>
      <View style={styles.cardContainer}>
        <Image source={object.imageUri[0].uri} style={styles.image}/>

        <View style={styles.detailsContainer}>
          <Text style={styles.achievementTitle}>{object.title}</Text>
          <Text style={styles.achievementLocation}>{object.location}</Text>

          <Text style={styles.achievementStatus}>{object.status}</Text>
        </View>
      </View>
      </TouchableOpacity>
    );
  }
}
