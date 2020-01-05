import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Alert,
  TouchableOpacity,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import uuidv4 from 'uuid/v4';

import ButtonAction from './ButtonAction';
import { formatDateTime } from './../../../shared/formatDateTime';
import { styles } from './Styles';

export default class ReviewCard extends React.Component {

  ratingStarGenerator = () => {
    const starContainer = [];
    for (var i = 0; i < this.props.ratings; i++) {
      starContainer.push(<AntDesign key={uuidv4()} name="star" color={'orange'} />);
    }
    for (var i = 0; i < (5-this.props.ratings); i++) {
      starContainer.push(<AntDesign key={uuidv4()} name="star" />);
    }
    return starContainer;
  }

  handleRemovePress = () => {
    const { id, onRemovePress } = this.props;
    onRemovePress(id);
  }

  render() {
    const {
      userImage,
      username,
      created_at,
      content,
      ratings,
      onEditPress,
      onRemovePress,
    } = this.props;

    return (
      <View style={styles.cardContainer}>
          <Image source={userImage} style={styles.avatar} />
          <View style={styles.contentContainer}>
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ flex: 5, flexDirection: 'column' }}>
                <Text style={styles.cardNameText}>{username}</Text>
                <Text style={styles.cardTimeText}>Posted {formatDateTime(created_at)}</Text>
              </View>

              <ButtonAction onEdit={onEditPress} onRemove={this.handleRemovePress} />

            </View>

            <Text style={styles.reviewContent}>{content}</Text>

            <View style={styles.cardStatusFooter}>
              {this.ratingStarGenerator()}
            </View>
          </View>
      </View>
    );
  }
}
