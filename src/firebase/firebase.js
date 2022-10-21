
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
  apiKey: "AIzaSyCRGkLJBhWbK8nr0t_dGdptebe6BPiKP90",
  authDomain: "bt3103-finance.firebaseapp.com",
  projectId: "bt3103-finance",
  storageBucket: "bt3103-finance.appspot.com",
  messagingSenderId: "490406958114",
  appId: "1:490406958114:web:088cfd71d19c0b739e667b"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
// const timestamp = firebase.firestore.FieldValue.serverTimestamp;
// export {timestamp};
export {db, auth, firebaseApp}
