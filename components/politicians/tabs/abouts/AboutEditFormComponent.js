import React from 'react';
import {
  StyleSheet,
  View,
  Text,ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import { ImagePicker } from 'expo';
import { AntDesign } from '@expo/vector-icons';
import { styles } from './Styles';

export default class AboutEditFormComponent extends React.Component {
  constructor(props){
    super(props);

    const { profile } = props;

    this.state = {
      isEdit: false,
      profile,
    }
  }

  handleCancelPress = () => {
    const { isEdit } = this.state;
    const { onCancelPress } = this.props;

    onCancelPress(isEdit);
  }

  handleSubmitEditPress = () => {
    const { profile } = this.state;
    const { onSubmitEditPress } = this.props;

    onSubmitEditPress(profile);
  }

  handleTextChange = (name) => {
    return (text) => {
      this.setState( (prevState) => ({
        profile: {
          ...prevState.profile,
          [name]: text,
        }
      }))
    }
  }

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
    });

    if (!result.cancelled) {
      this.setState( (prevState) => ({
        profile: {
          ...prevState.profile,
          userImage: { uri: result.uri },
        }
      }))
    }
  };

  render() {
    const { profile } = this.state;

    return (
      <KeyboardAvoidingView
      behavior="padding"
      style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.01)' }}
      keyboardVerticalOffset={150}
      >

      <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.container}
      >

      <View style={styles.avatarSection}>
        <TouchableOpacity onPress={this._pickImage} style={{ alignItems: 'center', justifyContent: 'center' }}>
        <View style={styles.iconEditImage}>
          <AntDesign name={'camerao'} size={20} />
        </View>
        <Image source={profile.userImage} style={styles.avatar} />
        </TouchableOpacity>

        <TextInput
        value={profile.username}
        style={styles.avatarTextInput}
        placeholder={'Your username here...'}
        onChangeText={this.handleTextChange('username')}
        />
        <TextInput
        value={profile.status}
        style={styles.avatarTextInput}
        placeholder={'Your status here...'}
        onChangeText={this.handleTextChange('status')}
        />
      </View>

      <View style={styles.detailsSection}>

        <View style={styles.detailsCard}>
          <AntDesign name="bars" size={30} style={styles.icon}/>
          <TextInput
          value={profile.description}
          style={{ flex: 1 }}
          placeholder={'Write details and descriptions here...'}
          onChangeText={this.handleTextChange('description')}
          />
        </View>

        <View style={styles.detailsCard}>
          <AntDesign name="phone" size={30} style={styles.icon}/>
          <TextInput
          value={profile.phone}
          style={{ flex: 1 }}
          placeholder={'Write phone number here...'}
          onChangeText={this.handleTextChange('phone')}
          />
        </View>

        <View style={styles.detailsCard}>
          <AntDesign name="enviromento" size={30} style={styles.icon}/>
          <TextInput
          value={profile.location}
          style={{ flex: 1 }}
          placeholder={'Write your location here...'}
          onChangeText={this.handleTextChange('location')}
          />
        </View>

        <View style={styles.detailsCard}>
          <AntDesign name="mail" size={30} style={styles.icon}/>
          <TextInput
          value={profile.email}
          style={{ flex: 1 }}
          placeholder={'Write your email here...'}
          onChangeText={this.handleTextChange('email')}
          />
        </View>

        <View style={styles.detailsCard}>
          <AntDesign name="user" size={30} style={styles.icon}/>
          <TextInput
          value={profile.gender}
          style={{ flex: 1 }}
          placeholder={'Select gender...'}
          onChangeText={this.handleTextChange('gender')}
          />
        </View>

        <TouchableOpacity style={styles.detailsCard} onPress={this.handleSubmitEditPress}>
          <Text style={[styles.buttonText, { fontWeight: 'bold'}]}>
          Save
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.detailsCard} onPress={this.handleCancelPress}>
          <Text style={styles.buttonText}>
          Cancel
          </Text>
        </TouchableOpacity>

      </View>

      </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}
