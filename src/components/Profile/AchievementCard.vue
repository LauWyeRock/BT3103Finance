<template>
  <div className="Achieve-Card-Spec-Outer">
    <img className="Achievement-Icon" v-bind:src="post.blogCoverPhoto" />
    <div className="Achievement-Info">
      <h2>{{ post.blogTitle }}</h2>
      <h5>Posted on: {{ dateIntToString(post.date) }}</h5>
      <button @click="$router.push({ path: `/view-post/${post.blogID}` })">
        View Post >
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: Object,
  },
  mounted() {
    console.log("IN ACHIEVEMENT CARD: " + this.post);
    this.date = Date(this.post.date).toString();
  },
  data() {
    return {
      date: null,
    };
  },
  methods: {
    dateIntToString(dateint) {
      const date = new Date(dateint);
      return date.toUTCString();
    },
  },
};
</script>

<style>
.Achieve-Card-Spec-Outer {
  margin-right: 2.5%;
  margin-left: 2.5%;
  margin-bottom: 1%;
  width: 45%;
  padding: 1%;

  background: rgba(179, 155, 200, 0.3);
  border: 1px solid #f5f5f5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
}
.Achievement-Icon {
  width: 100px;
  height: 100px;
  float: left;
  margin-right: 5%;
}
</style>
