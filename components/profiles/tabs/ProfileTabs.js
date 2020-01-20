import React from 'react';
import {
  createMaterialTopTabNavigator
} from 'react-navigation';

import ProfileTabComponent from './myprofile/ProfileTabComponent';
import MyReviewsTabComponent from './myreviews/MyReviewsTabComponent';

const ProfileTabs = createMaterialTopTabNavigator(
  {
    Profile: ProfileTabComponent,
    MyReviews: MyReviewsTabComponent,
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
    navigationOptions: {
      title: 'My Profile'
    }
  }
);

export default ProfileTabs;
