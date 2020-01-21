import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Alert,
  TouchableOpacity,
} from 'react-native';

import ButtonAction from './ButtonAction';
import Ratings from './../../Ratings';
import { formatDateTime } from './../../../shared/formatDateTime';
import { styles } from './Styles';
import { ratingStarGenerator } from './helpers';

export default class ReviewCard extends React.Component {

  state = {
    authenticated: false,
    currentUser: {
      id: 1,
    }
  }

  handleRemovePress = () => {
    const { id, onRemovePress } = this.props;
    onRemovePress(id);
  }

  render() {
    const {
      userImage,
      username,
      userId,
      created_at,
      content,
      ratings,
      onEditPress,
      onRemovePress,
    } = this.props;

    const { currentUser, authenticated } = this.state;

    return (
      <View style={styles.cardContainer}>
          <Image source={userImage} style={styles.avatar} />
          <View style={styles.contentContainer}>
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ flex: 5, flexDirection: 'column' }}>
                <Text style={styles.cardNameText}>{username}</Text>
                <Text style={styles.cardTimeText}>Posted {formatDateTime(created_at)}</Text>
              </View>

              {authenticated && (currentUser.id === userId) && (
                <ButtonAction onEdit={onEditPress} onRemove={this.handleRemovePress} />
              )}

            </View>

            <Text style={styles.reviewContent}>{content}</Text>

            <Ratings value={ratings} size={10} />
          </View>
      </View>
    );
  }
}
