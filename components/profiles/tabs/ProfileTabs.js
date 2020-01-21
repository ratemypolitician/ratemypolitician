import React from 'react';
import {
  createMaterialTopTabNavigator,
} from 'react-navigation';

import MyProfileTabComponent from './myprofile/MyProfileTabComponent';
import MyReviewsTabComponent from './myreviews/MyReviewsTabComponent';

const ProfileTabs = createMaterialTopTabNavigator(
  {
    MyProfile: MyProfileTabComponent,
    MyReviews: MyReviewsTabComponent,
  },
  {
    initialRouteName: 'MyProfile',
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
