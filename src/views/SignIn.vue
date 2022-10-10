<template>
    <h1>Sign In an account</h1>
    <p><input type ="text" placeholder="Email" v-model="email" /></p>
    <p><input type ="password" placeholder="Password" v-model="password" /></p>
    <p v-if="errMsg">{{ errMsg }}</p>
    <p><button @click="register">Submit</button></p>
    <p><button @click="signInWithGoogle">Sign In with Google</button></p>

</template>

<script setup>
import {ref} from 'vue';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";
const email = ref("");
const password = ref("");
const errMsg = ref()
const router = useRouter();

const register = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email.value, password.value)
    // eslint-disable-next-line no-unused-vars
    .then((data) => {
        console.log("Successfully registered");
        console.log(auth.currentUser)
        router.push("/feed");
    })
    .catch((error) => {
        console.log(error.code);
        switch(error.code) {
            case "auth/invalid-email":
                errMsg.value = "Invalid Email";
                break;
            case "auth/user-not-found":
                errMsg.value = "No account with that email was found"
                break;
            case "auth/wrong-password":
                errMsg.value = "Incorrect Password";
                break;
            default:
                errMsg.value = "Email or password was incorrect";
                break;
        }
    })
}

</script> 