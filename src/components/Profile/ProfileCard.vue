<template>
  <div className="Profile-Main-Card">
    <div
      className="Profile-Banner"
      v-bind:style="{ backgroundImage: 'url(' + profile.profileBanner + ')' }"
    ></div>
    <div className="Profile-Picture">
      <img
        style="
          border-radius: 50%;
          width: 220px;
          height: 220px;
          object-fit: cover;
        "
        v-if="profile.profilePicture != null"
        :src="profile.profilePicture"
      />
      <img
        v-else
        style="
          border-radius: 50%;
          width: 220px;
          height: 220px;
          object-fit: cover;
        "
        src="https://profiles.ucr.edu/app/images/default-profile.jpg"
      />
    </div>

    <div className="Profile-Card-Content">
      <div className="Like-For-Real-Profile-Card-Content">
        <div className="Profile-Card-Information">
          <h1
            style="
              margin-bottom: 0px;
              /* font-family: 'Playfair Display'; */
              /* font-style: normal; */
              font-weight: 700;
              font-size: 60px;
              line-height: 74px;
              font-family: serif;
              letter-spacing: -3px;
              font-weight: bold;
            "
          >
            {{ profile.displayName }}
          </h1>
          <!-- <h3 style="font-style: normal; font-weight: 400; font-size: 22px">
            Junior Trader
          </h3> -->
          <h3 style="font-style: normal; font-weight: 400; font-size: 22px">
            Trade Bro
          </h3>
          <div style="margin-top: 10px">
            <a @click="showFollowing = true" style="cursor: pointer">
              <p style="display: inline-block; margin-right: 25px">
                Following: {{ profile.following.length }}
              </p>
            </a>
            <a @click="showFollowers = true" style="cursor: pointer">
              <span>Followers: {{ profile.followers.length }}</span>
            </a>
          </div>
        </div>

        <div className="Profile-Card-Buttons">
          <button
            style="
              float: right;
              background: rgba(95, 31, 95, 0.8);
              box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
                0 6px 20px 0 rgba(0, 0, 0, 0.19);
              border-radius: 10px;
              margin-right: 1px;
              margin-left: 1px;
            "
            v-if="!ownPage && !isFollowing"
            @click="addAsFriendHandler()"
          >
            Follow
          </button>
          <button
            style="
              float: right;
              background: rgba(95, 31, 95, 0.8);
              box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
              border-radius: 10px;
              margin-right: 1px;
              margin-left: 1px;
            "
            v-if="!ownPage && isFollowing"
            @click="removeFriendHandler()"
          >
            Unfollow
          </button>
          <button
            style="
              float: right;
              background: rgba(95, 31, 95, 0.8);
              box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
              border-radius: 10px;
              margin-right: 1px;
              margin-left: 1px;
            "
            v-if="ownPage"
            @click="$router.push('editprofile')"
          >
            <!-- route to edit pfp page -->
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  </div>

  <Teleport to="body">
    <!-- use the modal component, pass in the prop -->
    <ProfileModal :show="showFollowers" @close="showFollowers = false">
      <template #header>
        <h3>Followers ({{ profile.followers.length }})</h3>
      </template>
      <template #body>
        <div>
          <div v-for="follower in profile.followers" :key="follower">
            <div className="ffli">
              <a
                className="follower-following-li"
                :href="'/profile/' + follower.uid"
              >
                {{ follower.displayName }}
              </a>
            </div>
          </div>
        </div>
      </template>
    </ProfileModal>
  </Teleport>

  <Teleport to="body">
    <!-- use the modal component, pass in the prop -->
    <ProfileModal :show="showFollowing" @close="showFollowing = false">
      <template #header>
        <h3>Following ({{ profile.following.length }})</h3>
      </template>
      <template #body>
        <div>
          <div v-for="following in profile.following" :key="following">
            <div className="ffli">
              <a
                className="follower-following-li"
                :href="'/profile/' + following.uid"
              >
                {{ following.displayName }}
              </a>
            </div>
          </div>
        </div>
      </template>
    </ProfileModal>
  </Teleport>
</template>

<script>
// needs 2 views, one with own user one where someone else views your page
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "@/firebase/firebase";
import { getAuth } from "firebase/auth";
import ProfileModal from "./ProfileModal.vue";

export default {
  components: {
    ProfileModal,
  },
  props: {
    profile: Object,
    ownPage: Boolean,
    uid: String,
  },
  methods: {
    async addAsFriendHandler() {
      //get other guys followers, add your uid in
      //get your following, add the other guys uid in.
      console.log("ADD AS FRIEND:");
      const auth = getAuth();
      const myUid = auth.currentUser.uid;

      console.log("myuid: " + myUid);
      console.log("theirUid: " + this.uid);
      const myRef = doc(db, "profiles", myUid);
      const docSnap = await getDoc(myRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }

      var myFollowing = docSnap.data().following;

      var theirFollowers = this.profile.followers;

      if (
        myFollowing.includes({
          displayName: this.profile.displayName,
          uid: this.uid,
        })
      ) {
        alert("Error: Already Following " + this.profile.displayName + "!");
        return;
      }

      myFollowing.push({
        displayName: this.profile.displayName,
        uid: this.uid,
      });
      theirFollowers.push({
        displayName: docSnap.data().displayName,
        uid: myUid,
      });

      setDoc(myRef, { following: myFollowing }, { merge: true });

      const otherRef = doc(db, "profiles", this.uid);
      setDoc(otherRef, { followers: theirFollowers }, { merge: true });
      this.isFollowing = true;
      alert("Now Following " + this.profile.displayName + "!");
    },

    async removeFriendHandler() {
      //get other guys followers, add your uid in
      //get your following, add the other guys uid in.
      const auth = getAuth();
      const myUid = auth.currentUser.uid;

      const myRef = doc(db, "profiles", myUid);
      const docSnap = await getDoc(myRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }

      var myFollowing = docSnap.data().following;

      var theirFollowers = this.profile.followers;

      myFollowing.splice(
        myFollowing.indexOf({
          displayName: this.profile.displayName,
          uid: this.uid,
        }),
        1
      );
      theirFollowers.splice(
        theirFollowers.indexOf({
          displayName: docSnap.data().displayName,
          uid: myUid,
        }),
        1
      );

      setDoc(myRef, { following: myFollowing }, { merge: true });

      const otherRef = doc(db, "profiles", this.uid);
      setDoc(otherRef, { followers: theirFollowers }, { merge: true });

      this.isFollowing = false;
      alert("Unfollowed " + this.profile.displayName + "!");
    },
  },
  mounted() {
    if (!this.ownPage) {
      const auth = getAuth();
      const myUid = auth.currentUser.uid;

      //eslint-disable-next-line
      for (let i = 0; i < this.profile.followers.length; i++) {
        //eslint-disable-next-line
        if (this.profile.followers[i].uid == myUid) {
          this.isFollowing = true;
        }
      }
    }
  },
  data() {
    return {
      isFollowing: false,
      showFollowers: false,
      showFollowing: false,
    };
  },
};
</script>

<style>
.follower-following-li {
  cursor: pointer;
  text-decoration-line: none;
  color: black;
}

.ffli {
  min-height: 1.5rem;
}

.ffli:hover {
  cursor: pointer;
  background-color: #f5f5f5;
}
.Profile-Main-Card {
  position: relative;
  margin-top: 10px;
  align-content: center;
  margin-left: 2.5%;
  margin-right: 2.5%;
  margin-bottom: 10px;
}

.Profile-Banner {
  position: absolute;
  width: 100%;
  height: 190px;

  background: url(https://cdn.pixabay.com/photo/2021/03/14/18/25/graffiti-6095045_1280.jpg);
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-size: cover;
  background-position: center;
  border-radius: 10px 10px 0px 0px;
}

.Profile-Picture {
  position: absolute;
  margin-left: 60px;
  margin-top: 150px;
}

.Profile-Card-Content {
  /* position: absolute; */
  width: 100%;
  height: 400px;

  background: linear-gradient(
    180deg,
    rgba(161, 195, 209, 0.75) 46.38%,
    rgba(241, 114, 161, 0.5) 100%
  );
  border: 1px solid #f5f5f5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
}

.Like-For-Real-Profile-Card-Content {
  margin-top: 190px;
  margin-left: 300px;
}

.Profile-Card-Information {
  float: left;
}

.Profile-Card-Buttons {
  margin-right: 20px;
}

@media only screen and (max-width: 1200px) {
  .Profile-Card-Content {
    height: 520px;
  }
}
</style>
