<!-- TODO: MAKE MODAL LOOK DECENT. FIX BROKEN LINKS. IMAGE UPLOAD FOR PROFILE. CONTRIBUTION SCORE? FAV STOCK FNATIC?  -->
<template>
  <div className="Achieve-Card-Outer">
    <h1 className="Achievement-Card-Title">Latest Forum Posts</h1>
    <div className="Achievement-List">
      <h2 v-if="posts.length == 0">No Forum Posts.</h2>
    </div>
    <div className="Achievement-List-Container">
      <div className="Achievement-List" v-for="post in posts" v-bind:key="post">
        <AchievementCard style="width: 100%" :post="post" />
      </div>
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
  background-color: rgba(253, 251, 247, 0.765);
  border-radius: 10px;
  border: 1px solid #dddddd;
  margin-right: 2.5%;
  margin-left: 2.5%;
  margin-bottom: 10px;
  width: 95%;
  padding: 1%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.Achievement-Card-Title {
  margin-left: 5%;
}
.Long-Card-Buttons {
  margin-left: 5%;
}
.Achievement-List {
  margin-top: 2%;
  margin-left: 2.5%;
  margin-right: 2.5%;
  /* display: flex;
  flex-direction: row;
  flex-wrap: wrap; */
}
.Achievement-List-Container {
  display: grid;
  grid-template-columns: auto auto;
}
</style>
