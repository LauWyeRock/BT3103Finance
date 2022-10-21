<template>
  <ProfileCard />
  <div className="cards">
    <AboutMeCard />
    <SocialsCard />
  </div>
  <MyWatchList />
  <AchievementListCard />
</template>

<script>
import ProfileCard from "@/components/Profile/ProfileCard.vue";
import AboutMeCard from "@/components/Profile/AboutMeCard.vue";
import SocialsCard from "../components/Profile/SocialsCard.vue";
import MyWatchList from "../components/Profile/MyWatchList.vue";
import AchievementListCard from "../components/Profile/AchievementListCard.vue";
export default {
  name: "ProfilePage",
  components: {
    ProfileCard,
    AboutMeCard,
    SocialsCard,
    MyWatchList,
    AchievementListCard,
  },
};
</script>

<style>
.cards {
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  margin-left: 2.5%;
  margin-right: 2.5%;
}
</style>
