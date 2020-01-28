import React from 'react';
import { 
  ScrollView, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  Alert, 
  Image,
  View,
  ActivityIndicator,
} from 'react-native';
import { firebase } from './../../../../firebaseConfig';
import STORE from './../../../../store';
import { styles } from './Styles';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';
import { AntDesign } from '@expo/vector-icons';

const anon = require('./../../../../assets/users/anon.png');

export default class SettingsScreen extends React.Component {
    static navigationOptions = {
        title: 'My Profile Settings'
    }

    state = {
        displayName: STORE.currentUser.displayName,
        photoURL: STORE.currentUser.photoURL,
        loading: false,
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

    handleChangeName = (displayName) => this.setState({ displayName });

    handleClearProfileImage = () => this.setState({ photoURL: '' });

    handleSubmitPress = async () => {
      const { displayName, photoURL } = this.state;
      
      const image = await fetch(photoURL);
      const imageBlob = await image.blob();

      const uid = STORE.currentUser.uid;
      const storageRef = firebase.storage().ref('users/' + uid + '.png');

      this.setState({ loading: true });
      await storageRef.put(imageBlob).then( snapshot => {
        snapshot.ref.getDownloadURL().then( newPhotoURL => {
          firebase.auth().currentUser.updateProfile({
            displayName,
            photoURL: newPhotoURL,
          }).then( () => {
            this.setState({ loading: false });
            this.props.navigation.goBack();
          })
        })
      })
    }

  render() {
    const { displayName, photoURL, loading } = this.state;

    return (
    <ScrollView style={styles.container}>
        
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
        
        {loading && (
          <ActivityIndicator size={'large'} style={{ paddingVertical: 20 }} />
        )}

        {!loading && (
          <TouchableOpacity
            onPress={this.handleSubmitPress}
            style={[styles.button, {backgroundColor: '#27ae60'} ]}
          >
            <Text style={styles.buttonText}>Update Profile</Text>
          </TouchableOpacity>
        )}
        
    </ScrollView>
    );
  }
}
