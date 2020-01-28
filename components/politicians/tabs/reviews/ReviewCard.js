import React from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';

import ButtonAction from './ButtonAction';
import Ratings from './../../Ratings';
import { formatDateTime } from './../../../shared/formatDateTime';
import { styles } from './Styles';
import STORE from './../../../../store';

const anon = require('./../../../../assets/users/anon.png')

export default class ReviewCard extends React.Component {

  handleRemovePress = () => {
    const { id, onRemovePress } = this.props;
    onRemovePress(id);
  }

  render() {
    const {
      photoURL,
      username,
      userId,
      created_at,
      content,
      ratings,
      onEditPress,
    } = this.props;

    return (
      <View style={styles.cardContainer}>
          <Image source={photoURL || anon} style={styles.avatar} />
          <View style={styles.contentContainer}>
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ flex: 5, flexDirection: 'column' }}>
                <Text style={styles.cardNameText}>{username}</Text>
                <Text style={styles.cardTimeText}>Posted {formatDateTime(created_at)}</Text>
              </View>

              {STORE.currentUser !== null && (STORE.currentUser.id === userId) && (
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
