import React from 'react';
import AppContainer from './routes';
import { useScreens } from 'react-native-screens';
useScreens();

export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    )
  }
}
