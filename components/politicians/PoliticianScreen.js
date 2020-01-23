import React from 'react';
import {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  Button,
  FlatList,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import PoliticianCard from './PoliticianCard';
import profiles from './../../data/profiles.json';
import { AntDesign } from '@expo/vector-icons';
import { styles } from './Styles';

export default class PoliticianScreen extends React.Component {
  static navigationOptions = {
    header: null
  }

  static router = PoliticianCard.router;

  state = {
    loading: false,
    error: false,
    exists: false,
    isSearch: false,

    keywords: '',
    profiles: [],
    filteredProfiles: [],
  }

  componentDidMount(){
    if (profiles.length > 0) {
      this.setState({
        exists: true,
        profiles,
        filteredProfiles: profiles
      })
    }
  }

  handleSearchPress = () => {
    this.setState({ isSearch: true });
  }

  handleCancelPress = () => {
    this.setState({
      isSearch: false,
      filteredProfiles: profiles,
      keywords: '',
    });
  }

  searchFromKeywords = (keywords) => {
    const { profiles } = this.state;
    // filter the items
    const filtered = profiles.filter( profile => {
      // change everything to toLowerCase
      let profileName = profile.nama.toLowerCase();
      let profileParlimen = profile.parlimen.toLowerCase();
      let profileKawasan = profile.kawasan.toLowerCase();
      let profileGabungan = profile.gabungan.toLowerCase();
      let profileParti = profile.parti.toLowerCase();
      let profileNegeri = profile.negeri.toLowerCase();

      let keywordsLowerCase = keywords.toLowerCase();

      // indexOf returns the position of the first occurrence of a specified value in a string
      // returns -1 if the value to search for never occurs

      //return true if matched
      return profileName.indexOf(keywordsLowerCase) > -1
      || profileParlimen.indexOf(keywordsLowerCase) > -1
      || profileKawasan.indexOf(keywordsLowerCase) > -1
      || profileGabungan.indexOf(keywordsLowerCase) > -1
      || profileParti.indexOf(keywordsLowerCase) > -1
      || profileNegeri.indexOf(keywordsLowerCase) > -1
    });

    return filtered;
  }

  handleChangeText = (keywords) => {
    const filteredProfiles = this.searchFromKeywords(keywords);

    const filteredProfilesName = filteredProfiles.map(
      (profile) => profile.nama
    );

    this.setState({
      keywords,
      filteredProfiles,
    });
  }

  renderItem = ({ item }) => (
    <PoliticianCard object={item} navigation={this.props.navigation} />
  )

  render() {
    const {
      loading,
      error,
      exists,
      isSearch,

      keywords,
      filteredProfiles } = this.state;

    const BottomPadding = () => (
      <View style={{ paddingBottom: 100 }} />
    )

    return (
      <View style={styles.container}>
      {loading && (
        <View style={styles.container}>
          {!error && (
            <View style={styles.staticViewContainer}>
              <ActivityIndicator size={'large'} />
              <Button title="Stop loading" onPress={ () => this.setState({ loading: false })}/>
            </View>
          )}

          {error && (
            <View style={styles.staticViewContainer}>
              <Text>An error has occured.</Text>
              <Button title="Retry" onPress={ () => this.setState({ loading: false })}/>
            </View>
          )}
        </View>
      )}

      {!loading && (
        <View style={styles.container}>
        {exists && (
          <View>

          {isSearch && (
            <View style={styles.searchContainer}>
              <TextInput
                autoFocus={true}
                value={keywords}
                placeholder={'Search politician...'}
                underlineColorAndroid={'transparent'}
                onChangeText={this.handleChangeText}
                style={styles.textInput}
              />
              <TouchableOpacity style={styles.searchIcon} onPress={this.handleCancelPress}>
                <AntDesign name={'close'} size={25} />
              </TouchableOpacity>
            </View>
          )}

          {!isSearch && (
            <View style={styles.searchContainer}>
              <View>
              <Text style={styles.searchHeader}>Rate Your Politician</Text>
              </View>
              <TouchableOpacity style={styles.searchIcon} onPress={this.handleSearchPress}>
                <AntDesign name={'search1'} size={25} />
              </TouchableOpacity>
            </View>
          )}

          {isSearch && (
            <View style={styles.resultContainer}>
              <Text style={styles.resultText}>Keyword: { keywords }</Text>
              <Text style={styles.resultText}>Results: { filteredProfiles.length }</Text>
            </View>
          )}

          <FlatList
            data={filteredProfiles}
            keyExtractor={item => item.id.toString()}
            renderItem={this.renderItem}
            ListFooterComponent={BottomPadding}
          />
          </View>
        )}

        {!exists && (
          <View style={styles.staticViewContainer}>
          <Text>No items yet.</Text>
          </View>
        )}

        </View>
      )}
      </View>
    );
  }
}
