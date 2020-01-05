import React from 'react';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    padding: 10,
    margin: 5,
    marginBottom: 0,
    backgroundColor: 'white',
  },
  cardHeaderContainer: {
    flexDirection: 'row',
    paddingBottom: 3,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 10,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  cardNameText: {
    fontWeight: 'bold',
    flex: 1,
  },
  cardTimeText: {
    color: 'grey',
    fontSize: 10,
  },
  cardStatusFooter: {
    paddingVertical: 5,
    flexDirection: 'row',
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInput: {
    height: 100,
    backgroundColor: 'whitesmoke',
    borderRadius: 15,
    paddingHorizontal: 10,
  },
  reviewContent: {
    paddingVertical: 5,
  },

  // ReviewButton
  button: {
    marginTop: 10,
    minWidth: 100,
    borderWidth: 2,
    borderRadius: 5,
  },
  small: {
    fontSize: 14,
    padding: 5,
  },
  large: {
    fontSize: 16,
    padding: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
  },

  // ReviewsTabComponent
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
