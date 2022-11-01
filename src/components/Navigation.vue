<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <header>
    <nav class="container">
      <div class="branding">
        <router-link class="header" :to="{ name: 'Home' }">
          tradebros
        </router-link>
        <!-- this path name is referenced to index.js in router -->
      </div>
      <div class="nav-links">
        <ul>
          <router-link class="link" to="/">Home</router-link>
          <router-link class="link" to="/feed">Feed</router-link>
          <router-link class="link" v-if="!user" to="/sign-in">
            Login
          </router-link>
          <router-link class="link" v-if="!user" to="/register">
            Register
          </router-link>
          <router-link class="link" to="/news"> News </router-link>
          <router-link class="link" to="/forum"> forum </router-link>
          <router-link class = "link" to="/stocks/" @click="this.$store.commit('updateExchangeTicker','NYSE:GME')"> Stocks </router-link>
          <router-link class="link" to="/chat" v-if="user"> Chat </router-link>
          <router-link class="link" to="/createpost" v-if="user"> Create Post </router-link>
          <router-link class="link" to="/papertrading" v-if="user"> Paper Trading</router-link>
          <router-link class="link" to="/pfp" v-if="user"> Profile Page</router-link>
          <br /> <br />
          <h4 @click.prevent="signOut" class="link" v-if="user">Sign Out</h4>
          <br />
          <div class="searchbar">
            <input type="text" id="stock" required="" placeholder="Search Stock..."/>
            </div>
            <div class="save">
              <button id="searchbutton" type="button" v-on:click="savetofs()"> Search </button>
          </div>
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
    name:'navigation',
    mounted() {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.user = user;
        }
      })
    },
    data() {
      return {
        user:false,
      }
    },
    commponents: {

    },
    methods: {
        async signOut() {
            await signOut(auth).then(() => {
                this.$router.push({name: "Home"})
            }).catch((err) => {
                console.log(err.message)
            });
        },
        savetofs() {
          let a = document.getElementById("stock").value
          this.$store.commit('updateExchangeTicker',a)
          this.$router.push("/stocks/")
        }
    },
};
</script>

<style lang="scss" scoped>

header {
  background-color:#f0ebf4;
  padding: 0 25px;
  // box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    // 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  z-index: 99;
  .link {
    font-weight: 500;
    padding: 0 8px;
    transition: 0.3s color ease;

    &:hover {
      color: #1eb8b8;
    }
  }

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
        margin-right: 32px;
        .link {
          margin-right: 32px;
        }

        .link:last-child {
          margin-right: 0;
        }
      }
    }
  }

  .mobile-nav {
    padding: 20px;
    width: 70%;
    max-width: 250px;
    display: flex;
    flex-direction: column;
    position: fixed;
    height: 100%;
    background-color: #303030;
    top: 0;
    left: 0;

    .link {
      padding: 15px 0;
      color: #fff;
    }
  }
}

.searchbar {
  background-color: white;
        width: 20px;
        height: 10px;
        border-radius: 10px;
        font-weight: bold;
        box-shadow: 10px 3px 5px #888888
}

#searchbutton {
  height: 25px;
  width: 70px;
  background-color: rgba(198, 241, 247, 0.804);
  border-radius: 5px;
  padding:0px;
  color: black;
}

</style>
