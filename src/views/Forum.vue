<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="forum">
    <BlogPost :post="welcomeScreen" />
    <BlogPost
      :post="post"
      v-for="(post, index) in blogPostsFeed"
      :key="index"
    />
    <div class="blog-card-wrap">
      <div class="container">
        <h3>Go to Chat</h3>
        <div class="blog-cards">
          <router-link class="link" :to="{ name: 'Chat' }">
            <ChatCard />
          </router-link>
        </div>
        <div>
          <br />
          <br />
        </div>
        <router-link class="link" :to="{ name: 'Blogs' }">
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
    </div>
  </div>
</template>

<script>
import BlogPost from "@/components/BlogPost.vue";
import BlogCard from "@/components/BlogCard.vue";
import ChatCard from "@/components/ChatCard.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Forum",
  components: {
    BlogPost,
    BlogCard,
    ChatCard,
  },
  data() {
    return {
      welcomeScreen: {
        title: "Welcome to Forum",
        blogPost: "ABCDF",
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
.blog-card-wrap {
  h3 {
    font-weight: 300;
    font-size: 28px;
    margin-bottom: 32px;
  }
}
</style>
