import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'whitesmoke',
    },
    avatarSection: {
    flex: 1,
    backgroundColor: 'white',
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
    profileName: {
        padding: 10,
        fontWeight: 'bold',
        fontSize: 20,
        maxWidth: 300,
        textAlign: 'center',
      },
      status: {
        fontSize: 15,
        maxWidth: 300,
        textAlign: 'center',
      },
    textInput: {
      height: 50,
      minWidth: 320,
      margin: 10,
      paddingHorizontal: 20,
      borderRadius: 20,
    },
    button: {
      justifyContent: 'center',
      backgroundColor: '#c0392b',
    },
    buttonText: {
      textAlign: 'center',
      fontSize: 15,
      fontWeight: 'bold',
      color: 'white',
    }
  })