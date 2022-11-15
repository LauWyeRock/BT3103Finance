<template>
  <div id="bg-container">
    <!-- <h1>Find a Trade Bro</h1> -->
    <!-- <div>
      <input id="searchQuery" type="text" placeholder="Search For Users..." />
      <button v-on:click="searchForUser()">Search</button>
    </div> -->
    <div>
      <div id="cover">
        <div class="tb">
          <div class="td">
            <input
              type="text"
              id="searchQuery"
              @keyup.enter="searchForUser()"
              placeholder="Find a Trade Bro"
              required
            />
          </div>
          <div class="td" id="s-cover">
            <button type="submit" @click="searchForUser()">
              <div id="s-circle"></div>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div v-for="user in resultsArray" :key="user">
      <!-- <img :src="user[0].profilePicture" />
      <h1>{{ user[0].displayName }}</h1>
      <h2>{{ user[1] }}</h2> -->
      <SearchProfileCard :uid="user[1]" :profile="user[0]" />
    </div>
  </div>
</template>

<script>
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/firebase/firebase";
import SearchProfileCard from "./SearchProfileCard.vue";

export default {
  components: {
    SearchProfileCard,
  },
  methods: {
    async searchForUser() {
      let searchInput = document.getElementById("searchQuery").value;
      let limit = 10;
      searchInput = searchInput.toUpperCase();
      this.resultsArray = [];
      let tempArray = [];
      let uidList = [];
      const querySnapshot = await getDocs(collection(db, "profiles"));
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log("all: " + doc.uid + doc.data());
        tempArray.push(doc.data());
        uidList.push(doc.id);
      });
      console.log("search query: " + searchInput);
      for (let i = 0; i < tempArray.length && limit > 0; i++) {
        let tempProfile = tempArray[i];
        console.log("filter: " + tempProfile.displayName);
        if (tempProfile.displayName.toUpperCase().includes(searchInput)) {
          this.resultsArray.push([tempProfile, uidList[i]]);
          limit--;
        }
      }
    },
    async searchForUserExact() {
      this.resultsArray = [];
      const q = query(
        collection(db, "profiles"),
        where("displayName", "==", document.getElementById("searchQuery").value)
      );

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        this.resultsArray.push(doc.data());
      });
    },
  },
  data() {
    return {
      resultsArray: [],
    };
  },
};
</script>

<style scoped>
#bg-container {
  min-height: 41.5rem;
  background-image: repeating-linear-gradient(
    rgba(240, 235, 244, 1),
    rgba(161, 195, 209, 0.75),
    rgba(241, 114, 161, 0.5)
  );
}

* {
  outline: none;
}

html,
body {
  height: 100%;
  min-height: 100%;
}

body {
  margin: 0;
  background-color: #ffd8d8;
}

.tb {
  display: table;
  width: 100%;
}

.td {
  display: table-cell;
  vertical-align: middle;
}

input,
button {
  color: #fff;
  padding: 0;
  margin: 0;
  border: 0;
  background-color: transparent;
}

#cover {
  /* position: absolute; */
  /* top: 25%; */
  width: 100%;
  padding: 35px;
  margin: auto;
  background-color: rgba(161, 195, 209, 0.75);
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(161, 195, 209, 0.75), 0 0 0 20px #ffffffeb;
  transform: scale(0.6);
}

form {
  height: 96px;
}

input[type="text"] {
  width: 100%;
  height: 96px;
  font-size: 60px;
  line-height: 1;
}

input[type="text"]::placeholder {
  color: white;
}

#s-cover {
  width: 1px;
  padding-left: 35px;
}

button {
  position: relative;
  display: block;
  width: 84px;
  height: 96px;
  cursor: pointer;
}

#s-circle {
  position: relative;
  top: -8px;
  left: 0;
  width: 65px;
  height: 65px;
  margin-top: 0;
  border-width: 15px;
  border: 15px solid #fff;
  background-color: transparent;
  border-radius: 50%;
  transition: 0.5s ease all;
}

button span {
  position: absolute;
  top: 68px;
  left: 43px;
  display: block;
  width: 45px;
  height: 15px;
  background-color: transparent;
  border-radius: 10px;
  transform: rotateZ(52deg);
  transition: 0.5s ease all;
}

button span:before,
button span:after {
  content: "";
  position: absolute;
  bottom: 0;
  right: 0;
  width: 45px;
  height: 15px;
  background-color: #fff;
  border-radius: 10px;
  transform: rotateZ(0);
  transition: 0.5s ease all;
}

#s-cover:hover #s-circle {
  top: -1px;
  width: 67px;
  height: 15px;
  border-width: 0;
  background-color: #fff;
  border-radius: 20px;
}

#s-cover:hover span {
  top: 50%;
  left: 56px;
  width: 25px;
  margin-top: -9px;
  transform: rotateZ(0);
}

#s-cover:hover button span:before {
  bottom: 11px;
  transform: rotateZ(52deg);
}

#s-cover:hover button span:after {
  bottom: -11px;
  transform: rotateZ(-52deg);
}
#s-cover:hover button span:before,
#s-cover:hover button span:after {
  right: -6px;
  width: 40px;
  background-color: #fff;
}
</style>
