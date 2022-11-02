import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import store from "./store";
import VueChartkick from "vue-chartkick";
import "chartkick/chart.js";

// Import the functions you need from the SDKs you need
import { initializeApp} from "firebase/app";
//import store from './store/index';
// import { onAuthStateChanged } from "firebase/auth";
// import {auth} from "./firebase/firebase";
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
initializeApp(firebaseConfig);

const app = createApp(App);

app.use(router).use(store);
app.use(VueChartkick);

app.mount("#app");

// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     initializeApp(firebaseConfig);
//     const app = createApp(App)
//     app.use(router).use(Unicon)
//     app.mount('#app')
//   }
// })
