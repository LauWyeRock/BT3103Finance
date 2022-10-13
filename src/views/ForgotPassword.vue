<template>
 <div class="reset-password">
    <Modal v-if="modalActive" @close-modal="closeModal"/>
    <div class="form-wrap">
        <form class="reset">
            <h2>Reset Password</h2>
            <p>Forgot your password? Enter your email to reset it</p>
            <div class="inputs">
                <div class="input">
                    <input type="text" placeholder="Email" v-model="email" />
                </div>
            </div>
            <button>Reset</button>
        </form>
    </div>
 </div>
</template>

<script>
import Modal from "../components/Modal.vue"
export default {
    name:"ForgotPassword",
    data () {
        return {
            modalActive: false,
            modalMessage: ""
        }
    },
    components: {
        Modal,
    },
    methods : {
        closeModal() {
            this.modalActive=!this.modalActive;
            this.email="";
        }
    }
}
</script>

<style lang="scss" scoped>
.reset-password {
    position: relative;
    .form-wrap {
        .reset{
            h2{
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