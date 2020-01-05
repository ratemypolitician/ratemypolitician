import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Alert,
  TouchableOpacity,
  ActionSheetIOS,
} from 'react-native';

import { AntDesign } from '@expo/vector-icons';

export default class ButtonAction extends React.Component {

  handleActionSheet = () => {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ['Cancel', 'Edit', 'Remove'],
        destructiveButtonIndex: 2,
        cancelButtonIndex: 0,
      },
      (buttonIndex) => {
        if (buttonIndex === 1) {
          const { onEdit } = this.props;
          onEdit();
        } else if (buttonIndex === 2) {
          const { onRemove } = this.props;
          onRemove();
        }
      },
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.handleActionSheet}>
          <AntDesign name={'ellipsis1'} size={25} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 15,
  },
})
