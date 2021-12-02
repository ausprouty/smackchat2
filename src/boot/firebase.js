//https://firebase.google.com/docs/reference/js/auth

//import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
//import "firebase/auth";
//import "firebase/database";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';


const firebaseConfig = {
  apiKey: "AIzaSyCLlrzK5LR5iTD15CfnEcitS9l-ZZkgIR0",
  authDomain: "smackchat-e0cab.firebaseapp.com",
  projectId: "smackchat-e0cab",
  storageBucket: "smackchat-e0cab.appspot.com",
  messagingSenderId: "520477638823",
  appId: "1:520477638823:web:03a3c68cb5eb7cd8f7db82",
  databaseURL: "https://smackchat-e0cab-default-rtdb.asia-southeast1.firebasedatabase.app"
};



// Initialize Firebase
let firebaseApp = firebase.initializeApp(firebaseConfig);
let firebaseAuth = firebaseApp.auth();
let firebaseDb = firebaseApp.database();

export { firebaseAuth, firebaseDb }