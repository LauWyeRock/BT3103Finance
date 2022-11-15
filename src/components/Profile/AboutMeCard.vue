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
    border: 1px solid black;
    margin-right: 1.5%;
    margin-left: 0px;
    width: 48.5%;
    float: left;
    padding: 1%;
}
.Sub-Card-Title {
    margin-bottom: 1%;
}
</style>
