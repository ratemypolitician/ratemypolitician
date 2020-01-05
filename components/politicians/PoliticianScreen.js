import React from 'react';

import PoliticianTabs from './tabs/PoliticianTabs';

export default class PoliticianScreen extends React.Component {
  static navigationOptions = {
    title: 'Profile'
  }

  static router = PoliticianTabs.router;

  render() {
    return (
      <PoliticianTabs navigation={this.props.navigation} />
    );
  }
}
