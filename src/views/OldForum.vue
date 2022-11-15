<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class='page'>
  <div class="forum">

    <!-- <BlogPost :post="welcomeScreen" /> -->
    <div style="color:white" class="welcome">
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

    <BlogPost
      :post="post"
      v-for="(post, index) in blogPostsFeed"
      :key="index"
    />

    <!-- <div class="blog-card-wrap">
      <div class="container">
        <h3>Go to Chat</h3>
        <div class="blog-cards">
          <router-link class="link" :to="{ name: 'Chat' }">
            <ChatCard />
          </router-link>
        </div>
      </div>
      <br/>
      <br/>
    </div> -->

    <div class="morechats">
        <h3 style="color:black; font-size: 40px; text-align: center; margin-top:30px; margin-bottom: 50px">Go To Chats</h3>  
        <div class="chatcardscontainer">
          <div class="chatcards">
                <MoreChats></MoreChats>
          </div>
        </div>  
    </div>

    <!-- <router-link class="link" :to="{ name: 'Blogs' }">
      <h3>View More Recent Posts</h3>
    </router-link> -->

    <div class="morechats">
      <router-link class="link" :to="{ name: 'Blogs' }">>
        <h3 style="color:black;font-size: 36px; text-transform: none; text-align: center; margin-top:30px; margin-bottom: 50px">View More Recent Posts</h3>
      </router-link>
      <div class="recentpostcontainer">
        <div class="recentposts">
              <RecentPosts></RecentPosts>
        </div>
      </div>  
    </div>

    <div class="blog-cards">
      <BlogCard
        :post="post"
        v-for="(post, index) in blogPostsCards"
        :key="index"
      />
    </div>

    <div ref="bottom" class="forumdiv" style="margin-top:0">
      <ForumList></ForumList>
    </div>

    <div class="moreforums">
        <h3 style="font-size: 40px; text-align: center; margin-top:30px; margin-bottom: 50px; color:white">View More Forums</h3>  
        <div class="reviewcardscontainer">
          <div class="reviewcards">
                <MoreForums></MoreForums>
          </div>
        </div>  
    </div>

    <div class="forum-stats" style="margin-top:50px; color:white">
      <div class="chart">Forum Stats</div>
      <span><u>5,369</u> Posts in <u>48</u> Topics by <u>8,124</u> Members.</span><br>
      <span>Latest post: <b><a style="color:rgb(183, 172, 255)" href="">Should I buy Tesla?</a></b> on Nov 15 2022 by 
        <a style="color:rgb(183, 172, 255)" href="">randomelephant</a></span>.<br>
      <span>Check out <a style="color:rgb(183, 172, 255)" href="">the latest posts</a> .</span><br>
    </div>

    </div>
</div>
</template>

<script>
import BlogPost from "@/components/BlogPost.vue";
import BlogCard from "@/components/BlogCard.vue";
// import ChatCard from "@/components/ChatCard.vue";
import MoreForums from "@/components/MoreForums.vue";
import ForumList from "@/components/ForumList.vue";
import MoreChats from "@/components/MoreChats.vue";
import RecentPosts from "@/components/RecentPosts.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Forum",
  components: {
    BlogPost,
    BlogCard,
    // ChatCard,
    ForumList,
    MoreForums,
    MoreChats,
    RecentPosts,
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
  background-color: rgb(70, 70, 70);
}

.welcome {
  display:flex;
  width: 100%;
  height:100vh;
}

.leftside {
  width: 50%;
  height:100%;
  background:rgba(48, 48, 48, 0.619);
  margin:0px;
  position: relative;
  text-align: center;
  color:white;
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
    left: 20%;
    border-radius: 3px;
    border: 1px solid white;
    background-color: transparent;
    color:white;
    float:left;
    padding: 10px;
  }
}

.discoverbtn:hover {
    background-color: black;
    color:white;
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
