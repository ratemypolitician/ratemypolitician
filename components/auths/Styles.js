import React from 'react';
import { StyleSheet } from 'react-native';

import Constants from 'expo-constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  header: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  subheader: {
    fontSize: 15,
    color: 'grey',
  },
  bottomContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  formContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  socialContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  textInput: {
    height: 50,
    minWidth: 320,
    margin: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  button: {
    justifyContent: 'center',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  }
})
