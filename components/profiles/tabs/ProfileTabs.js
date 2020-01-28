import React from 'react';
import { TouchableOpacity, Alert } from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation';
import MyProfileTabComponent from './myprofile/MyProfileTabComponent';
import MyReviewsTabComponent from './myreviews/MyReviewsTabComponent';
import { AntDesign } from '@expo/vector-icons';
import { StackActions, NavigationActions } from 'react-navigation';
import { firebase } from './../../../firebaseConfig';
import STORE from './../../../store';

const ProfileTabs = createMaterialTopTabNavigator(
  {
    Profile: MyProfileTabComponent,
    Reviews: MyReviewsTabComponent,
  },
  {
    initialRouteName: 'Profile',
    tabBarPosition: 'top',
    tabBarOptions: {
      style: {
        backgroundColor: 'whitesmoke',
      },
      showLabel: true,
      showIcon: false,
      activeTintColor: 'black',
      inactiveTintColor: 'grey',
      scrollEnabled: false,
    },
  }
);

ProfileTabs.navigationOptions = ({ navigation }) => {
  
  handleSignOutPress = async () => {
    try {
      await firebase.auth().signOut().then( () => {
        STORE.currentUser = null;

        const resetAction = StackActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: 'TabNavigator' })],
        });
        navigation.dispatch(resetAction);
      })
    } catch (error) {
      Alert.alert(error.toString())
    }
  }

  return {
    title: 'Profile',
    headerRight: (
      <TouchableOpacity
      onPress={ this.handleSignOutPress }
      style={{ paddingRight: 20 }}
      >
        <AntDesign name={'logout'} size={20} />
      </TouchableOpacity>
    )
  }
}

export default ProfileTabs;
