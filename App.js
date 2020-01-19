import React from 'react';
import { StatusBar, View } from 'react-native';
import AppContainer from './routes';
import { useScreens } from 'react-native-screens';
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
