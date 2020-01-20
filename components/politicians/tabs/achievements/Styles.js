import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  // PoliticianAchievementCard
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
  price: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'grey',
  },
  achievementTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  achievementLocation: {
    fontSize: 14,
  },
  achievementStatus: {
    fontSize: 13,
    color: 'grey',
    paddingVertical: 10,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
  },

  container: {
    flex: 1,
  },
  numImage: {
    position: 'absolute',
    padding: 10,
    backgroundColor: 'grey',
    color: 'white',
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
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  location: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'grey',
  },
  status: {
    fontSize: 15,
    color: 'white',
    padding: 5,
    textAlign: 'center',
  },
  badge: {
    marginTop: 15,
    maxWidth: 100,
    borderRadius: 20,
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
