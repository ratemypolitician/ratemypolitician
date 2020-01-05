import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  Button,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';

import styles from './Styles';

export default class SignIn extends React.Component {

  handleSignInPress = () => {
    this.props.navigation.navigate('InAppNavigator');
  }

  handleFacebookPress = () => {

  }

  handleGooglePress = () => {

  }

  render() {
    return (
      <View style={styles.container}>

      <View style={styles.logoContainer}>
        <Image source={require('./../../assets/icon.png')} style={{ width: 50, height: 50 }}/>
      </View>

      <View style={styles.formContainer}>
      <TextInput
      style={styles.textInput}
      placeholder="Email"
      clearButtonMode="always"
      />

      <TextInput
      style={styles.textInput}
      placeholder="Password"
      clearButtonMode="always"
      />

      <Button
      title="Sign In"
      onPress={this.handleSignInPress}
      />
      </View>

      <View style={styles.socialContainer}>
      <Button
      title="Continue with Facebook"
      onPress={this.handleFacebookPress}
      overrides={{ backgroundColor: '#3b5998'}}
      />

      <Text style={{ paddingVertical: 15 }}>OR</Text>

      <Button
      title="Continue with Google"
      onPress={this.handleGooglePress}
      overrides={{ backgroundColor: '#DB4437'}}
      />
      </View>

      <View style={styles.bottomContainer}>
      <Text>Haven't Signed Up?</Text>
      <TouchableOpacity
      onPress={ () => this.props.navigation.navigate('SignUp')}
      >
        <Text style={{ color: 'grey' }}>Sign Up</Text>
      </TouchableOpacity>
      </View>

      </View>
    );
  }
}
