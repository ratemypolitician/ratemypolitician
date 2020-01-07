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
import DetailField from './DetailField';
import { logoProvider } from './helpers';


export default class AboutDetailsComponent extends React.Component {
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
