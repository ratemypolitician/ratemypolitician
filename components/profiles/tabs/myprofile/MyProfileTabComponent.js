import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import STORE from './../../../../store';

export default class MyProfileTabComponent extends React.Component {
  handleSignOutPress = async () => {
    STORE.currentUser = null;
    this.props.navigation.navigate('SignInUp');
  }
  
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
              onPress={this.handleSignOutPress}
              style={[styles.textInput, styles.button ]}
            >
              <Text style={styles.buttonText}>Sign Out</Text>
            </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
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
    backgroundColor: '#c0392b',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  }
})
