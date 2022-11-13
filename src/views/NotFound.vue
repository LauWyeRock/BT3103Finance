<template>
  <div class="container" style="text-align: center" v-if="user">
    <div class="text">
      <h1 style="font-size:50px">Page Not Found</h1>
      <br/>
      <h4>Please click on the above available options.</h4>
    </div>
  </div>
</template>

<script>
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {
  name: "NotFound",

  components: {},

  data() {
    return {
      user: false,
    };
  },

  mounted() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.user = user;
      }
    });
  },
};
</script>

<style scoped>
.container {
  background-image: repeating-linear-gradient(
    rgba(240, 235, 244, 1),
    rgba(161, 195, 209, 0.75),
    rgba(241, 114, 161, 0.5)
  );
  width: 100%;
  height: 500px;
}
.text {
  margin-top: 100px;
}
</style>
