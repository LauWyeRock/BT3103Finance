<template>
<div class="post-view">
    <div class="container quillWrapper">
        <h2>{{this.currentBlog[0].blogTitle}}</h2>
        <h4>Posted on: {{ new Date(this.currentBlog[0].blogDate).toLocaleString("en-us", {dataStyle: "long"})}}</h4>
        <img :src="this.currentBlog[0].blogCoverPhoto" alt="" />
        <div class="post-content ql-editor" v-html="this.currentBlog[0].blogHTML"></div>
    </div>
</div>

</template>

<script>
export default {
    name: "ViewPost",
    data() {
        return {
            currentBlog: null,
        }
    },
    async mounted() {
        console.log(this.currentBlog); 
        // this.currentBlog = await this.$store.state.blogPosts.filter((post) => {
        //     return post.blogID === this.$route.params.blogid;
        // })
        this.currentBlog = await this.blogPostsFeed.filter((post) => {
            return post.blogID === this.$route.params.blogid;
        })
       
    },
    computed: {
        blogPostsFeed() {
            return this.$store.getters.blogPostsFeed;
        },
        user() {
            return this.$store.state.user;
        }
    }
}
</script>

<style lang="scss">
.post-view{
    h4{
        font-weight: 400;
        font-size: 14px;
        margin-bottom: 24px;
    }
}
</style>