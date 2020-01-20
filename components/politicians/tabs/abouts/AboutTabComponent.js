import React from 'react';
import {
  StyleSheet,
  View,
  Text,ScrollView,
  Image,
  TouchableOpacity
} from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import DetailField from './DetailField';
import { logoProvider } from './../../../../assets/parti/index';
import { imageProvider } from './../../../../assets/ahli/index';
import { styles } from './Styles';

export default class AboutTabComponent extends React.Component {
  render() {
    const profile = this.props.navigation.getParam('object');

    return (
      <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.container}
      >

      <View style={styles.avatarSection}>
        <Image source={imageProvider(profile.parlimen)} style={styles.avatar} />
        <Text style={styles.profileName}>
          {profile.nama}
        </Text>
        <Text style={styles.status}>{profile.jawatan}</Text>
        <Text style={styles.status}>{profile.kementerian}</Text>
      </View>

      <View style={styles.detailsSection}>
        <DetailField logo={logoProvider(profile.gabungan)} value={profile.gabungan} />
        <DetailField logo={logoProvider(profile.parti)} value={profile.parti} />
        <DetailField icon={'bars'} value={profile.parlimen} />
        <DetailField icon={'bars'} value={profile.kawasan} />
        <DetailField icon={'bars'} value={profile.negeri} />
        <DetailField icon={'bars'} value={profile.tempat} />
        <DetailField icon={'phone'} value={profile.phone} />
        <DetailField icon={'mail'} value={profile.email} />
        <DetailField icon={'enviromento'} value={profile.address} />
        <DetailField icon={'bars'} value={profile.description} />
      </View>

      </ScrollView>
    );
  }
}
