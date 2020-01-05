import React from 'react';
import { View, StyleSheet } from 'react-native';

import { AntDesign } from '@expo/vector-icons';

import AboutDetailsComponent from './AboutDetailsComponent';
import AboutEditFormComponent from './AboutEditFormComponent';

import { fakerProfiles } from './../../../../data/fakerProfiles';

export default class AboutTabComponent extends React.Component {
  state = {
    isEdit: false,
    loading: false,
    error: false,
    profile: fakerProfiles[0],
  }

  componentDidMount(){

  }

  componentWillUnmount(){

  }

  handleEditPress = () => {
    this.openForm();
  }

  openForm = () => {
    this.setState({ isEdit: true });
  }

  handleCancelPress = () => {
    this.closeForm();
  }

  closeForm = () => {
    this.setState({ isEdit: false });
  }

  handleSubmitEditPress = (profile) => {
    const { isEdit } = this.state;

    this.setState({
      isEdit: isEdit ? false : true,
      profile,
    })
  }

  render() {
    const { isEdit, profile } = this.state;

    return (
      <View style={styles.container}>
        {isEdit && (
          <AboutEditFormComponent
            profile={profile}
            onSubmitEditPress={this.handleSubmitEditPress}
            onCancelPress={this.handleCancelPress}
            />
        )}

        {!isEdit && (
          <AboutDetailsComponent
            profile={profile}
            onEditPress={this.handleEditPress}
            />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
