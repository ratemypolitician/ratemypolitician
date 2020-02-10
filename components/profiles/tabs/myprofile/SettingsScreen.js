import React from 'react';
import {
  Text, 
  TextInput, 
  TouchableOpacity, 
  Alert, 
  Image,
  View,
  KeyboardAvoidingView,
} from 'react-native';
import { firebase } from './../../../../firebaseConfig';
import STORE from './../../../../store';
import { StackActions, NavigationActions } from 'react-navigation';
import { styles } from './Styles';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';
import { AntDesign } from '@expo/vector-icons';

const anon = require('./../../../../assets/users/anon.png');

export default class SettingsScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
      return {
        title: 'Settings',
        headerRight: 
        <TouchableOpacity 
        onPress={navigation.getParam('update')} 
        style={{ paddingRight: 15 }}
        >
          <Text style={{ fontSize: 16 }}>Update</Text>
        </TouchableOpacity>
      }
    }

    state = {
        displayName: STORE.currentUser.displayName,
        photoURL: STORE.currentUser.photoURL,
        loading: false,
        deleteFlag: false,
    }

    componentWillMount(){
      const { navigation } = this.props;
      navigation.setParams({ update: this.handleSubmitPress })
    }

    componentDidMount() {
      this.getPermissionAsync();
    }
  
    getPermissionAsync = async () => {
      if (Constants.platform.ios) {
        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        if (status !== 'granted') {
          Alert.alert('Permission Denied!');
        }
      }
    }
  
    _pickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.cancelled) {
        this.setState({ 
          photoURL: result.uri,
        });
      }
    };

    handleSignOutPress = async () => {
      try {
        await firebase.auth().signOut().then( () => {
          STORE.currentUser = null;

          const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'TabNavigator' })],
          });
          this.props.navigation.dispatch(resetAction);
        })
      } catch (error) {
        Alert.alert(error.toString())
      }
    }

    handleChangeName = (displayName) => this.setState({ displayName });

    handleClearProfileImage = () => {
      const { photoURL } = this.state;

      if (!photoURL) {
        return;
      }

      this.setState({ photoURL: '', deleteFlag: true });
    }

    handleSubmitPress = async () => {
      const { displayName, photoURL, deleteFlag } = this.state;

      const uid = STORE.currentUser.uid;
      const storageRef = firebase.storage().ref('users/' + uid + '.png');

      this.setState({ loading: true });

      console.log(STORE.currentUser.photoURL);
      console.log(photoURL);
      

      if (displayName) {
        // name present
        console.log('name present');

        if (STORE.currentUser.displayName !== displayName) {
          console.log('new name');
          await firebase.auth().currentUser.updateProfile({ displayName });
        }

        if (photoURL) {
          // image present
          console.log('photo also present');

          if (STORE.currentUser.photoURL !== photoURL) {
            console.log('new photo');
            
            const image = await fetch(photoURL);
            const imageBlob = await image.blob();

            await storageRef.put(imageBlob).then( snapshot => {
              snapshot.ref.getDownloadURL().then( newPhotoURL => {
                firebase.auth().currentUser.updateProfile({
                  photoURL: newPhotoURL,
                })
              })
            })
          }
        }
      }

      if (deleteFlag) {
        console.log('delete photo');
        
        await storageRef.delete().then( () => {
          firebase.auth().currentUser.updateProfile({
            displayName,
            photoURL,
          })
        })
        this.setState({ deleteFlag: false })
      }

      this.setState({ loading: false });
      this.props.navigation.goBack();
    }

  render() {
    const { displayName, photoURL, loading } = this.state;

    return (
      <KeyboardAvoidingView 
      behavior={'padding'}
      style={styles.container}
      >
        <View style={styles.avatarSection}>
          <TouchableOpacity onPress={this._pickImage}>
            <AntDesign name={'camera'} size={30} style={styles.editIconImage} />
            <Image source={photoURL ? { uri: photoURL } : anon} style={styles.avatar} />
            <Text style={{ textAlign: 'center' }}>Edit Profile Image</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.handleClearProfileImage} style={{ paddingTop: 20}}>
            <Text style={{ color: 'red' }}>Clear Profile Image</Text>
          </TouchableOpacity>
        </View>

        <TextInput 
            value={displayName}
            placeholder={'Display Name'}
            onChangeText={this.handleChangeName}
            style={[styles.textInput, { backgroundColor: 'whitesmoke' }]}
            underlineColorAndroid={'transparent'}
        />

        {!loading && (
          <TouchableOpacity
          onPress={this.handleSignOutPress}
          style={[styles.button, {backgroundColor: '#e74c3c'} ]}
          >
          <Text style={styles.buttonText}>Sign Out</Text>
          </TouchableOpacity>
        )}
    </KeyboardAvoidingView>
    );
  }
}
