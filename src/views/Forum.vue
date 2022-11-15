<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class='page'>
  <div class="forum">

    <div class="welcome">
      <div class="leftside">
        <div class="textcontainer">
          <div><h2>welcome to <br/> the forum</h2></div>
          <div><p>Discuss and exchange knowledge within our reliable user community.</p></div>
        </div>
        <button class="discoverbtn" @click="scrollToBottom">
          CLICK TO DISCOVER FORUMS
        </button>
      </div>
      <div class="rightside">
        <img src="..\assets\blogPhotos\coding.jpg" alt=""/>
      </div>
    </div>

  


    <!-- <BlogPost :post="welcomeScreen" /> -->

    <BlogPost
      :post="post"
      v-for="(post, index) in blogPostsFeed"
      :key="index"
    />

    <div ref="bottom" class="forumdiv" style="margin-top:0">
      <ForumList></ForumList>
    </div>

    <div class="moreforums">
        <h3 style="font-size: 40px; text-align: center; margin-top:30px; margin-bottom: 50px">View More Forums</h3>  
        <div class="reviewcardscontainer">
          <div class="reviewcards">
                <MoreForums></MoreForums>
          </div>
        </div>  
    </div>

    <div class="forum-stats" style="margin-top:50px">
      <div class="chart">
          Forum Stats
      </div>
      <span><u>5,369</u> Posts in <u>48</u> Topics by <u>8,124</u> Members.</span><br>
      <span>Latest post: <b><a href="">Should I buy Tesla?</a></b> on Nov 15 2022 by <a href="">randomelephant</a></span>.<br>
      <span>Check out <a href="">the latest posts</a> .</span><br>
    </div>

    <div class="forum-stats" style="margin-top:10px">
      <div class="chart">
          <p style="font-size:25px">Go to Chat</p>
      </div>
    </div>


    <!--<div class="blog-card-wrap">
      <div class="container">
        <h3>Go to Chat</h3> \
        <div class="blog-cards">
          <router-link class="link" :to="{ name: 'Chat' }">
            <ChatCard />
          </router-link>
        </div> -->


        <!-- <router-link class="link" :to="{ name: 'Blogs' }">
          <h3>View More Recent Posts</h3>
        </router-link>
        <div class="blog-cards">
          <BlogCard
            :post="post"
            v-for="(post, index) in blogPostsCards"
            :key="index"
          />
        </div>
      </div>
    </div> -->

  </div>
</div>
</template>

<script>
import BlogPost from "@/components/BlogPost.vue";
// import BlogCard from "@/components/BlogCard.vue";
// import ChatCard from "@/components/ChatCard.vue";
import MoreForums from "@/components/MoreForums.vue";
import ForumList from "@/components/ForumList.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Forum",
  components: {
    BlogPost,
    // BlogCard,
    // ChatCard,
    ForumList,
    MoreForums
  },
  methods: {
    scrollToBottom(){
      this.$refs['bottom'].scrollIntoView({behavior: "smooth"})
    }  
  },
  data() {
    return {
      welcomeScreen: {
        title: "Welcome to the Forum",
        blogPost: "Discuss and exchange knowledge within our reliable user community.",
        welcomeScreen: true,
        photo: "coding",
      },
      // blogPostsFeed: [
      //           {title: "blogpost1",
      //             blogPost: "ABCDF",
      //             welcomeScreen: false,
      //             photo: ""},
      //           { title: 'Frank', blogPost: 'Murphy' },
      //           { title: 'Frank', blogPost: 'Murphy' },
      //           { title: 'Frank', blogPost: 'Murphy' },
      //           { title: 'Frank', blogPost: 'Murphy' },
      //       ]
    };
  },
  computed: {
    blogPostsFeed() {
      return this.$store.getters.blogPostsFeed;
    },
    blogPostsCards() {
      return this.$store.getters.blogPostsCards;
    },
    user() {
      return this.$store.state.user;
    },
  },
};
</script>

<style lang="scss" scope>

.forum {
  background-image: repeating-linear-gradient(
            rgba(240, 235, 244, 1),
            rgba(198, 224, 236, 0.75),
            rgba(248, 200, 217, 0.5),
        );
}

.gotochat {
  background-color: transparent;
  width: 90%;
  margin:auto;
  margin-top: 30px;
}

.welcome {
  display:flex;
  width: 100%;
  height:100vh;
}

.leftside {
  width: 50%;
  height:100%;
  background:rgba(251, 247, 237, 0.619);
  margin:0px;
  position: relative;
  text-align: center;
  h2 {
    position: absolute;
    top: 30%;
    left: 25%;
    margin: -35px 0 0 -35px;
    font-size: 45px;
  };
  p {
    text-align: left;
    width:45%;
    position: absolute;
    top: 55%;
    left: 25%;
    margin: -35px 0 0 -35px;
  };
  .discoverbtn {
    position: absolute;
    top: 58%;
    left: 19%;
    border-radius: 3px;
    border: 1px solid black;
    background-color: transparent;
    color:black;
    float:left;
    padding: 10px;
  }
}

.textcontainer {
  width: 50%;
  align-self: center;
  margin:auto;
}

h2 {
  font-size: 32px;
  font-weight: 300;
  text-transform: uppercase;
  margin-bottom: 24px;
  text-align: left;
}

.rightside {
  width: 50%;
  float:left;
  height:100%;
  margin:0px
}

img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

h3 {
    font-weight: 300;
    font-size: 28px;
    margin-bottom: 32px;
  }

  .forum-stats{
        padding: 20px;
        background-color: transparent;
        width:93%;
        margin:auto;
        justify-content: center;
    }
    
  .chart{
      font-size:20px;
      font-weight:bold;
  }

// .blog-card-wrap {
//   h3 {
//     font-weight: 300;
//     font-size: 28px;
//     margin-bottom: 32px;
//   }
// }
</style>
