import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import STORE from './../../store';
import { firebase } from './../../firebaseConfig';

export default class AuthChecker extends React.Component {
  async componentDidMount(){
    await firebase.auth().onAuthStateChanged( currentUser => {
      STORE.currentUser = currentUser;
      this.props.navigation.navigate( 
        currentUser ? 'ProfileStacks' : 'SignInUp'
      );
    })
  }

  render(){
    return(
      <View style={styles.container}>
        <ActivityIndicator size={'large'} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
