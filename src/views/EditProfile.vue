<template>
  <Suspense>
    <template #default>
      <EditProfileForm></EditProfileForm>
    </template>
    <template #fallback>
      <EditProfileFormSkeleton></EditProfileFormSkeleton>
    </template>
  </Suspense>
</template>

<script>
import EditProfileForm from "@/components/Profile/EditProfileForm.vue";
import EditProfileFormSkeleton from "@/components/Profile/EditProfileFormSkeleton.vue";
export default {
  components: { EditProfileForm, EditProfileFormSkeleton },
};
</script>

<style></style>
