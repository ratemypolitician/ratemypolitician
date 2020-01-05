import React from 'react';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator,
  createAppContainer,
} from 'react-navigation';
import { Dimensions } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

// import profile
import PoliticianScreen from './components/politicians/PoliticianScreen';
import AchievementScreen from './components/politicians/tabs/achievements/AchievementScreen';
import ImageModal from './components/politicians/tabs/achievements/ImageModal';

import { tabBarOptionsConfig } from './components/shared/tabBarOptionsConfig';

const getTabBarIcon = icon => ({ tintColor }) => (
  <AntDesign name={icon} size={26} style={{ color: tintColor }} />
);

const PoliticianStacks = createStackNavigator(
  {
    PoliticianScreen,
    AchievementScreen,
  },
  {
    initialRouteName: 'PoliticianScreen',
    navigationOptions: {
      tabBarIcon: getTabBarIcon('user'),
    },
  },
);

const TabNavigator = createBottomTabNavigator(
  {
    Politician: PoliticianStacks,
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
    cardStyle: {
      backgroundColor: 'rgba(52, 52, 52, 0.8)',
    }
  }
)

export default createAppContainer(ModalNavigator);
