<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="forum">
        <BlogPost :post="welcomeScreen"/>
        <BlogPost :post="post" v-for="(post,index) in blogPostsFeed" :key="index" />
        <div class="blog-card-wrap">
            <div class="container">
                <h3>View More Recent Posts</h3>
                <div class="blog-cards">
                    <BlogCard :post="post" v-for="(post, index) in blogPostsCards" :key="index" />
                </div> 
            </div>
        </div>
    </div>
</template>

<script>
import BlogPost from '@/components/BlogPost.vue';
import BlogCard from '@/components/BlogCard.vue';
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name:"Forum",
    components:{ 
        BlogPost,
        BlogCard,
     },
    data() {
        return {
            welcomeScreen:{
                title: "Welcome to Forum",
                blogPost: "ABCDF",
                welcomeScreen:true,
                photo:"coding",
            },
            
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
        }
    }
}


</script>

<style lang="scss" scope>
.blog-card-wrap {
    h3{
        font-weight: 300;
        font-size: 28px;
        margin-bottom: 32px;
    }
}


</style>