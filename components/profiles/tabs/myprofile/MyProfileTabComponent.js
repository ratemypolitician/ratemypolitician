import React from 'react';
import { 
  ScrollView, 
  View,
  Image,
  Text, 
  TouchableOpacity 
} from 'react-native';

import STORE from './../../../../store';
import { styles } from './Styles';
import { StackActions, NavigationActions } from 'react-navigation';

export default class MyProfileTabComponent extends React.Component {
  handleSignOutPress = async () => {
    STORE.currentUser = null;

    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'TabNavigator' })],
    });
    this.props.navigation.dispatch(resetAction);
  }
  
  render() {
    const currentUser = STORE.currentUser;

    return (
      <ScrollView 
      showsVerticalScrollIndicator={false}
      style={styles.container}
      >
        <View style={styles.avatarSection}>
          <Image source={currentUser.userImage} style={styles.avatar} />
          <Text style={styles.profileName}>
            {currentUser.name}
          </Text>
          <Text style={styles.status}>{currentUser.email}</Text>
        </View>

        <TouchableOpacity
          onPress={this.handleSignOutPress}
          style={[styles.textInput, styles.button ]}
        >
          <Text style={styles.buttonText}>Sign Out</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

