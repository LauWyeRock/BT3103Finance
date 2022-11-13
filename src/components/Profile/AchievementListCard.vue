<!-- TODO: MAKE MODAL LOOK DECENT. FIX BROKEN LINKS. IMAGE UPLOAD FOR PROFILE. CONTRIBUTION SCORE? FAV STOCK FNATIC?  -->
<template>
  <div className="Achieve-Card-Outer">
    <h1 className="Achievement-Card-Title">Latest Forum Posts</h1>
    <div className="Achievement-List">
      <h2 v-if="posts.length == 0">No Forum Posts.</h2>
    </div>
    <div className="Achievement-List" v-for="post in posts" v-bind:key="post">
      <AchievementCard :post="post" />
    </div>
  </div>
</template>

<script>
import AchievementCard from "./AchievementCard.vue";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/firebase/firebase";
export default {
  props: {
    uid: String,
  },
  data() {
    return {
      posts: [],
    };
  },
  components: { AchievementCard },
  async mounted() {
    const q = query(
      collection(db, "blogPosts"),
      where("profileId", "==", this.uid)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots\
      if (this.posts.length < 4) {
        this.posts.push(doc.data());
      }
    });
  },
};
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
