<template>
  <div className="Socials-Card-Outer">
    <h1 className="Sub-Card-Title">Socials</h1>
    <div className="Socials-Links" v-if="profile.links.linkedin">
      <h2>LinkedIn:</h2>
      <a href="#">{{ profile.links.linkedin }}</a>
    </div>
    <div className="Socials-Links" v-if="profile.links.github">
      <h2>Github:</h2>
      <a href="#">{{ profile.links.github }}</a>
    </div>
    <div className="Socials-Links" v-if="profile.links.personalSite">
      <h2>Personal Page:</h2>
      <a href="#">{{ profile.links.personalSite }}</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    profile: Object,
  },
  mounted() {},
};
</script>

<style>
.Socials-Card-Outer {
  text-align: center;
  border-radius: 10px;
  margin-right: 0px;
  margin-left: 1.5%;
  border: 1px solid black;
  width: 48.5%;
  float: left;
  padding: 1%;
}
</style>
