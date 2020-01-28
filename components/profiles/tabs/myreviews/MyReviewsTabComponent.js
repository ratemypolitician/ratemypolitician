import React from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';

import EditableReview from './../../../politicians/tabs/reviews/EditableReview';
import {fakerReviews} from './../../../../data/fakerReviews';
import STORE from './../../../../store';

export default class MyReviewsTabComponent extends React.Component {
  state = {
    reviews: []
  }

  componentDidMount(){
    const reviews = fakerReviews.filter( review => review.userId === STORE.currentUser.id)
    this.setState({ reviews });
  }

  handleRemovePress = () => {

  }

  handleFormSubmit = () => {

  }

  renderItem = ({ item }) => {
    const {
      created_at,
      userId,
      username,
      photoURL,
      content,
      ratings,
      id,
    } = item;

    return(
      <EditableReview
        id={id}
        userId={userId}
        username={username}
        photoURL={photoURL}

        content={content}
        ratings={ratings}
        created_at={created_at}

        onRemovePress={this.handleRemovePress}
        onFormSubmit={this.handleFormSubmit}
      />
    )
  }

  render() {
    const { reviews } = this.state;

    return (
      <View style={styles.container}>
        {reviews.length > 0 && (
          <FlatList 
            keyExtractor={ item => item.id.toString() }
            data={reviews}
            renderItem={this.renderItem}
          />
        )}
        {reviews.length === 0 && (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>No reviews yet.</Text>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
  }
})
