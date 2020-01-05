import React from 'react';
import { View, StyleSheet } from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import AboutDetailsComponent from './AboutDetailsComponent';

export default class AboutTabComponent extends React.Component{
  render(){
    const profile = this.props.navigation.getParam('object');
    
    return (
      <View style={styles.container}>
        <AboutDetailsComponent
          profile={profile}
          onEditPress={this.handleEditPress}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
