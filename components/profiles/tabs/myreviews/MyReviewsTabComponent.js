import React from 'react';
import { 
  View, 
  ScrollView,
  FlatList, 
  Text,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import EditableReview from './../../../politicians/tabs/reviews/EditableReview';
import STORE from './../../../../store';
import { db } from './../../../../firebaseConfig';
import { styles } from './Styles';

export default class MyReviewsTabComponent extends React.Component {
  state = {
    reviews: [],
    isLoading: false,
    refreshing: false,
  }

  getData = async () => {
    const reviewsRef = db.collection('reviews');
    this.setState({ isLoading: true });

    await reviewsRef.orderBy('created_at', 'desc').where('userId', '==', STORE.currentUser.uid).get()
    .then( snapshot => {
      let reviewArr = []
      snapshot.forEach( doc => {
        reviewArr.push(doc.data())
      })

      this.setState({ reviews: reviewArr })
    })
    .catch( error => console.log(error))

    this.setState({ isLoading: false })
  }

  componentDidMount(){
    this.getData()
  }

  handleRemovePress = (reviewId) => {
    const { reviews } = this.state;

    const filtered = reviews.filter( review => review.id !== reviewId );
    db.collection('reviews').doc(reviewId).delete();

    this.setState({ reviews: filtered });
  }

  handleFormSubmit = (reviewId) => {
    // const updatedReview = {
    //   content,
    //   ratings,
    // }

    // db.collection('reviews').doc(reviewId).update(updatedReview)
  }

  handleOnRefresh = () => {
    this.getData()
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
    const { reviews, isLoading, refreshing } = this.state;

    return (
      <ScrollView 
      contentContainerStyle={styles.container}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={this.handleOnRefresh} />}
      >
        {isLoading && (
          <View style={styles.staticViewContainer}>
            <ActivityIndicator size="large" />
          </View>
        )}

        {!isLoading && reviews.length > 0 && (
          <FlatList 
            keyExtractor={ item => item.id.toString() }
            data={reviews}
            renderItem={this.renderItem}
          />
        )}

        {!isLoading && reviews.length === 0 && (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>No reviews yet.</Text>
          </View>
        )}
        <Text style={{}}>Pull down to refresh.</Text>
      </ScrollView>
    );
  }
}


