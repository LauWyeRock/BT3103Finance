<template>
  <Suspense>
    <template #default>
      <ViewProfile></ViewProfile>
    </template>
    <template #fallback>
      <div style="text-align: center; margin-top: 10px">
        <h1 style="font-size: 50px">fetching profile...</h1>
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

<style></style>
