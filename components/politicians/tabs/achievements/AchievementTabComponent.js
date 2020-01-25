import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  Button,
  FlatList,
} from 'react-native';

import PoliticianAchievementCard from './PoliticianAchievementCard';
import { fakerAchievements } from './../../../../data/fakerAchievements';

export default class AchievementTabComponent extends React.Component {
  static router = PoliticianAchievementCard.router;

  state = {
    loading: false,
    error: false,
    items: [],
  }

  async componentDidMount(){
    const politician = this.props.navigation.getParam('object');
    const filtered = fakerAchievements.filter( ach => ach.politicianId === politician.id );

    if (filtered.length > 0) {
      this.setState({
        items: filtered
      })
    }
  }

  renderItem = ({ item }) => (
    <PoliticianAchievementCard object={item} navigation={this.props.navigation} />
  )

  render() {
    const { loading, error, items } = this.state;

    return (
      <View style={styles.container}>
      {loading && (
        <View style={styles.container}>
          {!error && (
            <View style={styles.staticViewContainer}>
              <ActivityIndicator size={'large'} />
              <Button title="Stop loading" onPress={ () => this.setState({ loading: false })}/>
            </View>
          )}

          {error && (
            <View style={styles.staticViewContainer}>
              <Text>An error has occured.</Text>
              <Button title="Retry" onPress={ () => this.setState({ loading: false })}/>
            </View>
          )}
        </View>
      )}

      {!loading && (
        <View style={styles.container}>
        {items.length > 0 && (
          <FlatList
            data={items}
            keyExtractor={item => item.id.toString()}
            renderItem={this.renderItem}
          />
        )}

        {items.length === 0 && (
          <View style={styles.staticViewContainer}>
          <Text>No achievements yet.</Text>
          </View>
        )}

        </View>
      )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
  },
  staticViewContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
