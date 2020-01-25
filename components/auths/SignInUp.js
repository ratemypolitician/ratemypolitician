import React from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import STORE from './../../store';
import { styles } from './Styles';
import { currentUser } from './../../data/currentUser';
import { StackActions, NavigationActions } from 'react-navigation';

export default class SignInUp extends React.Component {
  static navigationOptions = {
    title: 'My Profile'
  }

  state = {
    toggleSignInUp: true,
  }

  handleToggle = () => {
    const { toggleSignInUp } = this.state;
    this.setState({ toggleSignInUp: !toggleSignInUp })
  }

  handleSignInPress = () => {
    STORE.currentUser = currentUser;

    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'TabNavigator' })],
    });

    this.props.navigation.dispatch(resetAction);
  }

  handleSignUpPress = () => {

  }

  render() {
    const { toggleSignInUp } = this.state;

    return (
      <View style={styles.container}>

        <View style={styles.logoContainer}>
          <Image source={require('./../../assets/icon.png')} style={{ width: 50, height: 50 }}/>
          <Text style={styles.header}>Rate Your Politician</Text>
          <Text style={styles.subheader}>PRU 14 Malaysian Politician</Text>
        </View>

        <View style={styles.formContainer}>
          <TextInput
            style={[styles.textInput, { backgroundColor: 'whitesmoke' }]}
            placeholder="Email or username"
            clearButtonMode="always"
          />

          <TextInput
            style={[styles.textInput, { backgroundColor: 'whitesmoke' }]}
            placeholder="Password"
            clearButtonMode="always"
          />

          {toggleSignInUp && (
            <TouchableOpacity
              onPress={this.handleSignInPress}
              style={[styles.textInput, styles.button ]}
            >
              <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
          )}

          {!toggleSignInUp && (
            <TouchableOpacity
              onPress={this.handleSignUpPress}
              style={[styles.textInput, styles.button ]}
            >
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
          )}

        </View>


        {toggleSignInUp && (
          <View style={styles.bottomContainer}>
            <Text>Haven't Signed Up?</Text>
            <TouchableOpacity
              onPress={this.handleToggle}
            >
              <Text style={{ color: 'grey' }}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        )}

        {!toggleSignInUp && (
          <View style={styles.bottomContainer}>
            <Text>Already Signed Up?</Text>
            <TouchableOpacity
            onPress={this.handleToggle}
            >
              <Text style={{ color: 'grey' }}>Sign In</Text>
            </TouchableOpacity>
          </View>
        )}

      </View>
    );
  }
}
