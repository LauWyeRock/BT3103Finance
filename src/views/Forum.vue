<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="forum">
        <BlogPost :post="welcomeScreen"/>
        <BlogPost :post="post" v-for="(post,index) in sampleBlogPost" :key="index" />
        <div class="blog-card-wrap">
            <div class="container">
                <h3>View More Recent Posts</h3>
                <div class="blog-cards">
                    <BlogCard :post="post" v-for="(post, index) in sampleBlogCards" :key="index" />
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
                title: "Welcome!",
                blogPost: "ABCDF",
                welcomeScreen:true,
                photo:"coding",
            },
            sampleBlogPost: [
                {
                    title:"This is a title",
                    blogHTML:"This is a",
                    blogCoverPhoto:"beautiful-stories",
                },
                {
                    title:"This is a2 title",
                    blogHTML:"This is2 a",
                    blogCoverPhoto:"beautiful-stories",
                }
            ],
            sampleBlogCards: [
                { blogTitle: "Blog Card #1", blogCoverPhoto: "stock-1", blogDate: "May 1, 2022"},
                { blogTitle: "Blog Card #2", blogCoverPhoto: "stock-2", blogDate: "May 1, 2022"},
                { blogTitle: "Blog Card #3", blogCoverPhoto: "stock-3", blogDate: "May 1, 2022"},
                { blogTitle: "Blog Card #4", blogCoverPhoto: "stock-4", blogDate: "May 1, 2022"},
            ],
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