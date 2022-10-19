<!-- eslint-disable vue/multi-word-component-names -->
<template>
<div class="home">

    <!-- header + search bar -->
    <div class="header">news</div>
    <div class="search">
        <input type="text" class="searchbar" placeholder="Search for news..."/>
    </div>

    <!-- navbar -->
    <div class="topnav">
        <a class="active" href="#all">all</a>
        <a href="#marketnews">market news</a>
        <a href="#companynews">company news</a>
        <a href="#cryptocurrencynews">cryptocurrency news</a>
    </div>

    <!-- featurednews -->
    <!-- <div class="container">
        <div class="square">
            <div class="col-sm-6">
            <img class="img" src="https://image.cnbcfm.com/api/v1/image/106968299-1635740326985-gettyimages-1235736525-RAFAPRESS_06102021-1269.jpeg?v=1666027145&w=630&h=354&ffmt=webp">
            <h5 class="card-title">Stocks making the biggest moves midday:
                <br class="card-text">Roblox, Continental Resources, Fox Corp and more
            </h5>
            <div><a href="https://www.cnbc.com/2022/10/17/stocks-making-the-biggest-moves-midday-roblox-continental-resources-fox-corp-and-more.html" target="_" class="button">read more</a></div>
            </div>
        </div>
    </div> -->
    
    <!-- featurednews -->
    <div class="col-sm-6">
        <NewsDetails v-bind:newsdetail="newsdetail" v-on:read-now="readNew"/>
    </div>

    <!-- news -->
    <div class="grid">
        <div id="preview" v-bind:key='noticias.id' v-for="noticias in news.articles">
            <h3 style="font-family:serif">{{noticias.title}}</h3>
            <div class="centerimg">
                <img class="img-container" alt="" v-bind:src="noticias.urlToImage" />
            </div>
            <div v-if="(checked === true && alreadyread.includes(noticias.source.name))">
                <p>Already read</p>
            </div>
            <button class="btn-sm" style="font-size:12px; border-radius:6px" @click="newsDetail(noticias)">Details</button>
        </div>
    </div>

    <!-- forum -->
    <div class="forum">
        <div class="blog-card-wrap">
            <div class="container2">
                <h3>View More Recent Posts</h3>
                <div class="blog-cards">
                    <!-- <BlogCard: noticias="noticias" v-for="(noticias, noticias.id) in news.articles" v-bind:key='noticias.id' /> -->
                <!-- <h3>{{noticias.author}}</h3>
                <h5>{{noticias.title}}</h5> -->
                    <BlogCard :post="post" v-for="(post, index) in sampleBlogCards" :key="index" />
                </div> 
            </div>
        </div>
    </div>

</div>


</template>

<script>
import axios from 'axios';
import NewsDetails from './NewsDetails.vue';
import BlogCard from '@/components/BlogCard.vue';

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "home",
    components: {
        NewsDetails,
        BlogCard,
    },

    data() {
        return {
            news: [],
            newsdetail: Object,
            temporary: String,
            itemrandom: [],
            checked: Boolean,
            alreadyread : [],
            
            sampleBlogCards: [
                { blogTitle: "Blog Card #1", blogCoverPhoto: "stock-1", blogDate: "May 1, 2022"},
                { blogTitle: "Blog Card #2", blogCoverPhoto: "stock-2", blogDate: "May 1, 2022"},
                { blogTitle: "Blog Card #3", blogCoverPhoto: "stock-3", blogDate: "May 1, 2022"},
                { blogTitle: "Blog Card #4", blogCoverPhoto: "stock-4", blogDate: "May 1, 2022"},
            ],
        }
    },

    methods: {
        newsDetail(id) {
            this.newsdetail = id;
            
        },
        readNew(newsarray) {
            this.temporary= "";
            var itemrandom;
            for (itemrandom in this.news.articles) {
                this.temporary = this.news.articles[itemrandom].source.name;
                if (this.temporary === newsarray) {
                    this.checked=true;
                    this.alreadyread.push(this.temporary);
                    return this.alreadyread;
                }
            }
        }
    },

    created() {
        axios.get("https://newsapi.org/v2/everything?q=apple&from=2022-09-23&to=2022-09-23&sortBy=popularity&apiKey=18b82b1c1fe140c3ba3f998077bc3457")
        .then(res => this.news = res.data)
        .catch(err=> err);

    }

}

</script>


<style scoped>

.img-container {
  max-width: 100%;
  padding-right: 5px;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr))
}
.grid {
  display: grid;
  grid-gap: 100px;
  align-items: start;
  margin:0 auto; /* this will center the page */
  width:1000px; /*  use your width here */
  grid-template-columns: repeat(auto-fill, minmax(200px, 5fr));
}

.centerimg {
    /* width:  200px;
    height: 200px; */
}

.home {
    background-color: #f0ebf4;
}
.header {
    font-family: serif;
    font-size: 500%;
    font-weight: bold;
    text-align: center; 
}

.search {
    text-align: center;
    padding-bottom:20px;
}

.searchbar {
    text-align: center;
    border-radius: 5px;
    width: 300px;
    height: 30px
}

.mask{
  clip: rect(0px, 460px, 220px, 0px);
  border-radius: 4px;
}

img{
  width: 500px;
  padding: 10px 10px 0px 0px;
  float:right;
  }

.h1{
  margin: auto;
  text-align: left;
  margin-top: 240px;
  padding-left: 30px;
  
  font-family: 'Merriweather', serif;
  font-size: 24px;
}

.button {
    color: black;
    width: 90px;
    margin-left: 30px;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    text-decoration: underline;
}

.topnav {
  background-color: white;
  overflow: hidden;
}

/* Style the links inside the navigation bar */
.topnav a {
  float: left;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

/* Change the color of links on hover */
.topnav a:hover {
  background-color: #ddd;
  color: black;
}

/* Add a color to the active/current link */
.topnav a.active {
  background-color: white;
  color: black;
  text-decoration: underline;
}

</style>