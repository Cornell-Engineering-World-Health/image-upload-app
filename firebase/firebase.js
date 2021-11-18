import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyC7VKTiT_61QOdGH08Tm1xA2uWtGNOZePA',
  authDomain: 'image-upload-app-c2b16.firebaseapp.com',
  projectId: 'image-upload-app-c2b16',
  storageBucket: 'image-upload-app-c2b16.appspot.com',
  messagingSenderId: '2925612514',
  appId: '1:2925612514:web:4d74fd413fb2b2aeecfdbb',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();

export { firebase, db };
