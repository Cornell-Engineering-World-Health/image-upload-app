import firebase from "firebase/app";

// Optionally import the services that you want to use
import "firebase/auth";
//import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";
// import { firebaseConfig } from "./config";

const firebaseConfig = {
  apiKey: "AIzaSyCy4rUt-9WoWWqI8PpsMS9eJsTtgccse9w",
  authDomain: "image-upload-app-f6c0e.firebaseapp.com",
  projectId: "image-upload-app-f6c0e",
  storageBucket: "image-upload-app-f6c0e.appspot.com",
  messagingSenderId: "721362973684",
  appId: "1:721362973684:web:456fe3f9922375033abfa1",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
