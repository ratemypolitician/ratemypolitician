import Constants from 'expo-constants';
import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
  },
  staticViewContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: Constants.statusBarHeight + 20,
    paddingBottom: 40,
    paddingHorizontal: 20,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'grey',
    backgroundColor: 'white',
  },
  searchHeader: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  searchIcon: {
    position: 'absolute',
    paddingTop: Constants.statusBarHeight + 18,
    right: 20
  },
  textInput: {
    position: 'absolute',
    backgroundColor: 'whitesmoke',
    borderRadius: 10,
    width: '90%',
    left: 15,
    top: Constants.statusBarHeight + 11,
    paddingHorizontal: 15,
    ...Platform.select({
      ios: {
        paddingVertical: 10,
      },
      android: {
        paddingVertical: 5,
      }
    })
  }
})
