<template>
    <div class="blog-card-wrap">
        <div class="blog-cards container">
          
                <BlogCard :post="post" v-for="(post, index) in blogPosts" :key="index" />
        </div>
    </div>
</template>

<script>

import BlogCard from '@/components/BlogCard.vue';
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name:"blogs",
    components: {
        BlogCard
    },
    computed: {
        blogPosts() {
            return this.$store.getters.blogPosts;
        },
        user() {
            return this.$store.state.user;
        }
    },
}

</script>

<style lang="scss" scoped>

</style>