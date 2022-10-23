<template>

    <div class="container">

        <!-- navbar -->
        <div class="topnav">
            <a class="active" href="">all</a>
            <a href="#marketnews" @click="fetchMarketNews">market news</a>
            <a href="#companynews" @click="fetchCompanyNews">company news</a>
            <a href="#cryptonews" @click="fetchCryptoNews">cryptocurrency news</a>
        </div>

        <!-- header + search bar -->
        <div class="header">News</div>

        <div class="search">
            <form @submit.prevent="fetchSearchNews">
                <input type="text" class="searchbar" placeholder="Search for news..." v-model="searchword"/>
            </form>
            <div class="search-icons">
                <i v-if="!isBusy" class="fas fa-search" @click="fetchSearchNews"></i>
                <i v-else class="fas fa-spinner fa-spin"></i>
                <i class="fas fa-times" @click="fetchTopNews"></i>
            </div>
        </div>

        <!-- featurednews -->
        <!-- <div class="featurednewscontainer">
            <div class="square">
                <div class="col-sm-6">
                <img class="img" src="https://image.cnbcfm.com/api/v1/image/106968299-1635740326985-gettyimages-1235736525-RAFAPRESS_06102021-1269.jpeg?v=1666027145&w=630&h=354&ffmt=webp">
                <h5 class="card-title">Stocks making the biggest moves midday:
                    <br class="card-text">Roblox, Continental Resources, Fox Corp and more
                </h5>
                <div><a href="https://www.cnbc.com/2022/10/17/stocks-making-the-biggest-moves-midday-roblox-continental-resources-fox-corp-and-more.html" target="_" class="button">read more</a></div>
                </div>
            </div>
        </div>   -->
        
        <!-- news list -->
        <div class="result-list">
            <article v-for="(article, index) in articles" :key="index">
                <header>
                    <img v-if="article.urlToImage" :src="article.urlToImage" alt="">
                    <!-- <i v-else class="fas fa-image"></i> -->
                </header>
                    <div class="newstitle">{{article.title}}</div>
                    <br>
                    <button class="readmorebtn" @click="navTo(article.url)">read more</button>

                <!-- <footer>
                    <i class="fas fa-chevron-right"></i>
                </footer> -->
            </article>
        </div>

        <div ref="infinitescrolltrigger" id="scroll-trigger">
            <!-- <i v-if="showloader" class="fas fa-spinner fa-spin"></i> -->
        </div>

    </div>
  </template>
  
  <script>

    export default {
      props: [
        'apiKey'
      ],
      data: () => {
        return {
          apiUrl: '',
          isBusy: false,
          showloader: false,
          currentPage: 1,
          totalResults: 0,
          maxPerPage: 20,
          searchword: '',
          articles: [],
          country: 'sg'
        }
      },
      computed: {
        pageCount() {
          return Math.ceil(this.totalResults/this.maxPerPage);
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

        
        fetchTopNews() {
            this.apiUrl = 'https://newsapi.org/v2/everything?q=finance' +
                          '&pageSize=' + this.maxPerPage +
                          '&apiKey=' + '69b97fa381bc41e8a2382503e30dfdeb';
            this.isBusy = true;
            this.searchword = '';
          
            this.resetData();
            this.fetchData();
        },

        fetchMarketNews() {
            this.apiUrl = 'https://newsapi.org/v2/everything?q=stockmarket' +
                        '&pageSize=' + this.maxPerPage +
                        '&apiKey=' + '69b97fa381bc41e8a2382503e30dfdeb';
            this.isBusy = true;
            this.resetData();
            this.fetchData();

        },

        fetchCompanyNews() {
            this.apiUrl = 'https://newsapi.org/v2/everything?q=company' +
                        '&pageSize=' + this.maxPerPage +
                        '&apiKey=' + '69b97fa381bc41e8a2382503e30dfdeb';
            this.isBusy = true;
            this.resetData();
            this.fetchData();

        },

        fetchCryptoNews() {
            this.apiUrl = 'https://newsapi.org/v2/everything?q=crypto' +
                        '&pageSize=' + this.maxPerPage +
                        '&apiKey=' + '69b97fa381bc41e8a2382503e30dfdeb';
            this.isBusy = true;
            this.resetData();
            this.fetchData();

        },


        fetchSearchNews() {
            if(this.searchword !== '') {
                this.apiUrl = 'https://newsapi.org/v2/everything?q=' + this.searchword +
                            '&pageSize=' + this.maxPerPage +
                            '&apiKey=' + '69b97fa381bc41e8a2382503e30dfdeb';
                this.isBusy = true;
                this.resetData();
                this.fetchData();
            }
            else {
                this.fetchTopNews();
            }
        },

        fetchData() {
          let req  = new Request(this.apiUrl + '&page=' + this.currentPage);
          fetch(req)
            .then((resp) => resp.json())
            .then((data) => {
              this.totalResults = data.totalResults;
              data.articles.forEach(element => {
                this.articles.push(element);
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
          observer.observe(this.$refs.infinitescrolltrigger);
        }
      },
      created() {
        this.fetchTopNews();
      },
      mounted() {
        this.scrollTrigger();
      }
    }

  </script>


  
  <style lang="scss" scoped>

    .container {
        position: relative;
        width: 100%;
        background-color: #f0ebf4;
    }

    // .newstitle {
    //     height: 100px;
    // }

    .header {
        font-family: serif;
        font-size: 500%;
        font-weight: bold;
        text-align: center; 
        padding-top:30px;
        padding-bottom:10px;
    }
    .search {
        text-align: center;
        padding-bottom:20px;
    }
    .searchbar {
        text-align: center;
        border-radius: 5px;
        width: 300px;
        height: 40px;
        input {
            padding: 0 100px 0 20px;
            margin: 0;
            width: calc(100% - 120px);
            height: 60px;
            border: none;
            font-size: 2rem;
            color: #fff;
            background-color: #222;
            &:focus {
                outline: none;
            }
        }
        .search-icons {
            position: absolute;
            right: 20px;
            top: 20px;
            color: #fff;
            i {
                margin-left: 15px;
                cursor: pointer;
            }
        }
    }

    .topnav {
        background-color: #ebdcfc;
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
        //   background-color: white;
        color: black;
        text-decoration: underline;
    }

    // .featurednewscontainer{
    //     display: flex;
    //     justify-content: center;
    //     padding: 80px;
    // }
    // .square{
    //     width: 1500px;
    //     height: 310px;
    //     background: white;
    //     border-radius: 4px;
    //     box-shadow: 0px 20px 50px #D9DBDF;
    //     -webkit-transition: all 0.3s ease;
    //     -o-transition: all 0.3s ease;
    //     transition: all 0.3s ease; 
    // }

    .result-list {
        padding-top: 60px;
        display: grid;
        grid-gap: 100px;
        align-items: start;
        margin:0 auto; /* this will center the page */
        width:1000px; /*  use your width here */
        grid-template-columns: repeat(auto-fill, minmax(200px, 5fr));
    }

    article {
        display: grid;
        grid-template-rows: 200px;
        overflow: hidden;
        header {
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            img {
                float: left;
                width:  300px;
                height: 200px;
                object-fit: cover;
                padding-bottom:30px;
            }
        }
    }

    .newstitle {
        font-family:Arial;
        font-weight:bold;
        font-size:22px;
        text-align:center;
    }

    .readmorebtn {
        margin-left:0%;
        font-size: 13px;
        font-weight:bold;
        border-radius:4px;
        background-color: white;
        color: black;
        cursor: pointer;
    }

    .readmorebtn:hover {
        background-color: lightgrey;
    }

    
        // footer {
        //     display: flex;
        //     justify-content: center;
        //     align-items: center;
        //     font-size: 1.6rem;
        //     color: #888;
        // }

    #scroll-trigger {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100px;
        font-size: 1.6rem;
    }

  </style>