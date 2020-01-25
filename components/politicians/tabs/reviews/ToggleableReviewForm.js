import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import ReviewButton from './ReviewButton';
import ReviewForm from './ReviewForm';

import STORE from './../../../../store';

export default class ToggleableReviewForm extends React.Component {
  state = {
    isOpen: false,
  }

  handleFormOpen = async () => {
    const currentUser = STORE.currentUser;
    
    if (currentUser === null) {
      this.props.navigation.navigate('SignInUp');
    } else if (currentUser !== null) {
      this.setState({ isOpen: true });
    }
  }

  handleFormClose = () => {
    this.setState({ isOpen: false });
  }

  handleFormSubmit = (review) => {
    const { onFormSubmit } = this.props;

    onFormSubmit(review);
    this.setState({ isOpen: false });
  }

  render() {
    const { isOpen } = this.state;

    return (
      <View style={[styles.container, !isOpen && styles.buttonPadding]}>
        {isOpen ? (
          <ReviewForm
            onFormClose={this.handleFormClose}
            onFormSubmit={this.handleFormSubmit}
          />
        ) : (
          <ReviewButton
          title='Create Review'
          color={'black'}
          onPress={this.handleFormOpen}
          />
        )
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  buttonPadding: {
    paddingHorizontal: 15,
  },
})
