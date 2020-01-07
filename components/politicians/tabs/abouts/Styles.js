import React from 'react';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
  },
  avatarSection: {
    flex: 1,
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 50,
  },
  avatar: {
    height: 150,
    width: 150,
    borderRadius: 75,
    borderWidth: 2,
    borderColor: 'white',
  },
  iconEditImage: {
    position: 'absolute',
    zIndex: 1,
    backgroundColor: 'grey',
    width: 30,
    height: 30,
    borderRadius: 15,
    padding: 5,
  },
  profileName: {
    padding: 10,
    fontWeight: 'bold',
    fontSize: 20,
    maxWidth: 300,
    textAlign: 'center',
  },
  status: {
    fontSize: 15,
  },
  detailsSection: {
    flex: 1,
    padding: 5,
  },
  detailsCard: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 10,
    margin: 5,
    marginBottom: 0,
    alignItems: 'center',
  },
  icon: {
    paddingRight: 10,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  buttonText: {
    flex: 1,
    fontSize: 15,
    textAlign: 'center',
    padding: 10,
  },
  avatarTextInput: {
    flex: 1,
    margin: 5,
    padding: 10,
    backgroundColor: 'white',
    width: 200,
    textAlign: 'center',
  }
})
