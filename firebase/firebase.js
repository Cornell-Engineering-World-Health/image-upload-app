import firebase from "firebase/app";

// Optionally import the services that you want to use
import "firebase/auth";
//import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";
// import { firebaseConfig } from "./config";

const firebaseConfig = {
  apiKey: "AIzaSyC7VKTiT_61QOdGH08Tm1xA2uWtGNOZePA",
  authDomain: "image-upload-app-c2b16.firebaseapp.com",
  projectId: "image-upload-app-c2b16",
  storageBucket: "image-upload-app-c2b16.appspot.com",
  messagingSenderId: "2925612514",
  appId: "1:2925612514:web:4d74fd413fb2b2aeecfdbb"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
