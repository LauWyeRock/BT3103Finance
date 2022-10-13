<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="form-wrap">
    <form class="register">
      <p class="login-register">
        Already have an account?
        <router-link class="router-link" :to="{ name: 'SignIn' }"
          >Login</router-link
        >
      </p>
      <h2>Register</h2>
      <div class="inputs">
        <div class="input">
          <input type="text" placeholder="Email" v-model="email" />
        </div>
        <div class="input">
          <input type="password" placeholder="Password" v-model="password" />
        </div>
        <p v-if="errMsg">{{ errMsg }}</p>
      </div>
      <router-link class="forgot-password" :to="{ name: 'ForgotPassword' }"
        >Forgot your password?</router-link
      >
      <button @click="register">Submit</button>
      <button @click="signInWithGoogle">Sign In with Google</button>
      <div class="angle"></div>
    </form>
    <div class="background"></div>
  </div>
</template>

<script>
import { ref } from "vue";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useRouter } from "vue-router";
const email = ref("");
const password = ref("");
const router = useRouter();
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Register",
  methods: {
    async register() {
      createUserWithEmailAndPassword(getAuth(), email.value, password.value)
        // eslint-disable-next-line no-unused-vars
        .then((data) => {
          console.log("Successfully registered");
          router.push("/feed");
        })
        .catch((error) => {
          console.log(error.code);
          alert(error.message);
        });
    },

    signInWithGoogle() {
      const provider = new GoogleAuthProvider();
      signInWithPopup(getAuth(), provider)
        .then((result) => {
          console.log(result.user);
          router.push("/feed");
        })
        // eslint-disable-next-line no-unused-vars
        .catch((error) => {});
    },
  },
};
</script>
