import React from 'react';
import { StyleSheet, View, ActivityIndicator, AsyncStorage } from 'react-native';

export default class AuthChecker extends React.Component {
  _retrieveData = async () => {
    try {
        const data = await AsyncStorage.getItem('currentUser');
        if (data !== null) {
            console.log(data);
            const jsonData = JSON.parse(data);
            console.log(jsonData.name);
            
            this.props.navigation.navigate('ProfileStacks');
        } else if (data === null) {
            this.props.navigation.navigate('SignInUp');
        }
    } catch (error) {
        console.log(error);
    }
  }

  componentDidMount(){
    this._retrieveData();
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
