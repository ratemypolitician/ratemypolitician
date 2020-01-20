import React, { PureComponent } from 'react';
import {
  TouchableOpacity,
  Image,
} from 'react-native';
import { styles } from './Styles';

export default class CarouselImage extends PureComponent {

  render(){
    const { onPress, image } = this.props;

    return (
      <TouchableOpacity onPress={onPress}>
        <Image source={image} style={styles.carouselImage} />
      </TouchableOpacity>
    )
  }
}
