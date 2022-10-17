<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <header>
    <nav class="container">
      <div class="branding">
        <router-link class="header" :to="{ name: 'Home' }">
          FinanceBois
        </router-link>
        <!-- this path name is referenced to index.js in router -->
      </div>
      <div class="nav-links">
        <ul>
          <router-link class="link" to="/">Home</router-link>
          <router-link class="link" to="/feed">Feed</router-link>
          <router-link class="link" v-if="!auth" to="/sign-in">
            Login
          </router-link>
          <router-link class="link" v-if="!auth" to="/register">
            Register
          </router-link>
          <router-link class="link" to="/news"> News </router-link>
          <router-link class="link" to="/forum"> forum </router-link>
          <router-link class="link" to="/chat"> Chat </router-link>
          <h3 @click.prevent="signOut" class="link">Sign Out</h3>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name:'navigation',
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
    },
};
</script>

<style lang="scss" scoped>
header {
  background-color: #fff;
  padding: 0 25px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
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
        font-weight: 600;
        font-size: 24px;
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
</style>
