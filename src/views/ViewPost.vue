<template>
<div v-if="!loading" class="post-view">
    <div class="container quillWrapper">
        <h2>{{this.currentBlog.data().blogTitle}}</h2>
        <h4>Posted on: {{ new Date(this.currentBlog.data().blogDate).toLocaleString("en-us", {dataStyle: "long"})}}</h4>
        <img :src="this.currentBlog.data().blogCoverPhoto" alt="" />
        <div class="post-content ql-editor" v-html="this.currentBlog.data().blogHTML"></div>
    </div>
<div>

</div>

    <form ref= "commentField" @submit="commentSend">
    <div class="commentformspace">
      <input type="text" v-model="comment" style="height: 35px" placeholder="Comment Here"/>
      <button type="submit">Send</button>

    </div>
    </form>

    <div class="commentsection">

        <div v-if="!loading" class="posts-table">

            <div class="table-head">
                <div class="subjects">Comments</div>
            </div>

            <div class="table-row" v-for="(comment,id) in comments" v-bind:key="id">
                User : {{comment[0]}}
            </div>

        </div>

    </div>


    </div>

  
</template>

<script>
import { db } from '@/firebase/firebase';
import { getAuth, onAuthStateChanged } from "firebase/auth";

import {doc,  getDoc , collection, addDoc, query, getDocs} from "@firebase/firestore";


export default {
    name: "ViewPost",
    data() {
        return {
            currentBlog: null,
            loading: true,
            user: false,
            comment: null,
            webid: null,
            comments: [],
        }
    },
    async mounted() {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
          if (user) {
            this.user = user;
          }
        })

        const id = this.$route.params.blogid
        this.webid = id;
        const docRef = doc(db, "blogPosts", id)
        const docSnap = await getDoc(docRef)
        this.currentBlog = docSnap;

        const docRef2 = query(collection(db,"blogPosts", id, "comments"))
        const querySnapshot = await getDocs(docRef2)
        querySnapshot.forEach((doc) => {
            this.comments.push([doc.data().comment,doc.data().date, doc.id])
        })

        this.loading = false

    },
    methods: {
        async commentSend(e) {
            e.preventDefault();
            const timestamp = Date.now();
            const dataBase = collection(db, "blogPosts", this.webid, "comments" )
                        this.docRef = await addDoc(dataBase, {
                            date:timestamp,
                            comment: this.comment,
                            // username: this.user.username,
                        })
            this.comment="";
        }
        
    },
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
    h4{
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
    justify-content:center;
    align-self: center;
    position: relative;
    margin:auto;
    width: 60%;

}

.commentformspace {
    width:60%;
    justify-content: center;
    margin:auto;
}


.table-head{
    display: flex;
}

.table-head div{
    padding: 5px;
    margin: 2px;
    background-color: #c2c2c2;
    font-weight: bold;
}

.table-head .subjects{
    flex: 70%;
}

/* posts table's body  */

.table-row{
    display: flex;
    background-color: #d6d6d6;
    padding: 5px;
    margin: 3px;
}

.table-row .status, .table-row .subjects {
    padding: 5px;
    margin: 2px;
}

.table-row .status{
    flex: 5%;
    font-size: 30px;
    text-align: center;
}

.table-row .subjects{
    flex: 70%;
}

.table-row .replies{
    flex: 10%;
}

.table-row .last-reply{
    flex: 15%;
}
</style>