import React from 'react';
import {
  View,
  KeyboardAvoidingView,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import STORE from './../../store';
import { styles } from './Styles';
import { StackActions, NavigationActions } from 'react-navigation';
import { firebase } from './../../firebaseConfig';

export default class SignInUp extends React.Component {
  static navigationOptions = {
    title: 'My Profile'
  }

  state = {
    toggleSignInUp: true,
    email: '',
    password: '',
    loading: false,
  }

  handleToggle = () => {
    const { toggleSignInUp } = this.state;
    this.setState({ toggleSignInUp: !toggleSignInUp })
  }

  handleChangeTextEmail = (email) => {
    this.setState({ email })
  }

  handleChangeTextPassword = (password) => {
    this.setState({ password })
  }

  handleSignInPress = async (email, password) => {
    if (!email) return;
    if (!password) return;

    this.setState({ loading: true })
    await firebase.auth().signInWithEmailAndPassword(email, password)
        .then( currentUser => {
          STORE.currentUser = currentUser;

          const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'TabNavigator' })],
          });
          this.setState({ loading: false });
          this.props.navigation.dispatch(resetAction);
        })
        .catch( error => {
          this.setState({ loading: false });
          Alert.alert(error.toString());
        })
  }

  handleSignUpPress = async (email, password) => {
    if (!email) return;
    if (!password) return;

    this.setState({ loading: true });
    await firebase.auth().createUserWithEmailAndPassword(email, password)
      .then( currentUser => {
        STORE.currentUser = currentUser;

        const resetAction = StackActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: 'TabNavigator' })],
        });
        this.setState({ loading: false });
        this.props.navigation.dispatch(resetAction);
      })
      .catch( error => {
        this.setState({ loading: false });
        Alert.alert(error.toString());
      })
  }

  render() {
    const { toggleSignInUp, email, password, loading } = this.state;

    return (
      <KeyboardAvoidingView 
        style={styles.container}
        behavior={'padding'}
        enabled
      >

        <View style={styles.logoContainer}>
          <Image source={require('./../../assets/icon.png')} style={{ width: 50, height: 50 }}/>
          <Text style={styles.header}>Rate Your Politician</Text>
          <Text style={styles.subheader}>PRU 14 Malaysian Politician</Text>
        </View>

        <View style={styles.formContainer}>
          <TextInput
            style={[styles.textInput, { backgroundColor: 'whitesmoke' }]}
            autoCompleteType={'email'}
            textContentType={'emailAddress'}
            placeholder={'Email'}
            underlineColorAndroid={'transparent'}
            clearButtonMode={'always'}
            value={email}
            onChangeText={this.handleChangeTextEmail}
          />

          <TextInput
            style={[styles.textInput, { backgroundColor: 'whitesmoke' }]}
            autoCompleteType={'password'}
            textContentType={'password'}
            secureTextEntry={true}
            placeholder={'Password'}
            underlineColorAndroid={'transparent'}
            clearButtonMode={'always'}
            value={password}
            onChangeText={this.handleChangeTextPassword}
          />

          {toggleSignInUp && !loading && (
            <TouchableOpacity
              onPress={() => this.handleSignInPress(email, password)}
              style={[styles.textInput, styles.button, { backgroundColor: '#27ae60' } ]}
            >
              <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
          )}
          {toggleSignInUp && loading && (
            <ActivityIndicator size={'large'} />
          )}

          {!toggleSignInUp && (
            <TouchableOpacity
              onPress={() => this.handleSignUpPress(email, password)}
              style={[styles.textInput, styles.button, { backgroundColor: '#3498db' } ]}
            >
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
          )}
          {!toggleSignInUp && loading && (
            <ActivityIndicator size={'large'} />
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

      </KeyboardAvoidingView>
    );
  }
}
