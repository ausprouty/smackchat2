// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import firebaseModuleAuth from  "firebase/auth";
import firebaseModuleDb from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyCLlrzK5LR5iTD15CfnEcitS9l-ZZkgIR0",
  authDomain: "smackchat-e0cab.firebaseapp.com",
  projectId: "smackchat-e0cab",
  storageBucket: "smackchat-e0cab.appspot.com",
  messagingSenderId: "520477638823",
  appId: "1:520477638823:web:03a3c68cb5eb7cd8f7db82"
};
// Initialize Firebase
let firebaseApp = firebase.initializeApp(firebaseConfig);
//let firebaseAuth = firebaseApp.getAuth()
//let firebaseDb = firebaseApp.database()

//export { firebaseAuth, firebaseDb }
export {firebaseApp}