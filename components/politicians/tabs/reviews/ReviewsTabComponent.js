import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  ActivityIndicator,
  Button,
  FlatList,
} from 'react-native';

import ToggleableReviewForm from './ToggleableReviewForm';
import EditableReview from './EditableReview';
import { ratingCalculator, newReview, reviews } from './helpers';

import { styles } from './Styles';

export default class ReviewsTabComponent extends React.Component {
  state = {
    isLoading: false,
    error: false,

    currentUser: {},
    overallRating: Number(0).toFixed(1),

    reviews: reviews,
    numberOfReviews: 2,
    starWidth: {
      five: 2,
      four: 2,
      three: 2,
      two: 2,
      one: 2,
    },
  }

  componentDidMount(){
    const { reviews } = this.state;
    const ratingArray = ratingCalculator(reviews);

    this.setState({
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

  handleCreateFormSubmit = review => {
    const { reviews, numberOfReviews } = this.state;
    const latestReviews = [newReview(review), ...reviews];
    const ratingArray = ratingCalculator(latestReviews);

    this.setState({
      reviews: latestReviews,
      numberOfReviews: numberOfReviews + 1,
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
    const { numberOfReviews, reviews } = this.state;
    const filtered = reviews.filter( review => review.id !== reviewId );
    const ratingArray = ratingCalculator(filtered);

    this.setState({
      reviews: filtered,
      numberOfReviews: numberOfReviews - 1,
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
    const { username, userImage, created_at, content, ratings, id } = item;

    return(
      <EditableReview
        id={id}
        content={content}
        ratings={ratings}
        username={username}
        userImage={userImage}
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
      numberOfReviews,
      reviews,
      starWidth,
      overallRating,
      currentUser,
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

            <Text style={styles.textReview}>{numberOfReviews} Reviews</Text>

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
            />

            <FlatList
              showsVerticalScrollIndicator={false}
              data={reviews}
              keyExtractor={item => item.id.toString()}
              renderItem={this.renderItem}
              ListFooterComponent={this.renderListPadding}
              />
          </ScrollView>
        )}
        </View>
      )}
      </View>
    );
  }
}
