<template>
  <div class="reset-password">
    <Modal v-if="modalActive" :modalMessage="modalMessage" @close-modal="closeModal" />
    <div class="form-wrap">
      <form class="reset">
        <p class="login-register">
          Already have an account?
          <router-link class="router-link" :to="{ name: 'SignIn' }"
            >Login</router-link
          >
        </p>
        <h2>Reset Password</h2>
        <p>Forgot your password? Enter your email to reset it</p>
        <div class="inputs">
          <div class="input">
            <input type="text" placeholder="Email" v-model="email" />
          </div>
        </div>
        <button @click.prevent="resetPassword">Reset</button>
      </form>
    </div>
  </div>
</template>

<script>
import Modal from "../components/Modal.vue";
import { sendPasswordResetEmail } from "firebase/auth";
import {auth} from "../firebase/firebase"
export default {
  name: "ForgotPassword",
  data() {
    return {
      email: null,
      modalActive: false,
      modalMessage: "",
    };
  },
  components: {
    Modal,
  },
  methods: {
    resetPassword() {
        sendPasswordResetEmail(auth, this.email).then(() => {
            this.modalMessage="If your account exists, you will receive an email";
            this.modalActive = true;
        }).catch((err) => {
            this.modalMessage = err.message;
            this.modalActive = true
        })
    },
    closeModal() {
      this.modalActive = !this.modalActive;
      this.email = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.reset-password {
  position: relative;
  .form-wrap {
    .reset {
      h2 {
        margin-bottom: 8px;
      }
      p {
        text-align: center;
        margin-bottom: 32px;
      }
    }
  }
}
</style>
