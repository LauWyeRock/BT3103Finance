import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import store from "./store";
import VueChartkick from "vue-chartkick";
import "chartkick/chart.js";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import store from './store/index';
// import { onAuthStateChanged } from "firebase/auth";
// import {auth} from "./firebase/firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRGkLJBhWbK8nr0t_dGdptebe6BPiKP90",
  authDomain: "bt3103-finance.firebaseapp.com",
  projectId: "bt3103-finance",
  storageBucket: "bt3103-finance.appspot.com",
  messagingSenderId: "490406958114",
  appId: "1:490406958114:web:088cfd71d19c0b739e667b",
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
