import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Alert,
  TouchableOpacity,
  ActionSheetIOS,
  Platform,
} from 'react-native';
import ActionSheet from 'react-native-actionsheet';
import { AntDesign } from '@expo/vector-icons';

export default class ButtonAction extends React.Component {

  handleActionSheet = () => {
    Platform.OS === 'ios'
    ? ActionSheetIOS.showActionSheetWithOptions(
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
      )
    : this.ActionSheet.show()
  }

  render() {
    const { onRemove, onEdit } = this.props;

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.handleActionSheet}>
          <AntDesign name={'ellipsis1'} size={25} />
        </TouchableOpacity>

        <ActionSheet
          ref={o => this.ActionSheet = o}
          options={['Cancel', 'Edit', 'Remove']}
          cancelButtonIndex={0}
          destructiveButtonIndex={2}
          onPress={
            (buttonIndex) => {
              if (buttonIndex === 1) {
                onEdit();
              } else if (buttonIndex === 2) {
                onRemove();
              }
            }
          }
        />
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
