import React from 'react';
import {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  Button,
  FlatList,
  KeyboardAvoidingView,
} from 'react-native';

import ToggleableReviewForm from './ToggleableReviewForm';
import EditableReview from './EditableReview';
import { ratingCalculator, createReview } from './helpers';
import { styles } from './Styles';
import { db } from './../../../../firebaseConfig';

export default class ReviewsTabComponent extends React.Component {
  static router = ToggleableReviewForm.router;

  state = {
    isLoading: false,
    error: false,
    overallRating: Number(0).toFixed(1),
    reviews: [],
    starWidth: {
      five: 2,
      four: 2,
      three: 2,
      two: 2,
      one: 2,
    },
  }

  async componentDidMount(){
    const object = this.props.navigation.getParam('object');

    let testRef = db.collection('reviews');
    this.setState({ isLoading: true });
    await testRef.orderBy('created_at', 'desc').where('politicianId', '==', object.id).get()
    .then( snapshot => {
      let reviewArr = [];
      snapshot.forEach( doc => {
        reviewArr.push(doc.data())
      });

      const calculatedRating = ratingCalculator(reviewArr);
      this.setState({ 
        reviews: reviewArr,
        overallRating: calculatedRating[0],
        starWidth: {
          five: calculatedRating[5],
          four: calculatedRating[4],
          three: calculatedRating[3],
          two: calculatedRating[2],
          one: calculatedRating[1],
        }
      });
    })
    .catch( error => console.log(error));
    this.setState({ isLoading: false });
  }

  // new form submit
  handleCreateFormSubmit = review => {
    const object = this.props.navigation.getParam('object');

    const { reviews } = this.state;
    const newReview = createReview({...review, politicianId: object.id });
    const latestReviews = [newReview, ...reviews];
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

    // upload to firestore
    db.collection('reviews').doc(newReview.id).set(newReview, { merge: true });
  }

  // update review form
  handleFormSubmit = attrs => {
    const { reviews } = this.state;
    const mapped = reviews.map( (review) => {
      if (review.id === attrs.id) {
        const { content, ratings } = attrs;
        const updatedReview = { ...review, content, ratings };
        
        // update to firestore
        db.collection('reviews').doc(review.id).update(updatedReview)
        
        return updatedReview;
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

    // delete on firestore
    db.collection('reviews').doc(reviewId).delete();
    
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
          <KeyboardAvoidingView 
          behavior={'position'} 
          style={{ flex: 1 }}
          keyboardVerticalOffset={50}
          >
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
            
            {/* {console.log(reviews)
            } */}
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
          </KeyboardAvoidingView>
        )}
        </View>
      )}
      </View>
    );
  }
}
