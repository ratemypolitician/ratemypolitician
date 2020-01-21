import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Alert,
  TouchableOpacity,
  ActionSheetIOS,
  Platform,
  Clipboard,
  Dimensions,
} from 'react-native';
import ActionSheet from 'react-native-actionsheet';
import { AntDesign } from '@expo/vector-icons';
import Toast, {DURATION} from 'react-native-easy-toast';

const width = Dimensions.get('window').width;

export default class ButtonHeader extends React.Component {

  handleCopyPress = (text) => {
    Clipboard.setString(text);
    this.refs.toast.show('Link copied to clipboard', DURATION.LENGTH_LONG);
  }

  handleReportToast = () => {
    this.refs.toast.show('Your report has been sent', DURATION.LENGTH_LONG);
  }

  sendReportMenuIOS = () => {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: [
          'Cancel Report',
          "It's fake",
          "It's inappropriate",
          "Misleading",
        ],
        cancelButtonIndex: 0,
      },
      (buttonIndex) => {
        if (buttonIndex === 1) {
          // fake
          this.handleReportToast()
        } else if (buttonIndex === 2) {
          // inappropriate
          this.handleReportToast()
        } else if (buttonIndex === 3) {
          // Misleading
          this.handleReportToast()
        }
      }
    )
  }

  actionSheetMenuIOS = () => {
    ActionSheetIOS.showActionSheetWithOptions(
        {
          options: ['Cancel', 'Report', 'Copy Link'],
          cancelButtonIndex: 0,
          destructiveButtonIndex: 1,
        },
        (buttonIndex) => {
          if (buttonIndex === 1) {
            // Send report
            this.sendReportMenuIOS()
          } else if (buttonIndex === 2) {
            this.handleCopyPress('https://www.google.com')
          }
        },
      )
  }

  handleActionSheet = () => {
    Platform.OS === 'ios'
      ? this.actionSheetMenuIOS()
      : this.ActionSheetMenuAndroid.show();
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.handleActionSheet}>
          <AntDesign name={'ellipsis1'} size={25} />
        </TouchableOpacity>

        <ActionSheet
          ref={o => this.ActionSheetMenuAndroid = o}
          options={['Cancel', 'Report', 'Copy Link']}
          cancelButtonIndex={0}
          destructiveButtonIndex={1}
          onPress={
            (buttonIndex) => {
              if (buttonIndex === 1) {
                this.ActionSheetReportAndroid.show()
              } else if (buttonIndex === 2) {
                this.handleCopyPress('https://www.google.com');
              }
            }
          }
        />

        <ActionSheet
          ref={o => this.ActionSheetReportAndroid = o}
          options={[
            'Cancel Report',
            "It's fake",
            "It's inappropriate",
            "Misleading",
          ]}
          cancelButtonIndex={0}
          onPress={
            (buttonIndex) => {
              if (buttonIndex === 1) {
                // fake
                this.handleReportToast()
              } else if (buttonIndex === 2) {
                // inappropriate
                this.handleReportToast()
              } else if (buttonIndex === 3) {
                // Misleading
                this.handleReportToast()
              }
            }
          }
        />

        <Toast
          ref={'toast'}
          position={'top'}
          fadeInDuration={750}
          fadeOutDuration={3000}
          opacity={0.8}
          style={styles.toast}
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
  toast: {
    minWidth: 250,
    marginRight: width / 1.15,
    marginTop: 400,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
