import React from 'react';
import {
  Text,
  Image,
  TouchableOpacity,
  Clipboard
} from 'react-native';
import Toast, {DURATION} from 'react-native-easy-toast';

import { styles } from './Styles';
import { AntDesign } from '@expo/vector-icons';

export default class DetailField extends React.Component {
  handleFieldPress = (text) => {
    Clipboard.setString(text);
  }

  render() {
    const { icon, value, logo } = this.props;

    return (
      <TouchableOpacity
      style={styles.detailsCard}
      onPress={() => {
        this.handleFieldPress(value);
        this.refs.toast.show('Copied to clipboard', DURATION.LENGTH_LONG);
      }}
      >
        {icon && (
          <AntDesign name={icon} size={30} style={styles.icon}/>
        )}

        {logo && (
          <Image source={logo} style={styles.image} />
        )}

        <Text style={{ flex: 1 }}>
        {value}
        </Text>

        <Toast
          ref={'toast'}
          position={'top'}
          positionValue={0}
          fadeInDuration={750}
          fadeOutDuration={1000}
          opacity={0.6}
        />
      </TouchableOpacity>
    );
  }
}
