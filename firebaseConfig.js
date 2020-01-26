import * as Firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAC9Zo_Vsreo_A4vYIKqHdANQ8mPRd_lZU",
    authDomain: "phmeter-39016.firebaseapp.com",
    databaseURL: "https://phmeter-39016.firebaseio.com",
    projectId: "phmeter-39016",
    storageBucket: "phmeter-39016.appspot.com",
    messagingSenderId: "1048671615861",
    appId: "1:1048671615861:web:1ffe79fa234a484d19313c",
    measurementId: "G-W7Q95QB1PF"
  };

export const firebase = Firebase.initializeApp(firebaseConfig);