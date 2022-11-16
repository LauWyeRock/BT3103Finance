<template>
  <div v-if="!loading" class="post-view">
    <div class="container quillWrapper">
      <h2>{{ this.currentBlog.data().blogTitle }}</h2>
      <h4>
        Posted on:
        {{ this.date }}
      </h4>
      <img :src="this.currentBlog.data().blogCoverPhoto" alt="" />
      <div
        class="post-content ql-editor"
        v-html="this.currentBlog.data().blogHTML"
      ></div>
    </div>
    <div></div>

    <div class="commentsection">
      <div v-if="!loading" class="posts-table">
        <div class="table-head">
          <div class="subjects">
            <h2 style="text-align: center">Comments</h2>
          </div>
        </div>

        <form ref="commentField" @submit="commentSend">
          <div class="commentformspace">
            <input
              type="text"
              v-model="comment"
              style="height: 40px; min-width: 28rem; margin-bottom: 0px"
              placeholder="Write a Comment..."
            />
            <button type="submit" style="margin-top: 5px">Send</button>
          </div>
        </form>

        <div
          class="table-row"
          v-for="(comment, id) in comments"
          v-bind:key="id"
        >
          <ForumComment
            :date="timeConverter(comment[1])"
            :comment="comment[0]"
            :profile="comment[2]"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "@/firebase/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import ForumComment from "../components/ForumComment.vue";

import {
  doc,
  getDoc,
  collection,
  addDoc,
  query,
  getDocs,
} from "@firebase/firestore";

export default {
  components: {
    ForumComment,
  },
  name: "ViewPost",
  data() {
    return {
      currentBlog: null,
      date: null,
      loading: true,
      user: false,
      comment: null,
      webid: null,
      comments: [],
      myUid: "",
    };
  },
  async mounted() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.user = user;
        this.myUid = auth.currentUser.uid;
      }
    });

    const id = this.$route.params.blogid;
    this.webid = id;
    const docRef = doc(db, "blogPosts", id);
    const docSnap = await getDoc(docRef);
    this.currentBlog = docSnap;

    const docRef2 = query(collection(db, "blogPosts", id, "comments"));
    const querySnapshot = await getDocs(docRef2);
    querySnapshot.forEach(async (doc) => {
      //get profile
      let profile = await this.getProfile(doc.data().uid);
      //   let date = this.timeConverter(doc.data().date);
      this.comments.push([doc.data().comment, doc.data().date, profile]);
      this.comments.sort(function (a, b) {
        return a[1] - b[1];
      });
    });

    this.date = this.timeConverter(this.currentBlog.data().date);
    console.log(this.date);
    this.loading = false;
  },
  methods: {
    async getProfile(uid) {
      const docRef = doc(db, "profiles", uid);
      const docSnap = await getDoc(docRef);

      return new Promise((resolve, reject) => {
        if (docSnap.exists()) {
          const data = docSnap.data();
          resolve(data);
        } else {
          reject();
        }
      });
    },
    timeConverter(timestamp) {
      var a = new Date(timestamp);
      var months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      var year = a.getFullYear();
      var month = months[a.getMonth()];
      var date = a.getDate();
      var hour = a.getHours();
      var min = a.getMinutes();
      var sec = a.getSeconds();
      var time =
        date + " " + month + " " + year + " " + hour + ":" + min + ":" + sec;
      return time;
    },
    async commentSend(e) {
      e.preventDefault();
      const timestamp = Date.now();
      const dataBase = collection(db, "blogPosts", this.webid, "comments");
      this.docRef = await addDoc(dataBase, {
        date: timestamp,
        comment: this.comment,
        uid: this.myUid,
      });
      console.log(
        "Sent comment successfully:" +
          timestamp +
          " " +
          this.comment +
          " " +
          this.myUid
      );
      this.comment = "";
    },
  },
  computed: {
    blogPostsFeed() {
      return this.$store.getters.blogPostsFeed;
    },
  },
};
</script>

<style lang="scss">
.post-view {
  min-height: 100%;
  background: repeating-linear-gradient(
    rgba(240, 235, 244, 1),
    rgba(161, 195, 209, 0.75),
    rgba(241, 114, 161, 0.5)
  );
  .container {
    max-width: 1000px;
    padding: 60px 25px;
  }

  .ql-editor {
    padding: 0;
  }

  h2 {
    margin-bottom: 16px;
    font-weight: 300;
    font-size: 32px;
  }
  img {
    width: 100%;
    margin-bottom: 32px;
  }
  h4 {
    font-weight: 400;
    font-size: 14px;
    margin-bottom: 24px;
  }
}

.submit {
  border-radius: 2px;
  background-color: rgb(245, 235, 220);
  color: black;
}

.commentsection {
  justify-content: center;
  align-self: center;
  position: relative;
  margin: auto;
}

.commentformspace {
  max-width: 30%;
  justify-content: center;
  margin: auto;
  margin-top: 1rem;
}

.table-head {
  display: flex;
}

.table-head div {
  padding: 5px;
  margin: 2px;
  background-color: #c2c2c2;
  font-weight: bold;
}

.table-head .subjects {
  flex: 70%;
}

/* posts table's body  */

.table-row {
  display: flex;
}

.table-row .status,
.table-row .subjects {
  padding: 5px;
  margin: 2px;
}

.table-row .status {
  flex: 5%;
  font-size: 30px;
  text-align: center;
}

.table-row .subjects {
  flex: 70%;
}

.table-row .replies {
  flex: 10%;
}

.table-row .last-reply {
  flex: 15%;
}
</style>
