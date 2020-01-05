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
import uuidv4 from 'uuid/v4';

import ToggleableReviewForm from './ToggleableReviewForm';
import EditableReview from './EditableReview';

import { AntDesign } from '@expo/vector-icons';

const userImage = require('./../../../../assets/users/jedi.png');

const newReview = (attrs = {}) => {
  const review = {
    id: uuidv4(),
    content: attrs.content || 'Content',
    ratings: attrs.ratings || 1,
    username: attrs.username || 'Ali',
    userImage: attrs.userImage || userImage,
    created_at: attrs.created_at || (new Date()).getTime(),
  }
  return review;
}

export default class ReviewsTabComponent extends React.Component {
  state = {
    isLoading: false,
    error: false,

    currentUser: {},
    overallRating: Number(0).toFixed(1),

    reviews: [
      {
        id: uuidv4(),
        username: 'Ali',
        userImage: userImage,
        content: 'Lorem ipsum dolor sit ametLorem ipsum dolor\
        sit ametLorem ipsum dolor sit ametLorem ipsum dolor\
        sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit\
        ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet',
        ratings: 5,
        created_at: 1565028374144,
      },
      {
        id: uuidv4(),
        username: 'Ali',
        userImage: userImage,
        content: 'Lorem ipsum dolor sit ametLorem ipsum dolor\
        sit ametLorem ipsum dolor sit ametLorem ipsum dolor\
        sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit\
        ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet',
        ratings: 2,
        created_at: 1565028374144,
      },
    ],
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
    const ratingArray = this.ratingCalculator(reviews);

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
    const ratingArray = this.ratingCalculator(latestReviews);

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
    const ratingArray = this.ratingCalculator(mapped);

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
    const ratingArray = this.ratingCalculator(filtered);

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

  ratingCalculator = (fetchResult) => {
    const totalfive = fetchResult.filter(review => review.ratings == 5).length;
    const totalfour = fetchResult.filter(review => review.ratings == 4).length;
    const totalthree = fetchResult.filter(review => review.ratings == 3).length;
    const totaltwo = fetchResult.filter(review => review.ratings == 2).length;
    const totalone = fetchResult.filter(review => review.ratings == 1).length;

    const weightedfive = totalfive * 5;
    const weightedfour = totalfour * 4;
    const weightedthree = totalthree * 3;
    const weightedtwo = totaltwo * 2;
    const weightedone = totalone * 1;

    const sumWeighted = weightedfive + weightedfour + weightedthree + weightedtwo + weightedone;
    const totalReviews = fetchResult.length;
    const overallRating = (sumWeighted/totalReviews).toFixed(1);

    const fiveStar = ((totalfive/totalReviews)*198) + 2;
    const fourStar = ((totalfour/totalReviews)*198) + 2;
    const threeStar = ((totalthree/totalReviews)*198) + 2;
    const twoStar = ((totaltwo/totalReviews)*198) + 2;
    const oneStar = ((totalone/totalReviews)*198) + 2;

    return [overallRating, oneStar, twoStar, threeStar, fourStar, fiveStar];
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
  },
  ratingBarContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  ratingBar: {
    height: 10,
    backgroundColor: 'orange',
    marginLeft: 10,
    borderRadius: 10,
  },
  staticViewContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textReview: {
    fontSize: 20,
    padding: 10,
    color: 'grey',
  }
})
