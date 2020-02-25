import * as Firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD-75j8ryxh7ppmADKHBbHPi9rVGb4c3L4",
  authDomain: "ratemypolitician-925cb.firebaseapp.com",
  databaseURL: "https://ratemypolitician-925cb.firebaseio.com",
  projectId: "ratemypolitician-925cb",
  storageBucket: "ratemypolitician-925cb.appspot.com",
  messagingSenderId: "937341828524",
  appId: "1:937341828524:web:371590ecdf1f1acd340e09",
  measurementId: "G-VX49G4N14N"
};

export const firebase = Firebase.initializeApp(firebaseConfig);
export const db = Firebase.firestore();