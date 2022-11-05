<template>
<div v-if="!loading" class="post-view">
    <div class="container quillWrapper">
        <h2>{{this.currentBlog.data().blogTitle}}</h2>
        <h4>Posted on: {{ new Date(this.currentBlog.data().blogDate).toLocaleString("en-us", {dataStyle: "long"})}}</h4>
        <img :src="this.currentBlog.data().blogCoverPhoto" alt="" />
        <div class="post-content ql-editor" v-html="this.currentBlog.data().blogHTML"></div>
    </div>

    <div class="commentformspace">
      <input v-model="message" placeholder="Comment here" />
    </div>
</div>
  
</template>

<script>
import { db } from '@/firebase/firebase';
import { getAuth, onAuthStateChanged } from "firebase/auth";

import {doc,  getDoc } from "@firebase/firestore";


export default {
    name: "ViewPost",
    data() {
        return {
            currentBlog: null,
            loading: true,
            user: false,
            comment: null,
        }
    },
    async mounted() {
        const id = this.$route.params.blogid
        const docRef = doc(db, "blogPosts", id)
        const docSnap = await getDoc(docRef)
        this.currentBlog = docSnap;
        this.loading = false

        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
          if (user) {
            this.user = user;
          }
        })
    },
    // methods: {
    //     async commentSend() {
    //         const timestamp = Date.now();
    //         const dataBase = collection(db, "blogPosts", this.$router.params.blogid, "comments" )
    //                     this.docRef = await addDoc(dataBase, {
    //                         date:timestamp,
    //                         comment: {{message}},
    //                         username: this.user.username,
    //                     })
    //     }
    // },
    computed: {
        blogPostsFeed() {
            return this.$store.getters.blogPostsFeed;
        },
    }
}
</script>

<style lang="scss">
.post-view{
    min-height: 100%;
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
    h4{
        font-weight: 400;
        font-size: 14px;
        margin-bottom: 24px;
    }
}
</style>