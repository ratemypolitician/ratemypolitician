import React from 'react';
import { StatusBar, View } from 'react-native';
import { useScreens } from 'react-native-screens';

import AppContainer from './routes';
useScreens();

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar hidden={false} barStyle={'dark-content'} />
        <AppContainer />
      </View>
    )
  }
}
