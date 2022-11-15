<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <header>
    <nav class="container">
      <div class="branding">
        <a href="/" class="header">Fluorich</a>
        <!-- <router-link class="header" :to="{ name: 'Home' }">tradebros</router-link> -->
        <!-- this path name is referenced to index.js in router -->
      </div>

      <div class="searchdiv">
        <input type="text" id="stock" class="searchbar" placeholder="Search Stock..." />
        <button class="searchbutton" type="button" v-on:click="savetofs()">Search</button>
      </div>

      <div class="nav-links">
        <!-- <ul>
          <li><a href="/">Home1</a></li>
          <router-link class="link" to="/">Home</router-link>
          <router-link class="link" to="/feed">TestPageNotFound</router-link>
          <router-link class="link" v-if="!user" to="/sign-in">Login</router-link>
          <router-link class="link" v-if="!user" to="/register"> Register </router-link>
          <router-link class="link" to="/news"> News </router-link>
          <router-link class="link" to="/videos"> Videos </router-link>
          <router-link class="link" to="/forum"> Forum </router-link>
          <router-link class="link" to="/blogs"> Blogs </router-link>
          <router-link class="link" to="/chat" v-if="user"> Chat </router-link>
          <router-link class="link" to="/createpost" v-if="user"> Create Post </router-link>
          <router-link class="link" to="/papertrading" v-if="user"> Paper Trading</router-link>
          <router-link class="link" to="/profile" v-if="user"> Profile Page</router-link>
          <router-link class="link" to="/editpfp" v-if="user"> EditProfilePage</router-link>
          <router-link class="link" to="/stock-screener" v-if="user"> StockScreener</router-link>
        </ul> -->

        <ul>
          <li class="dropdown">
            <a href="javascript:void(0)" class="dropbtn">HOME</a>
            <div class="dropdown-content">
              <a href="/">Home</a>
              <a href="/feed">TestPageNotFound</a>
              <a href="papertrading" v-if="user">Paper Trading</a>
              <a href="stock-screener" v-if="user">Stock Screener</a>
            </div>
          </li>

          <li class="dropdown">
            <a href="javascript:void(0)" class="dropbtn">RESOURCES</a>
            <div class="dropdown-content">
              <a href="news">News</a>
              <a href="videos">Videos</a>
            </div>
          </li>

          <li class="dropdown">
            <a href="javascript:void(0)" class="dropbtn">COMMUNITY</a>
            <div class="dropdown-content">
              <a href="forum">Forum</a>
              <a href="blogs">Blogs</a>
              <a href="chat" v-if="user">Chat</a>
              <a href="createpost" v-if="user">Create Post</a>
            </div>
          </li>

          <li class="dropdown">
            <a href="javascript:void(0)" class="dropbtn">PROFILE</a>
            <div class="dropdown-content">
              <a href="sign-in" v-if="!user">Login</a>
              <a href="register" v-if="!user"> Register </a>
              <a href="profile" v-if="user">Profile</a>
              <a href="editprofile" v-if="user">Edit Profile</a>
              <a @click.prevent="signOut" v-if="user">Sign Out</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "navigation",
  mounted() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.user = user;
      }
    });
  },
  data() {
    return {
      user: false,
    };
  },
  commponents: {},
  methods: {
    async signOut() {
      await signOut(auth)
        .then(() => {
          this.$router.push({ name: "Home" });
        })
        .catch((err) => {
          console.log(err.message);
        });
      },

      savetofs() {
        let a = document.getElementById("stock").value;
        this.$store.commit("updateExchangeTicker", a);
        this.$router.push("/stocks/" + a);
      },
  },
};
</script>

<style lang="scss" scoped>
header {
  background-color: #f0ebf4;
  padding: 0 25px;
  // box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
  // 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  z-index: 99;

  // .link {
  //   font-weight: 500;
  //   padding: 0 8px;
  //   transition: 0.3s color ease;

  //   &:hover {
  //     color: #1eb8b8;
  //   }

  //   &:focus {
  //     text-decoration: underline;
  //   }
  // }

  nav {
    display: flex;
    padding: 25px 0;

    .branding {
      display: flex;
      align-items: center;
      .header {
        font-weight: bold;
        font-size: 40px;
        font-family: serif;
        letter-spacing: -2px;
        color: #000;
        text-decoration: none;
      }
    }

    .nav-links {
      position: relative;
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: flex-end;
      font-size: 15px;

      ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        margin-right: 32px;
      }
      //   .link {
      //     margin-right: 32px;
      //   }

      //   .link:last-child {
      //     margin-right: 0;
      //   }
      // }
    }
  }

  // .mobile-nav {
  //   padding: 20px;
  //   width: 70%;
  //   max-width: 250px;
  //   display: flex;
  //   flex-direction: column;
  //   position: fixed;
  //   height: 100%;
  //   background-color: #303030;
  //   top: 0;
  //   left: 0;

  //   .link {
  //     padding: 15px 0;
  //     color: #fff;
  //   }
  // }
}

.searchdiv {
  margin-bottom: 20px;
  margin-left: 50px;
  width: 500px;
}

.searchbar {
  border: solid 1.5px black;
  height: 20px;
  line-height: 20px;
  vertical-align: middle;
  display: inline-block;
  background-color: white;
  width: 150px;
  height: 30px;
  border-radius: 5px;
  // box-shadow: 10px 3px 5px #888888;
}

.searchbutton {
  margin-left: 10px;
  height: 30px;
  width: 70px;
  background-color: rgb(252, 248, 243);
  border-radius: 5px;
  color: rgb(192, 140, 205);
  font-weight: bold;
  padding: 0;

  &:hover {
    background-color: rgb(192, 140, 205);
    color: rgb(252, 248, 243);
  }
}

li {
  float: left;
}
li a:hover,
.dropdown:hover .dropbtn {
  color: rgb(192, 140, 205);
}

li.dropdown {
  display: inline-block;
}

.dropbtn {
  text-decoration: none;
  margin-left: 10px;
  margin-right: 10px;
  color: black;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content a:hover {
  background-color: #f1f1f1;
  cursor: pointer;
}

.dropdown:hover .dropdown-content {
  display: block;
  cursor: pointer;
}
</style>
