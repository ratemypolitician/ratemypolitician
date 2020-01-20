import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  Alert,
  TouchableOpacity,
  ActionSheetIOS,
  FlatList,
  TextInput,
  StatusBar,
  KeyboardAvoidingView,
} from 'react-native';
import uuidv4 from 'uuid/v4';
import { AntDesign } from '@expo/vector-icons';
import ButtonHeader from './ButtonHeader';
import CarouselImage from './CarouselImage';
import { styles } from './Styles';

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
      <CarouselImage image={item.uri} onPress={() => this.props.navigation.navigate('ImageModal', { images: object.imageUri })} />
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
