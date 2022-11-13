<!-- 
  TODO: 
  1. Rendering based on who current user is (authentication)
  2. Connect profile to backend
 -->
<template>
  <div v-if="userFound">
    <ProfileCard :profile="profile" :ownPage="ownPage" :uid="profileUid" />
    <div className="cards">
      <AboutMeCard :profile="profile" />
      <SocialsCard :profile="profile" :ownPage="ownPage" />
    </div>
    <MyWatchList :profile="profile" :ownPage="ownPage" />
    <AchievementListCard :uid="profileUid" />
  </div>
  <div v-else>
    <span>NO USER FOUND</span>
  </div>
</template>

<script>
import ProfileCard from "./ProfileCard.vue";
import AboutMeCard from "./AboutMeCard.vue";
import SocialsCard from "./SocialsCard.vue";
import MyWatchList from "./MyWatchList.vue";
import AchievementListCard from "./AchievementListCard.vue";
import { useRoute } from "vue-router";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase/firebase";
export default {
  async setup() {
    try {
      const route = useRoute();
      var ownPage = false;
      var userFound = true;
      var uid = route.params.uid;
      var myUid = "";
      if (uid == null) {
        uid = "";
      }
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          myUid = auth.currentUser.uid;
          //this is users page
          if (myUid == uid) {
            //passed in UID of ur own profile
            ownPage = true;
          } else if (uid == "") {
            //passed in no UID, will redirect to your own profile
            ownPage = true;
          }
        } else {
          //user is not signed in,
          ownPage = false;
        }
      });

      var profile = null;
      var profileUid = null;
      if (uid == "") {
        profileUid = auth.currentUser.uid;
        profile = await getProfile();
      } else {
        profileUid = uid;
        profile = await getProfileByUid(uid);
      }
      if (profile == null) {
        userFound = false;
      }
      console.log("PUID" + profileUid);
    } catch (e) {
      console.error("error in setup" + e);
    }
    return {
      profileUid,
      profile,
      ownPage,
      userFound,
    };
  },
  components: {
    ProfileCard,
    AboutMeCard,
    SocialsCard,
    MyWatchList,
    AchievementListCard,
  },
};

function getUserId() {
  return new Promise((resolve, reject) => {
    getAuth().onAuthStateChanged((user) => {
      if (user) {
        const uid = user.uid;
        console.log("1st uid:" + uid);
        resolve(uid);
      } else {
        console.log("sad didnt work.");
        reject();
      }
    });
  });
}
async function getProfile() {
  const uid = await getUserId();
  console.info("2nd uid: " + uid);

  const docRef = doc(db, "profiles", uid);

  console.log("got docref");
  const docSnap = await getDoc(docRef);
  console.log("get for docsnap");

  if (docSnap.exists()) {
    const data = docSnap.data();
    console.info("successfully got profile: " + data);
    return data;
  } else {
    console.warn("GET PROFILE ERROR: DOCSNAP DOES NOT EXIST.");
  }
}

async function getProfileByUid(uid) {
  const docRef = doc(db, "profiles", uid);

  console.log("got docref");
  const docSnap = await getDoc(docRef);
  console.log("get for docsnap");

  if (docSnap.exists()) {
    const data = docSnap.data();
    console.info("successfully got profile: " + data);
    return data;
  } else {
    console.warn("GET PROFILE ERROR: DOCSNAP DOES NOT EXIST.");
  }
}
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
