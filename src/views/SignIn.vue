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
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// import { useRouter } from "vue-router";
const email = ref("");
const password = ref("");
const errMsg = ref();
// const router = useRouter();
export default {
  name: "SignIn",
  components: {},
  data() {

  },
  methods: {
    async register() {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email.value, password.value)
        // eslint-disable-next-line no-unused-vars
        .then((data) => {
          console.log("Successfully registered");
          console.log(auth.currentUser);
          // router.push("/feed");
        })
        .catch((error) => {
          console.log(error.code);
          switch (error.code) {
            case "auth/invalid-email":
              errMsg.value = "Invalid Email";
              break;
            case "auth/user-not-found":
              errMsg.value = "No account with that email was found";
              break;
            case "auth/wrong-password":
              errMsg.value = "Incorrect Password";
              break;
            default:
              errMsg.value = "Email or password was incorrect";
              break;
          }
        });
    },
  },
};
</script>

<style lang="scss">
.form-wrap {
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