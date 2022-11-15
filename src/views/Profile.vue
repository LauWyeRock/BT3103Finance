<template>
  <Suspense>
    <template #default>
      <ViewProfile></ViewProfile>
    </template>
    <template #fallback>
      <div id="profile-skeleton">
        <h1 style="font-size: 50px; margin-bottom: 0px; padding-bottom: 0px">
          fetching profile...
        </h1>
        <img
          style="object-fit: scale-down; margin-top: 0px; padding-top: 0px"
          src="../assets/hamster-wheel.gif"
        />
      </div>
    </template>
  </Suspense>
</template>

<script>
import ViewProfile from "@/components/Profile/ViewProfile.vue";
export default {
  name: "ProfilePage",
  components: { ViewProfile },
};
</script>

<style>
#profile-skeleton {
  text-align: center;
  margin-top: 10px;
}
</style>
