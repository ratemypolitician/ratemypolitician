import {
  createMaterialTopTabNavigator
} from 'react-navigation';

import AchievementTabComponent from './achievements/AchievementTabComponent';
import ReviewsTabComponent from './reviews/ReviewsTabComponent';
import AboutTabComponent from './abouts/AboutTabComponent';

const PoliticianTabs = createMaterialTopTabNavigator(
  {
    About: AboutTabComponent,
    // Achievements: AchievementTabComponent,
    Reviews: ReviewsTabComponent,
  },
  {
    initialRouteName: 'About',
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
      title: 'Politician Profile'
    }
  }
);

export default PoliticianTabs;
