<template>
  <div class="form-wrap">
    <form class="login">
      <p class="login-register">
        Don't have an account?
        <router-link class="router-link" :to="{ name: 'Register' }"
          >Register</router-link
        >
      </p>
      <h2>Login to FinanceBois</h2>
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
      <button @click.prevent="signIn">Submit</button>
      <button @click.prevent="signInWithGoogle">Sign In with Google</button>
      <div class="angle"></div>
    </form>
    <div class="background"></div>
  </div>
</template>

<script>
// import { ref } from "vue";
import { signInWithEmailAndPassword } from "firebase/auth";
import "firebase/auth";
import {
  //createUserWithEmailAndPassword,
  //GoogleAuthProvider,
  //signInWithPopup,
} from "firebase/auth";
//import { doc , setDoc } from "firebase/firestore";
import {auth} from "../firebase/firebase";
import {
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
// import { useRouter } from "vue-router";
// const router = useRouter();
export default {
  name: "SignIn",
  components: {},
  data() {
    return {
      email:null,
      password: null,
      error: null,
      errorMsg: "",
    }
  },
  methods: {
    signIn() {
      signInWithEmailAndPassword(auth, this.email, this.password).then(() => {
        this.$router.push({ name: "Home"});
        this.error=false;
        this.errorMsg ="";
      }).catch(err =>{
        this.error=true;
        this.errorMsg= err.message;
      })
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

<style lang="scss">
.form-wrap {
    background: linear-gradient(
        200deg,
        rgba(161, 195, 209, 0.75) 10%,
        rgba(241, 114, 161, 0.5) 100%
    );
    overflow:hidden;
    display:flex;
    height:100vh;
    justify-content: center;
    align-self: center;
    margin: 0 auto;
    width: 90%;
    @media(min-width: 900px) {
        width:100%;
    }
    .login-register {
        margin-bottom : 32px;

        .router-link {
            color: #000;
        }
    }

    form {
        padding: 0 10px;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex:1;
        @media(min-width:900px) {
            padding: 0 50px;
        }

        h2 {
            text-align: center;
            font-size: 32px;
            color: #303030;
            margin-bottom: 40px;
            @media(min-width: 900px) {
                font-size: 40px;
            }
        }

        .inputs {
            width:100%;
            max-width: 350px;
            .input {
                position:relative;
                display:flex;
                justify-content: center;
                align-items:center;
                margin-bottom:8px;
                input {
                    width: 100%;
                    border:none;
                    background-color: #f2f7f6;
                    padding: 4px 4px 4px 30px;
                    height: 50px;

                    &:focus {
                        outline: none;
                    }

                }

                .icon {
                    width:12px;
                    position: absolute;
                    left: 6px;
                }
            }
        }

        .forgot-password {
            text-decoration: none;
            color: #000;
            cursor:pointer;
            font-size: 14px;
            margin: 16px 0 32;
            border-bottom: 1px solid transparent;
            transition: 0.5s ease all;

            &:hover {
                border-color: #303030;
            }
        }
    }
}

</style>