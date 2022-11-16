<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="forum">
      <BlogPost :post="welcomeScreen" />
      <BlogPost
        :post="post"
        v-for="(post, index) in blogPostsFeed"
        :key="index"
      />

    <div ref="bottom" class="blog-card-wrap">
        <div class="container">
        <h1>Go to Chat</h1>

        <div class="chatcardcontainer">
            <div class="blog-cards2">
            <router-link class="link" :to="{ name: 'Chat' }">
                <ChatCard/>
            </router-link>
            </div>

            <div class="blog-cards2">
            <router-link class="link" :to="{ name: 'Chat' }">
                <ChatCard2/>
            </router-link>
            </div>

            <div class="blog-cards2">
            <router-link class="link" :to="{ name: 'Chat' }">
                <ChatCard3/>
            </router-link>
            </div>

            <div class="blog-cards2">
            <router-link class="link" :to="{ name: 'Chat' }">
                <ChatCard4/>
            </router-link>
            </div>
        </div>

        <div>
          <br />
          <br />
        </div>
       
        <div class="viewmoreblogs">
        <router-link class="link" :to="{ name: 'Blogs' }">
          <h1>View More Recent Posts</h1>
        </router-link>
          <div class="blog-cards">
              <BlogCard
              :post="post"
              v-for="(post, index) in blogPostsCards"
              :key="index"
              />
          </div>
        </div>

        <ForumList></ForumList>
        
      
      <!-- <ForumList></ForumList> -->
  </div>
  </div>
</div>
</template>

<script>
import BlogPost from "@/components/BlogPost.vue";
import BlogCard from "@/components/BlogCard.vue";
import ChatCard from "@/components/ChatCard.vue";
import ChatCard2 from "@/components/ChatCard2.vue";
import ChatCard3 from "@/components/ChatCard3.vue";
import ChatCard4 from "@/components/ChatCard4.vue";
import ForumList from "@/components/ForumList.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Forum",
  components: {
    BlogPost,
    BlogCard,
    ChatCard,
    ChatCard2,
    ChatCard3,
    ChatCard4,
    ForumList
  },
  data() {
    return {
        welcomeScreen: {
        title: "Welcome to Our Forum",
        blogPost: "Discuss and exchange knowledge within our reliable user community.",
        welcomeScreen: true,
        photo: "coding",
      },
    };
  },
  methods: {
    scrollToBottom(){
      this.$refs['bottom'].scrollIntoView({behavior: "smooth"})
    }  
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

.viewmoreblogs {
  margin-bottom: 500px;
}

.forum {
  background-image: repeating-linear-gradient(
    rgba(240, 235, 244, 1), 
    rgba(161, 195, 209, 0.75), 
    rgba(241, 114, 161, 0.5)
    );;
}

h1 {
    text-align: center;
    font-size: 40px;
    color: black;
    padding-bottom: 50px;
    font-weight: 500;
    text-transform: uppercase;

}

.blog-card-wrap {
  background-image: repeating-linear-gradient(
    rgba(240, 235, 244, 1), 
    rgba(161, 195, 209, 0.75), 
    rgba(241, 114, 161, 0.5)
    );
    h3 {
        font-weight: 300;
        font-size: 28px;
        margin-bottom: 32px;
    }
}

.chatcardcontainer {
    margin: 0 -5px;
}

.chatcardcontainer:after {
    content: "";
    display: table;
    clear: both;
}

.blog-cards {
    float: left;
    /* width: 25%; */
    padding: 0 0px;
}

.blog-cards2 {
    float: left;
    width: 22%;
    padding: 0 0px;
    margin-left: 20px;
    margin-right: 20px;
}

</style>