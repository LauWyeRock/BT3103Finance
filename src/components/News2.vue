<!-- eslint-disable vue/multi-word-component-names -->
<template>
 <div class="home">
    <div class="container">
        <div class="row mt-5">
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
            <div class="col-md-7">
                <NewsDetails v-bind:newsdetail="newsdetail" v-on:read-now="readNew"/>
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