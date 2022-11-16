<template>
  <div className="About-Card-Outer">
    <h1 className="Sub-Card-Title">About me</h1>
    <h3>
      {{ profile.about }}
    </h3>
  </div>
</template>

<script>
export default {
  props: {
    profile: Object,
  },
};
</script>

<style>
.About-Card-Outer {
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-right: 1.5%;
  margin-left: 0px;
  width: 48.5%;
  float: left;
  padding: 1%;
  background-color: white;
}
.Sub-Card-Title {
  margin-bottom: 1%;
}
</style>
