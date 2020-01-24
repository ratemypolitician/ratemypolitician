import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import STORE from './../../store';

export default class AuthChecker extends React.Component {

  componentDidMount(){
    console.log(STORE.currentUser);
    
    if (STORE.currentUser === null) {
      this.props.navigation.navigate('SignInUp')
    } else {
      this.props.navigation.navigate('ProfileStacks')
    }
    
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
