import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  Button,
  FlatList,
} from 'react-native';

import PoliticianCard from './PoliticianCard';
import { fakerProfiles } from './../../data/fakerProfiles';

export default class PoliticianScreen extends React.Component {
  static navigationOptions = {
    title: 'Politicians'
  }

  static router = PoliticianCard.router;

  state = {
    loading: false,
    error: false,
    exists: false,
    items: [],
  }

  async componentDidMount(){
    if (fakerProfiles.length > 0) {
      this.setState({
        exists: true,
        items: fakerProfiles
      })
    }
  }

  renderItem = ({ item }) => (
    <PoliticianCard object={item} navigation={this.props.navigation} />
  )

  render() {
    const { loading, error, exists, items } = this.state;

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
        {exists && (
          <FlatList
            data={items}
            keyExtractor={item => item.id.toString()}
            renderItem={this.renderItem}
          />
        )}

        {!exists && (
          <View style={styles.staticViewContainer}>
          <Text>No items yet.</Text>
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
