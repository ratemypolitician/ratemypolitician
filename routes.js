import React from 'react';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator,
  createAppContainer,
} from 'react-navigation';
import { Dimensions } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

// import sign in
import SignInUp from './components/auths/SignInUp';

// import politician
import PoliticianScreen from './components/politicians/PoliticianScreen';
import PoliticianTabs from './components/politicians/tabs/PoliticianTabs';
import AchievementScreen from './components/politicians/tabs/achievements/AchievementScreen';
import ImageModal from './components/politicians/tabs/achievements/ImageModal';

// import profile
import ProfileTabs from './components/profiles/tabs/ProfileTabs';

import { tabBarOptionsConfig } from './components/shared/tabBarOptionsConfig';

const getTabBarIcon = icon => ({ tintColor }) => (
  <AntDesign name={icon} size={26} style={{ color: tintColor }} />
);

const PoliticianStacks = createStackNavigator(
  {
    PoliticianScreen,
    PoliticianTabs,
    AchievementScreen,
  },
  {
    initialRouteName: 'PoliticianScreen',
    navigationOptions: {
      tabBarIcon: getTabBarIcon('team'),
    },
  },
);

const ProfileStacks = createStackNavigator(
  {
    ProfileTabs,
  },
  {
    initialRouteName: 'ProfileTabs',
    navigationOptions: {
      tabBarIcon: getTabBarIcon('user'),
    },
  }
)

const AuthProfileStacks = createSwitchNavigator(
  {
    SignInUp,
    ProfileStacks,
  },
  {
    initialRouteName: 'SignInUp',
    navigationOptions: {
      tabBarIcon: getTabBarIcon('user'),
    },
  }
)

const TabNavigator = createBottomTabNavigator(
  {
    Politician: PoliticianStacks,
    Profile: AuthProfileStacks,
  },
  {
    initialRouteName: 'Politician',
    tabBarPosition: 'bottom',
    tabBarOptions: tabBarOptionsConfig,
  }
);

const ModalNavigator = createStackNavigator(
  {
    TabNavigator,
    ImageModal: {
      screen: ImageModal,
      navigationOptions: () => ({
        gesturesEnabled: true,
        gestureResponseDistance: {
          vertical: Dimensions.get('window').height,
        },
      }),
    },
  },
  {
    initialRouteName: 'TabNavigator',
    mode: 'modal',
    headerMode: 'none',
  }
)

export default createAppContainer(ModalNavigator);
