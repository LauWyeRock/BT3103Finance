<template>
  <Suspense>
    <template #default>
      <ViewProfile></ViewProfile>
    </template>
    <template #fallback>
      <h1 style="font-size: 100px">loading...</h1>
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
