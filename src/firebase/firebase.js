
import {initializeApp} from "firebase/app";
import { getFirestore} from 'firebase/firestore';
// import {getAuth, onAuthStateChanged} from "firebase/auth"
// import "firebase/firestore";
 import {getAuth} from "firebase/auth";
// import {getDatabase} from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDANSueccFusPny1Ww_P-a7faS45Ce6Eck",
  authDomain: "bt3103-aaa9f.firebaseapp.com",
  databaseURL: "https://bt3103-aaa9f-default-rtdb.firebaseio.com",
  projectId: "bt3103-aaa9f",
  storageBucket: "bt3103-aaa9f.appspot.com",
  messagingSenderId: "390166546946",
  appId: "1:390166546946:web:8afd4d8f476b47c452b51b"
};
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
// const timestamp = firebase.firestore.FieldValue.serverTimestamp;
// export {timestamp};
export {db, auth, firebaseApp}
