import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ActionSheetIOS,
  FlatList,
  Platform,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import ActionSheet from 'react-native-actionsheet';
import ButtonHeader from './ButtonHeader';
import CarouselImage from './CarouselImage';
import STORE from './../../../../store';
import { badgeStatusColor } from './helpers';
import { styles } from './Styles';

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
    
    if (STORE.currentUser === null) {
      this.props.navigation.navigate('SignInUp');
    } else {
      // increment likes
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
      <CarouselImage
      image={item.uri}
      onPress={() => this.props.navigation.navigate('ImageModal', { images: object.imageUri })}
      />
    )
  }

  renderHistories = ({ item }) => (
    <View style={{ paddingBottom: 10 }}>
      <Text style={{ color: 'grey', fontWeight: 'bold' }}>
      {item.date}
      </Text>
      <Text>
      {item.description}
      </Text>
    </View>
  )

  render() {
    const { isFavorited, numImage } = this.state;
    const object = this.props.navigation.getParam('object');

    const ActionSheetComponent = () => (
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
    )

    return (
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

            <ActionSheetComponent />
          </View>

          <View style={styles.captionContainer}>
            <Text style={styles.histories}>
            Achievement Histories
            </Text>
            <FlatList
            data={object.histories}
            keyExtractor={item => item.id.toString()}
            renderItem={this.renderHistories}
            />
          </View>
        </View>

      </ScrollView>
    );
  }
}
