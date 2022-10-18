<!-- eslint-disable vue/multi-word-component-names -->
<template>
<div class="home">

    <!-- header + search bar -->
    <div class="header">news</div>
    <div class="search">
        <input type="text" class="searchbar" placeholder="Search for news..."/>
    </div>

    <!-- featurednews -->
    <div class="container">
        <div class="square">
            <img src="https://image.cnbcfm.com/api/v1/image/106968299-1635740326985-gettyimages-1235736525-RAFAPRESS_06102021-1269.jpeg?v=1666027145&w=630&h=354&ffmt=webp" class="mask">
            <div class="h1" style="font-size: 30px; font-weight:bold">Stocks making the biggest moves midday: Roblox, Continental Resources, Fox Corp and more </div>
            <div><a href="https://www.cnbc.com/2022/10/17/stocks-making-the-biggest-moves-midday-roblox-continental-resources-fox-corp-and-more.html" target="_" class="button">read more</a></div>
        </div>  
    </div>

    <!-- navbar -->
    <h1 style="font-family:serif; font-size: 40px; padding-bottom: 10px;">explore news</h1>
    <div class="topnav">
        <a class="active" href="#all">all</a>
        <a href="#marketnews">market news</a>
        <a href="#companynews">company news</a>
        <a href="#cryptocurrencynews">cryptocurrency news</a>
    </div>

    <div class="row mt-5">
        <div class="col-md-7">
            <NewsDetails v-bind:newsdetail="newsdetail" v-on:read-now="readNew"/>
        </div>
        <div class="col-md-5">
            <div v-bind:key='noticias.id' v-for="noticias in news.articles">
            <h3>{{noticias.author}}</h3>
            <h5>{{noticias.title}}</h5>
            <div v-if="(checked === true && alreadyread.includes(noticias.source.name))">
                <p>Already read</p>
            </div>

            <button class="btn-sm btn-primary mb-3" @click="newsDetail(noticias)">Details</button>
            </div>
        </div>
    </div>

</div>


</template>

<script>
import axios from 'axios';
import NewsDetails from './NewsDetails.vue';

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "home",
    components: {
        NewsDetails
    },
    data() {
        return {
            news: [],
            newsdetail: Object,
            temporary: String,
            itemrandom: [],
            checked: Boolean,
            alreadyread : [],
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

.home {
    background-color: #f0ebf4;
}
.header {
    font-family: serif;
    font-size: 400%;
    font-weight: bold;
    text-align: center; 
}

.search {
    text-align: center;
}

.searchbar {
    text-align: center;
    border-radius: 5px;
    width: 300px;
    height: 30px
}

.container{
  display: flex;
  justify-content: center;
  padding: 80px;
}

.square:hover {
    -webkit-transform: translate(20px, -10px);
    -ms-transform: translate(10px, -10px);
    transform: translate(10px, -10px);
    -webkit-box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
     }


.square{
  width: 460px;
  height: 430px;
  background: white;
  border-radius: 4px;
  box-shadow: 0px 20px 50px #D9DBDF;
  -webkit-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease; 
}

.mask{
  clip: rect(0px, 460px, 220px, 0px);
  border-radius: 4px;
  position: absolute;
}

img{
  width: 460px;
  padding: 15px;
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