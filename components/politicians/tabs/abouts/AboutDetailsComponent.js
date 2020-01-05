import React from 'react';
import {
  StyleSheet,
  View,
  Text,ScrollView,
  Image,
  TouchableOpacity
} from 'react-native';

import { styles } from './Styles';
import { AntDesign } from '@expo/vector-icons';

export default class AboutDetailsComponent extends React.Component {
  state = {
    isEdit: false,
  }

  handleEditPress = () => {
    const { isEdit } = this.state;
    const { onEditPress } = this.props;

    onEditPress(isEdit);
  }

  render() {
    const { profile } = this.props;

    return (
      <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.container}
      >

      <View style={styles.avatarSection}>
        <Image source={profile.userImage} style={styles.avatar} />
        <Text style={styles.profileName}>
          {profile.name}
        </Text>
        <Text style={styles.status}>{profile.status}</Text>
      </View>

      <View style={styles.detailsSection}>

        <View style={styles.detailsCard}>
          <AntDesign name="bars" size={30} style={styles.icon}/>
          <Text style={{ flex: 1 }}>
          {profile.description}
          </Text>
        </View>

        <View style={styles.detailsCard}>
          <AntDesign name="phone" size={30} style={styles.icon}/>
          <Text style={{ flex: 1 }}>
          {profile.phone}
          </Text>
        </View>

        <View style={styles.detailsCard}>
          <AntDesign name="enviromento" size={30} style={styles.icon}/>
          <Text style={{ flex: 1 }}>
          {profile.location}
          </Text>
        </View>

        <View style={styles.detailsCard}>
          <AntDesign name="mail" size={30} style={styles.icon}/>
          <Text style={{ flex: 1 }}>
          {profile.email}
          </Text>
        </View>

        <View style={styles.detailsCard}>
          <AntDesign
          name={profile.gender === 'Male' ? 'man' : 'woman'}
          size={30}
          style={styles.icon}
          />
          <Text style={{ flex: 1 }}>
          {profile.gender}
          </Text>
        </View>

        <TouchableOpacity style={styles.detailsCard} onPress={this.handleEditPress}>
          <Text style={[styles.buttonText, { fontWeight: 'bold'}]}>
          Edit Profile
          </Text>
        </TouchableOpacity>

      </View>

      </ScrollView>
    );
  }
}
