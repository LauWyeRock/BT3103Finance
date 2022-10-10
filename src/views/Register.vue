<!-- eslint-disable vue/multi-word-component-names -->

<template>
    <h1>Create an account</h1>
    <p><input type ="text" placeholder="Email" v-model="email" /></p>
    <p><input type ="password" placeholder="Password" v-model="password" /></p>
    <p><button @click="register">Submit</button></p>
    <p><button @click="signInWithGoogle">Sign In with Google</button></p>

</template>

<script setup>
import {ref} from 'vue';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from "vue-router";
const email = ref("");
const password = ref("");
const router = useRouter();

const register = () => {
    createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    // eslint-disable-next-line no-unused-vars
    .then((data) => {
        console.log("Successfully registered");
        router.push("/feed");
    })
    .catch((error) => {
        console.log(error.code);
        alert(error.message);
    })
}

const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(getAuth(), provider)
    .then((result) => {
        console.log(result.user);
        router.push("/feed");
    })
    // eslint-disable-next-line no-unused-vars
    .catch((error) => {

    })
}

</script>