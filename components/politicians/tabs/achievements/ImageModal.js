import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  StatusBar,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import { AntDesign } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default class ImageModal extends React.Component {
  state = {
    imageArray: this.props.navigation.getParam('images'),
  }

  renderItem = ({ item }) => (
    <Image source={item.uri} style={styles.image} />
  )

  render() {
    const { imageArray } = this.state;

    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />

        <TouchableOpacity onPress={ () => this.props.navigation.goBack() } style={styles.buttonClose}>
          <AntDesign name={'close'} size={30} style={{ padding: 5 }} />
        </TouchableOpacity>

        <FlatList
          data={imageArray}
          keyExtractor={item => item.id.toString()}
          renderItem={this.renderItem}
          pagingEnabled={true}
          horizontal={true}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.8)',
  },
  buttonClose: {
    width: 40,
    height: 40,
    margin: 15,
    padding: 0,
    position: 'absolute',
    zIndex: 1,
    backgroundColor: 'white',
    borderRadius: 20,
  },
  image: {
    flex: 1,
    width,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'contain',
  },
})
