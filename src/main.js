import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"
// import Vuex from "vuex"
// import { Store } from 'vuex'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import store from './store/index';
// import { onAuthStateChanged } from "firebase/auth";
// import {auth} from "./firebase/firebase";
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
initializeApp(firebaseConfig);

const app = createApp(App)

app.use(router).use(store) //.use(new Store);

app.mount('#app')


// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     initializeApp(firebaseConfig);
//     const app = createApp(App)
//     app.use(router).use(Unicon)
//     app.mount('#app')
//   } 
// })