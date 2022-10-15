
import {initializeApp} from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from "firebase/auth"
// import "firebase/firestore";
// import {getAuth} from "firebase/auth";
// import {getDatabase} from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// import firebase from "firebase";
// import 'firebase/firestore';

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
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
// const timestamp = firebase.firestore.FieldValue.serverTimestamp;
// export {timestamp};
export {db, auth}