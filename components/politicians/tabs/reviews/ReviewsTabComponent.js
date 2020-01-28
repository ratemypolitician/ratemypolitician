import React from 'react';
import {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  Button,
  FlatList,
} from 'react-native';

import ToggleableReviewForm from './ToggleableReviewForm';
import EditableReview from './EditableReview';
import { ratingCalculator, newReview } from './helpers';
import { fakerReviews } from './../../../../data/fakerReviews';
import { styles } from './Styles';

export default class ReviewsTabComponent extends React.Component {
  static router = ToggleableReviewForm.router;

  filtered = () => {
    const object = this.props.navigation.getParam('object');
    return fakerReviews.filter( review => review.politicianId === object.id);
  }

  state = {
    isLoading: false,
    error: false,
    overallRating: ratingCalculator(this.filtered())[0],
    reviews: this.filtered(),
    starWidth: {
      five: ratingCalculator(this.filtered())[5],
      four: ratingCalculator(this.filtered())[4],
      three: ratingCalculator(this.filtered())[3],
      two: ratingCalculator(this.filtered())[2],
      one: ratingCalculator(this.filtered())[1],
    },
  }

  handleCreateFormSubmit = review => {
    const { reviews } = this.state;
    const latestReviews = [newReview(review), ...reviews];
    const ratingArray = ratingCalculator(latestReviews);

    this.setState({
      reviews: latestReviews,
      starWidth: {
        five: ratingArray[5],
        four: ratingArray[4],
        three: ratingArray[3],
        two: ratingArray[2],
        one: ratingArray[1],
      },
      overallRating: ratingArray[0],
    })
  }

  handleFormSubmit = attrs => {
    const { reviews } = this.state;
    const mapped = reviews.map( (review) => {
      if (review.id === attrs.id) {
        const { content, ratings } = attrs;
        return {
          ...review,
          content,
          ratings,
        }
      }
      return review;
    });
    const ratingArray = ratingCalculator(mapped);

    this.setState({
      reviews: mapped,
      starWidth: {
        five: ratingArray[5],
        four: ratingArray[4],
        three: ratingArray[3],
        two: ratingArray[2],
        one: ratingArray[1],
      },
      overallRating: ratingArray[0],
    })
  }

  handleRemovePress = (reviewId) => {
    const { reviews } = this.state;
    const filtered = reviews.filter( review => review.id !== reviewId );
    
    const ratingArray = ratingCalculator(filtered);
    
    this.setState({
      reviews: filtered,
      starWidth: {
        five: ratingArray[5],
        four: ratingArray[4],
        three: ratingArray[3],
        two: ratingArray[2],
        one: ratingArray[1],
      },
      overallRating: ratingArray[0],
    });
  }

  renderItem = ({ item }) => {
    const {
      username,
      photoURL,
      created_at,
      content,
      ratings,
      id,
      userId,
    } = item;

    return(
      <EditableReview
        id={id}
        content={content}
        ratings={ratings}
        userId={userId}
        username={username}
        photoURL={photoURL}
        created_at={created_at}
        onRemovePress={this.handleRemovePress}
        onFormSubmit={this.handleFormSubmit}
      />
    )
  }

  renderListPadding = () => (
    <View style={{ paddingBottom: 20 }} />
  )

  render() {
    const {
      isLoading,
      error,
      reviews,
      starWidth,
      overallRating,
    } = this.state;

    return (
      <View style={styles.container}>

      {isLoading && (
        <View style={styles.staticViewContainer}>
          <ActivityIndicator size="large" />
        </View>
      )}

      {!isLoading && (
        <View style={styles.container}>
        {error && (
          <View style={styles.staticViewContainer}>
            <Text>An error has occured.</Text>
            <Button title="Retry" onPress={ () => this.setState({ error: false })} />
          </View>
        )}

        {!error && (
          <ScrollView>

            <Text style={styles.textReview}>{reviews.length} Reviews</Text>

            <View style={{ flexDirection: 'row', margin: 5, padding: 10, backgroundColor: 'white', }}>
              <View style={{ flex: 0.7, paddingLeft: 10 }}>
                <View style={styles.ratingBarContainer}>
                <Text>5</Text>
                <View style={[styles.ratingBar, {width: starWidth.five}]} />
                </View>

                <View style={styles.ratingBarContainer}>
                <Text>4</Text>
                <View style={[styles.ratingBar, {width: starWidth.four}]} />
                </View>

                <View style={styles.ratingBarContainer}>
                <Text>3</Text>
                <View style={[styles.ratingBar, {width: starWidth.three}]} />
                </View>

                <View style={styles.ratingBarContainer}>
                <Text>2</Text>
                <View style={[styles.ratingBar, {width: starWidth.two}]} />
                </View>

                <View style={styles.ratingBarContainer}>
                <Text>1</Text>
                <View style={[styles.ratingBar, {width: starWidth.one, marginLeft: 12}]} />
                </View>
              </View>

              <View style={{ flex: 0.3, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Overall</Text>
                <Text style={{ fontSize: 30, fontWeight: 'bold' }}>{overallRating}</Text>
              </View>
            </View>

            <ToggleableReviewForm
              onFormSubmit={this.handleCreateFormSubmit}
              navigation={this.props.navigation}
            />

            {reviews.length > 0 && (
              <FlatList
                showsVerticalScrollIndicator={false}
                data={reviews}
                keyExtractor={item => item.id.toString()}
                renderItem={this.renderItem}
                ListFooterComponent={this.renderListPadding}
              />
            )}

            {reviews.length === 0 && (
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>No reviews yet.</Text>
              </View>
            )}
            
          </ScrollView>
        )}
        </View>
      )}
      </View>
    );
  }
}
