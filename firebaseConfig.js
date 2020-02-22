import * as Firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB2rxgV0zB6N31mnRY20orHb0m42aWuNbU",
  authDomain: "phmeter-df00d.firebaseapp.com",
  databaseURL: "https://phmeter-df00d.firebaseio.com",
  projectId: "phmeter-df00d",
  storageBucket: "phmeter-df00d.appspot.com",
  messagingSenderId: "350459418918",
  appId: "1:350459418918:web:d2d5eca29ff02e29b289e7",
  measurementId: "G-FDZFFPWQVE"
};

export const firebase = Firebase.initializeApp(firebaseConfig);
export const db = Firebase.firestore();