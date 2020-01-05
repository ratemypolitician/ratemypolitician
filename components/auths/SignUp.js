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

  handleSignUpPress = () => {

  }

  handleFacebookSignUpPress = () => {

  }

  handleGoogleSignUpPress = () => {

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
      title="Sign Up"
      onPress={this.handleSignUpPress}
      />
      </View>

      <View style={styles.socialContainer}>
      <Button
      title="Sign Up with Facebook"
      onPress={this.handleFacebookSignUpPress}
      />

      <Text style={{ paddingVertical: 15 }}>OR</Text>

      <Button
      title="Sign Up with Google"
      onPress={this.handleGoogleSignUpPress}
      />
      </View>

      <View style={styles.bottomContainer}>
      <Text>Already Signed Up?</Text>
      <TouchableOpacity
      onPress={ () => this.props.navigation.navigate('SignIn')}
      >
        <Text style={{ color: 'grey' }}>Sign In</Text>
      </TouchableOpacity>
      </View>

      </View>
    );
  }
}
