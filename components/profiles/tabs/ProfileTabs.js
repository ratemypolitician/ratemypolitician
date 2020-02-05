import React from 'react';
import { TouchableOpacity } from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation';
import MyProfileTabComponent from './myprofile/MyProfileTabComponent';
import MyReviewsTabComponent from './myreviews/MyReviewsTabComponent';
import { AntDesign } from '@expo/vector-icons';

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

  handleSettingsPress = () => {
    navigation.navigate('SettingsScreen');
  }

  return {
    title: 'Profile',
    headerRight: (
      <TouchableOpacity
      onPress={ this.handleSettingsPress }
      style={{ paddingRight: 20 }}
      >
        <AntDesign name={'setting'} size={25} />
      </TouchableOpacity>
    )
  }
}

export default ProfileTabs;
