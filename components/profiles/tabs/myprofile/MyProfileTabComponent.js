import React from 'react';
import { 
  ScrollView, 
  View,
  Image,
  Text, 
  TouchableOpacity, 
  Alert
} from 'react-native';
import STORE from './../../../../store';
import { styles } from './Styles';
import { firebase } from './../../../../firebaseConfig';

const anon = require('./../../../../assets/users/anon.png');

export default class MyProfileTabComponent extends React.Component {
  state = {
    currentUser: STORE.currentUser
  }

  async componentDidMount(){
    const { navigation } = this.props;
    this.focusListener = navigation.addListener("didFocus", () => {
      this.setState({
        currentUser: STORE.currentUser,
      });
    });
  }

  componentWillUnmount(){
    // remove listener
    this.focusListener.remove();
  }

  sendVerificationEmail = () => {
    firebase.auth().currentUser.sendEmailVerification()
      .then( () => {
        Alert.alert('Verification email sent. Please check your email.')
      })
      .catch( error => {
        Alert.alert(error.toString())
      })
  }
  
  render() {
    const { currentUser } = this.state;

    return (
      <ScrollView 
      showsVerticalScrollIndicator={false}
      style={styles.container}
      >
        <View style={styles.avatarSection}>
          <Image 
          source={currentUser.photoURL ? { uri: currentUser.photoURL } : anon} 
          style={styles.avatar} 
          />
          <Text style={styles.profileName}>
            {currentUser.displayName}
          </Text>
          <Text style={styles.status}>{currentUser.email}</Text>
          {currentUser.emailVerified && (
            <View style={[styles.badge, { backgroundColor: '#27ae60'}]}>
            <Text style={{ color: 'white'}}>Account Verified</Text>
          </View>
          )}
          {!currentUser.emailVerified && (
            <View style={{ flex: 1, alignItems: 'center' }}>
              <View style={[styles.badge, { backgroundColor: 'orange'}]}>
                <Text style={{ color: 'white' }}>Account Not Verified</Text>
              </View>
              <TouchableOpacity 
              style={[styles.button, { borderWidth: 3 }]} 
              onPress={this.sendVerificationEmail}>
                <Text style={[styles.buttonText, {color: 'black'}]}>Resend verification email</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>

      </ScrollView>
    );
  }
}

