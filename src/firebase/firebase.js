//import { initializeApp } from "firebase/app";
import firebase from "firebase/app";
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALUiX766EdSTWEFqQHkApnn33HViOvLbQ",
  authDomain: "bt3103test-7fb96.firebaseapp.com",
  projectId: "bt3103test-7fb96",
  storageBucket: "bt3103test-7fb96.appspot.com",
  messagingSenderId: "100176478338",
  appId: "1:100176478338:web:1001b82079a72035fd749b"
};


// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export {timestamp};
export default firebaseApp.firestore();