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
    button: {
      height: 50,
      margin: 10,
      paddingHorizontal: 20,
      borderRadius: 20,
      justifyContent: 'center',
    },
    buttonText: {
      textAlign: 'center',
      fontSize: 15,
      fontWeight: 'bold',
      color: 'white',
    },
    badge: {
      marginVertical: 5,
      borderRadius: 20,
      paddingHorizontal: 20,
    }
  })