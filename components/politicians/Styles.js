import Constants from 'expo-constants';
import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
  // PoliticianCard
  cardContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
    borderColor: 'grey',
    backgroundColor: 'white',
    marginVertical :5,
  },
  detailsContainer: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  subheader: {
    fontSize: 13,
    color: 'grey',
  },
  subtitle: {
    fontSize: 14,
  },
  image: {
    width: 100,
    height: 100,
    marginLeft: 15,
    marginVertical: 10,
  },

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
    position: 'absolute',
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
