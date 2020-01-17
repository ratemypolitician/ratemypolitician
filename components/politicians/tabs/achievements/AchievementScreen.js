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
  Platform,
} from 'react-native';
import ActionSheet from 'react-native-actionsheet';
import { AntDesign } from '@expo/vector-icons';
import store from './../../../../store';
import ButtonHeader from './ButtonHeader';

const width = Dimensions.get('window').width;

const badgeStatusColor = (status) => {
  if (status === 'In Progress') {
    return 'orange';
  }else if (status === 'Broken') {
    return 'red';
  }else if (status === 'On Hold') {
    return 'black';
  }else if (status === 'Completed') {
    return 'green';
  }
}

export default class AchievementScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: <ButtonHeader navigation={navigation} />
    }
  }

  state = {
    isFavorited: this.props.navigation.getParam('object').isFavorited ? true : false,
    numImage: this.props.navigation.getParam('object').imageUri.length,
  }

  handleToggleFavorite = () => {
    const { isFavorited } = this.state;
    const { currentUserFavorites } = store.getState().currentUserFavorites;
    const { navigation } = this.props.navigation;

    if (isFavorited) {
      // set to false and remove from array
    } else if (!isFavorited) {
      // set to true and add to array
      store.setState({
        currentUserFavorites: [navigation.getParam('object'), ...currentUserFavorites]
      })
    }
  }

  shareFailure() {
    // do something if failed
  }

  shareSuccess(success, method) {
    // do something if succeed
  }

  handleShare = () => {
    var url = 'http://www.google.com';
    var options = { url : url };
    Platform.OS === 'ios'
      ? ActionSheetIOS.showShareActionSheetWithOptions(options, this.shareFailure, this.shareSuccess)
      : this.ActionSheet.show()
  }

  renderCarouselImages = ({ item }) =>
  {
    const object = this.props.navigation.getParam('object');
    return (
      <TouchableOpacity onPress={ () => this.props.navigation.navigate('ImageModal', { images: object.imageUri }) }>
        <Image source={item.uri} style={styles.carouselImage} />
      </TouchableOpacity>
    )
  }

  render() {
    const { isFavorited, numImage } = this.state;
    const object = this.props.navigation.getParam('object');

    return (
      <View style={styles.container}>

      <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      >
        <View style={styles.carouselContainer}>
          <Text style={styles.numImage}>
            {numImage}
            {(numImage > 1) ? ' Images' : ' Image'}
          </Text>
          <FlatList
            data={object.imageUri}
            keyExtractor={item => item.id.toString()}
            renderItem={this.renderCarouselImages}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            pagingEnabled={true}
          />
        </View>

        <View style={styles.detailsSection}>

            <Text style={styles.title}>{object.title}</Text>
            <Text style={styles.location}>{object.location}</Text>
            <View style={[styles.badge,
              { backgroundColor: badgeStatusColor(object.status) }]}>
              <Text style={styles.status}>{object.status}</Text>
            </View>

            <View style={styles.socialContainer}>

            <TouchableOpacity style={styles.socialProfile}>
              <Text style={styles.timeText}>Posted on {object.created_at}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.socialIcon} onPress={this.handleToggleFavorite}>
              <AntDesign name={isFavorited ? 'heart' : 'hearto'} size={20} />
              <Text style={styles.favoritesText}>{object.likes}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.socialIcon} onPress={this.handleShare}>
              <AntDesign name={'sharealt'} size={20} />
              <Text style={styles.favoritesText}>{object.shared}</Text>
            </TouchableOpacity>

            <ActionSheet
              ref={o => this.ActionSheet = o}
              title={'Share Link'}
              options={[
                'Cancel',
                'Whatsapp',
                'Facebook',
                'Twitter',
                'Instagram',
                'More...',
              ]}
              cancelButtonIndex={0}
              onPress={
                (buttonIndex) => {
                  if (buttonIndex === 1) {

                  } else if (buttonIndex === 2) {

                  } else if (buttonIndex === 3) {

                  } else if (buttonIndex === 4) {

                  } else if (buttonIndex === 5) {

                  }
                }
              }
            />

            </View>

            <View style={styles.captionContainer}>
              <Text>{object.caption}</Text>
            </View>

        </View>
      </ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
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
