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
  Alert,
} from 'react-native';
import STORE from './../../store';
import { styles } from './Styles';

const user = {
  name: 'Ali',
  email: 'alkyu92@gmail.com',
}

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
    STORE.currentUser = user;
    this.props.navigation.navigate('ProfileTabs');
    // Alert.alert('signed In')
  }

  handleSignUpPress = () => {
    // Alert.alert('signed UP')
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
