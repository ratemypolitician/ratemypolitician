import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class Basic extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
