import React from 'react';
import { StatusBar, View } from 'react-native';
import { useScreens } from 'react-native-screens';
import timeSettings from './timeSettings';

import AppContainer from './routes';
useScreens();
timeSettings();

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
