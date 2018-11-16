// Firebase
import firebase from 'firebase';

// Secrets
import { FIREBASE_API_KEY as apiKey } from '../config/secrets';

firebase.initializeApp({
  apiKey,
  authDomain: "sdjavenir-c226c.firebaseapp.com",
  databaseURL: "https://sdjavenir-c226c.firebaseio.com",
  projectId: "sdjavenir-c226c",
  storageBucket: "sdjavenir-c226c.appspot.com",
  messagingSenderId: "599059477459",
});

export default firebase;