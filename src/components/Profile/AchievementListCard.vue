<template>
  <div className="Achieve-Card-Outer">
    <h1 className="Achievement-Card-Title">Achievements</h1>
    <div className="Achievement-List">
      <AchievementCard />
      <AchievementCard />
      <AchievementCard />
      <AchievementCard />
    </div>
    <div className="Long-Card-Buttons">
      <button>Show all achievements</button>
    </div>
  </div>
</template>

<script>
import AchievementCard from "./AchievementCard.vue";
export default { components: { AchievementCard } };
</script>

<style>
.Achieve-Card-Outer {
  border-radius: 10px;
  border: 1px solid black;
  margin-right: 2.5%;
  margin-left: 2.5%;
  margin-bottom: 10px;
  width: 95%;
  padding: 1%;
}
.Achievement-Card-Title {
  margin-left: 5%;
}
.Long-Card-Buttons {
  margin-left: 5%;
}
.Achievement-List {
  margin-top: 2%;
  margin-left: 5%;
  margin-right: 5%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
