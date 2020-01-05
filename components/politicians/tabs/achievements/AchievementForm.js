import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  Alert,
  TouchableOpacity,
  ActionSheetIOS,
  FlatList,
  Dimensions,
  TextInput,
  StatusBar,
  KeyboardAvoidingView,
} from 'react-native';
import uuidv4 from 'uuid/v4';
import { AntDesign } from '@expo/vector-icons';
import ButtonHeader from './ButtonHeader';

const width = Dimensions.get('window').width;

export default class AchievementForm extends React.Component {
  state = {
    product: {
      id: uuidv4(),
      brand: 'Adidas',
      model: 'Top Sala',
      price: '100',
      size: 'UK 8.5',
      caption: 'Lorem ipsum dolor sit ametLorem ipsum dolor\
      sit ametLorem ipsum dolor sit ametLorem ipsum dolor\
      sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit\
      ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet',
      likes: 24,
      shared: 12,
      imageUri: [
        { id: uuidv4(), uri: require('./../../../../assets/adidas/adidas_1.jpeg') },
        { id: uuidv4(), uri: require('./../../../../assets/adidas/adidas_2.jpeg') },
        { id: uuidv4(), uri: require('./../../../../assets/adidas/adidas_3.jpeg') },
        { id: uuidv4(), uri: require('./../../../../assets/adidas/adidas_4.jpeg') },
      ],
      sellerUserId: 1,
      sellerUsername: 'Kedai Bundle Bossku',
      sellerUserImage: require('./../../../../assets/users/boss.png'),
      created_at: '2019-07-20 23:05:01',
      updated_at: '2019-07-20 23:05:01',
      isAvailable: true,
    },
  }

  renderCarouselImages = ({ item }) =>
  {
    const object = this.state.product;
    return (
      <TouchableOpacity onPress={ () => this.props.navigation.navigate('ImageModal', { images: object.imageUri }) }>
        <Image source={item.uri} style={styles.carouselImage} />
      </TouchableOpacity>
    )
  }

  handleTextChange = (name) => {
    return (text) => {
      this.setState( (prevState) => ({
        product: {
          ...prevState.product,
          [name]: text,
        }
      }));
    }
  }

  render() {
    const { product } = this.state;

    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>

      <StatusBar hidden={true} />

      <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      >
        <View style={styles.carouselContainer}>
          <Text style={styles.numImage}>
            {product.imageUri.length}
            {(product.imageUri.length > 1) ? ' Images' : ' Image'}
          </Text>
          <FlatList
            data={product.imageUri}
            keyExtractor={item => item.id.toString()}
            renderItem={this.renderCarouselImages}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            pagingEnabled={true}
          />
        </View>

        <View style={styles.detailsSection}>

            <TextInput
              value={product.model}
              style={styles.cardTitle}
              placeholder={'Model name...'}
              onChangeText={this.handleTextChange('model')}
            />

            <View style={styles.cardSubTitle}>
              <View style={styles.brandSizeContainer}>
                <TextInput
                  value={product.brand}
                  style={styles.brandText}
                  placeholder={'Brand name...'}
                  onChangeText={this.handleTextChange('brand')}
                />
                <TextInput
                  value={product.size}
                  style={styles.sizeText}
                  placeholder={'Size...'}
                  onChangeText={this.handleTextChange('size')}
                />
              </View>
              <View style={styles.priceContainer}>
              <TextInput
                value={product.price}
                style={styles.priceText}
                placeholder={'Price...'}
                onChangeText={this.handleTextChange('price')}
              />
              </View>
            </View>

            <View style={styles.captionContainer}>
            <TextInput
              value={product.caption}
              multiline={true}
              placeholder={'Product caption...'}
              onChangeText={this.handleTextChange('caption')}
            />
            </View>
        </View>
      </ScrollView>

      <View style={styles.messageshopNameContainer}>
        <TouchableOpacity onPress={ () => Alert.alert('hi') }>
          <Text style={styles.buttonFooter}>Submit</Text>
        </TouchableOpacity>
      </View>

      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  numImage: {
    position: 'absolute',
    padding: 10,
    backgroundColor: 'grey',
    color: 'white',
    borderRadius: 10,
    zIndex: 1,
  },
  socialContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    justifyContent: 'space-between',
  },
  socialProfile: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 50,
  },
  socialIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  shopIcon: {
    width: 30,
    height: 30,
  },
  profileText: {
    fontSize: 10,
  },
  timeText: {
    color: 'grey',
    fontSize: 10,
  },
  carouselContainer: {
    flex: 1,
  },
  carouselImage: {
    flex: 1,
    width,
    height: 300,
  },
  detailsSection: {
    flex: 1,
    padding: 10,
  },
  messageshopNameContainer: {
    padding: 10,
    borderColor: 'grey',
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  favoritesText: {
    color: 'grey',
    paddingRight: 13,
  },
  captionContainer: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  cardSubTitle: {
    flex: 1,
    flexDirection: 'row',
  },
  brandSizeContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  brandText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  sizeText: {
    fontSize: 15,
  },
  priceContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  priceText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  buttonFooter: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
})
