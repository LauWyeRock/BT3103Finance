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
        <div v-show="error" class="error">{{ this.errorMsg }}</div>
      </div>
      <router-link class="forgot-password" :to="{ name: 'ForgotPassword' }"
        >Forgot your password?</router-link
      >
      <button @click.prevent="register">Submit</button>
      <button @click.prevent="signInWithGoogle">Sign In with Google</button>
      <div class="angle"></div>
    </form>
    <div class="background"></div>
  </div>
</template>

<script>
//import { ref } from "vue";
import "firebase/auth";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { doc , setDoc } from "firebase/firestore";
import {db, auth} from "../firebase/firebase";

// import { useRouter } from "vue-router";
// const router = useRouter();

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Register",
  data() {
    return {
      email: "",
      password: "",
      error:null,
      errorMsg :"",
    }
  },
  methods: {
    async register() {
      if (
        this.email !== "" &&
        this.password !== "" 
      ) {
        this.error = false;
        this.errorMsg = "";

        const createUser = await createUserWithEmailAndPassword(auth, this.email, this.password);
        const result = await createUser;
        await setDoc(doc(db, "users", result.user.uid), {
          email: this.email,
        })
        this.$router.push({name: "Home"})
        return;
      }
      this.error = true;
      this.errorMsg = "Please fill out all the fields!";
      return;
    },

    async signInWithGoogle() {
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider)
        .then(() => {
          this.$router.push({name: "Home"})
        })
        // eslint-disable-next-line no-unused-vars
        .catch((error) => {});
    },
  },
};
</script>

<style lang="scss" scoped>
.register {
  h2 {
    max-width: 350px;
  }
}
</style>
