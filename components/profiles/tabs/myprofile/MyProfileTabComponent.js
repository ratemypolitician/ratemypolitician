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
import { StackActions, NavigationActions } from 'react-navigation';
import { firebase } from './../../../../firebaseConfig';

const anon = require('./../../../../assets/users/anon.png');

export default class MyProfileTabComponent extends React.Component {
  handleSignOutPress = async () => {
    try {
      await firebase.auth().signOut().then( () => {
        STORE.currentUser = null;

        const resetAction = StackActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: 'TabNavigator' })],
        });
        this.props.navigation.dispatch(resetAction);
      })
    } catch (error) {
      Alert.alert(error.toString())
    }
  }
  
  render() {
    const currentUser = STORE.currentUser;

    return (
      <ScrollView 
      showsVerticalScrollIndicator={false}
      style={styles.container}
      >
        <View style={styles.avatarSection}>
          <Image source={currentUser.userImage || anon} style={styles.avatar} />
          <Text style={styles.profileName}>
            {currentUser.name}
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
              <TouchableOpacity style={[styles.button, { borderWidth: 3 }]} onPress={ () => Alert.alert('Verification email sent')}>
                <Text style={[styles.buttonText, {color: 'black'}]}>Send verification email</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>

        <TouchableOpacity
          onPress={this.handleSignOutPress}
          style={[styles.button, {backgroundColor: '#c0392b'} ]}
        >
          <Text style={styles.buttonText}>Sign Out</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

