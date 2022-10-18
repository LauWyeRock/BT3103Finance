<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="container">
        <div class="search-bar">
            <form @submit.prevent = "fetchSearchNews">
                <input type = "text" placeholder="search for latest news" v-model="searchword"/>
            </form>
            <div class="search-icons">
                <i v-if="isBusy" class = "fas fa-spinner fa-spin"></i>
                <i class="fas fa-times" @click="fetchTopNews"></i>
            </div>
        </div>

        <div class="result-list">
            <article v-for="(article, index) in articles" :key ='index' @click="navTo(article.url)">
                <header>
                    <img v-if = "article.urlToImage" :src="article.urlToImage" alt=""/>
                    <i v-else class="fas fa-image"></i>
                </header>
                <section v-html="article.title"></section>
                <footer>
                    <i class="fas fa-chevron-right"></i>
                </footer>
            </article>
        </div>

        <div class="infiniteScrollTrigger" id="scroll-trigger">
            <i v-if="showloader" class="fas fa-spinner fa-spin"></i>
        </div>
    </div>
</template>

<script>
export default {
    props:[
        'apiKey'
    ],
    data:()=> {
        return {
            apiUrl: '',
            isBusy: false,
            showloader: false,
            currentPage: 1,
            totalResults:0,
            maxPerPage:20,
            searchword:'',
            articles:[],
            country:'us'
        }
    },
    computed: {
        pageCount() {
            return Math.ceil(this.totalResults/this.maxPerPage)
        }
    },
    methods: {
        navTo(url) {
            window.open(url);
        },
        resetData() {
            this.currentPage = 1;
            this.articles = [];
        },
        fetchSearchNews() {
            if(this.searchword!== 'https://newsapi.org/v2/eveyrthing?q=') {
                this.apiUrl= ''+this.searchword + '&pageSize=' + this.maxPerPage + '&apiKey' + this.apiKey;
                this.isBusy= true;
                this.resetData();
                this.fetchData();
            } else {
                this.fetchTopNews();
            }
        },
        fetchTopNews() {
            this.apiUrl = 'https://newsapi.org/v2/top-headlines?country=' + this.country + '&pageSize=' + this.maxPerPage + 'apiKey=' + this.apiKey;
            this.isBusy = true;
            this.searchword = '';
            this.resetData();
            this.fetchData();
        },
        fetchData() {
            let req = new Request(this.apiUrl + '&page=' + this.currentPage);
            fetch(req)
            .then((resp) => resp.json())
            .then((data) => {
                this.totalResults = data/this.totalResults;
                data.articles.forEach(element => {
                    this.article.push(element);
                });
                this.isBusy = false;
                this.showloader = false;
            })
            .catch((error) => {
                console.log(error);
            })
        },
        scrollTrigger() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if(entry.intersectionRatio > 0 && this.currentPage < this.pageCount) {
                        this.showloader = true;
                        this.currentPage += 1;
                        this.fetchData();
                    }
                });
            });
            observer.observe(this.$refs.infiniteScrollTrigger);
        },

        created() {
            this.fetchTopNews();
        },
        mounted() {
            this.scrolLTrigger();
        }
    }
}
</script>

<style>

</style>
