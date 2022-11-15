<template>
  <div class="blog-wrapper" :class="{'no-user': !user}">
    <div class="blog-content">
      <div>
        <h2 v-if="post.welcomeScreen">{{ post.title }}</h2>
        <h2 v-else>{{ post.blogTitle }}</h2>
        <p v-if="post.welcomeScreen">{{ post.blogPost }}</p>
        <p class="content-preview" v-else v-html="post.blogHTML"></p>
        <router-link style="color: white" class="link link-right" v-if="post.welcomeScreen" to="/blogs" >
          See more posts
        </router-link>
        <!-- <router-link style="color: white" class="link link-right" v-if="post.welcomeScreen" to="/register">
          Register 
        </router-link> -->
        <!-- <button class="discoverbtn" v-if="post.welcomeScreen" @click="scrollToBottom">
          CLICK TO DISCOVER
        </button> -->
        <router-link class="link" v-else :to="{name: 'ViewPost', params: {blogid: this.post.blogID}}">
          View the Post
        </router-link>
      </div>
    </div>
    <div class="blog-photo">
      <img
        v-if="post.welcomeScreen"
        :src="require(`../assets/blogPhotos/${post.photo}.jpg`)"
        alt=""
      />
      <img
        v-else
        :src="post.blogCoverPhoto"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "blogPost",
  props: ["post"],
  components: {
    
  },
  methods: {
    scrollToBottom(){
      this.$refs['bottom'].scrollIntoView({behavior: "smooth"})
    }  
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  }
};
</script>

<style lang="scss" scoped>
.blog-wrapper {
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  @media (min-width: 700px) {
    min-height: 650px;
    max-height: 650px;
    flex-direction: row;
  }
  .blog-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 4;
    order: 2;
    @media (min-width: 700px) {
      order: 1;
    }
    @media (min-width: 800px) {
      flex: 3;
    }

    div {
      max-width: 375px;
      padding: 72px 24px;
      @media (min-width: 700px) {
        padding: 0 24px;
      }

      h2 {
        font-size: 32px;
        font-weight: 300;
        text-transform: uppercase;
        margin-bottom: 24px;
        @media (min-width: 700px) {
          font-size: 40px;
        }
      }

      p {
        font-size: 15px;
        font-weight: 300;
        line-height: 1.7;
      }

      .content-preview {
        font-size: 13px;
        max-height: 24px;
        width: 250px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .link {
        display: inline-flex;
        align-items: center;
        margin-top: 32px;
        padding-bottom: 4px;
        border-bottom: 1px solid transparent;
        transition: 0.5s ease-in all;

        &:hover {
          border-bottom-color: #303030;
        }
      }

      .link-light {
        &:hover {
          border-bottom-color: #fff;
        }
      }
    }
  }

  .blog-photo {
    order: 1;
    flex: 3;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);

    @media (min-width: 700px) {
      order: 2;
    }
    @media (min-width: 800px) {
      flex: 4;
    }
    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}

.no-user:first-child{
    .blog-content{
        background-color: #303030;
        color:#fff;
    }
}
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

.discoverbtn:hover {
    background-color: black;
    color:white;
}
</style>
