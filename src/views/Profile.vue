<template>
  <Suspense id="load">
    <template #default >
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
  margin-top: 0px;
  background: repeating-linear-gradient(
    rgba(240, 235, 244, 1),
    rgba(161, 195, 209, 0.75),
    rgba(241, 114, 161, 0.5)
  );
}

#load, #default, #fallback {
  background: repeating-linear-gradient(
    rgba(240, 235, 244, 1),
    rgba(161, 195, 209, 0.75),
    rgba(241, 114, 161, 0.5)
  );
}
</style>
