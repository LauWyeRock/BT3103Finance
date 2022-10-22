<template>
  <div class="tradingview-widget-container">
    <div id="tradingview_4894e"></div>
    <h1 class="stock-title">Stock Screener</h1>
    <div class="trending-stocks-box">
      <h2>Top Stocks</h2>
      <h3 class="subtitle">by volume</h3>
      <div class="list-box">
        <li v-for="stock in stocksInfo" v-bind:key="stock.symbol">
          <StockCard class="stock-item" v-bind:stock="stock" />
        </li>
      </div>
    </div>
    <div>
      <table>
        <tr>
          <th>Asset</th>
          <th>Name</th>
          <th>Volume</th>
          <th>Price</th>
          <th>Market Cap</th>
          <th>Recommendation</th>
        </tr>
        <tr v-for="stock in stocksInfo" v-bind:key="stock.symbol">
          <td>{{ stock.symbol }}</td>
          <td>{{ stock.name }}</td>
          <td>{{ numberWithCommas(stock.volume) }}</td>
          <td>${{ stock.price }}</td>
          <td>${{ numberWithCommas(stock.market_cap) }}</td>
          <td>{{ recommendationConvert(stock.recommendation) }}</td>
        </tr>
      </table>
    </div>
    <div class="trending-stocks-box">
      <h2>Top Stocks</h2>
      <h3 class="subtitle">by social sentiment</h3>
      <div class="list-box">
        <li v-for="stock in stocksSentimentInfo" v-bind:key="stock.symbol">
          <StockCard class="stock-item" v-bind:stock="stock" />
        </li>
      </div>
    </div>
    <div>
      <table>
        <tr>
          <th>Asset</th>
          <th>Reddit Total Mentions</th>
          <th>Reddit Total Negative Score</th>
          <th>Reddit Total Positive Score</th>
          <th>Reddit Total Score</th>
          <th>Twitter Total Mentions</th>
          <th>Twitter Total Negative Score</th>
          <th>Twitter Total Positive Score</th>
          <th>Twitter Total Score</th>
        </tr>
        <tr v-for="stock in stocksSentimentInfo" v-bind:key="stock.symbol">
          <td>{{ stock.symbol }}</td>
          <td>{{ numberWithCommas(stock.reddit_total_mentions) }}</td>
          <td>{{ stock.reddit_total_negative_score }}</td>
          <td>{{ stock.reddit_total_positive_score }}</td>
          <td>{{ stock.reddit_total_score }}</td>
          <td>{{ numberWithCommas(stock.twitter_total_mentions) }}</td>
          <td>{{ stock.twitter_total_negative_score }}</td>
          <td>{{ stock.twitter_total_positive_score }}</td>
          <td>{{ stock.twitter_total_score }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import StockCard from "../components/StockCard.vue";
import axios from "axios";

export default {
  name: "HelloWorld",
  components: {
    StockCard,
  },

  data() {
    return {
      stocksInfo: [],
      stocksSentimentInfo: [],
    };
  },

  mounted() {
    axios.get(`http://127.0.0.1:5000/stocks`).then((response) => {
      this.stocksInfo = response.data.Stocks;
    });
    axios.get("http://127.0.0.1:5000/social-sentiments").then((response) => {
      this.stocksSentimentInfo = response.data.Stocks;
    });
  },

  methods: {
    numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    recommendationConvert(x) {
      let converted = "";
      let fields = x.split("_");
      for (let i = 0; i < fields.length; i++) {
        // console.log(fields);
        // converted += fields[i].charAt(0).toUppercase() + fields[i].slice(1);
        if (i !== fields.length - 1) {
          converted +=
            fields[i].charAt(0).toUpperCase() + fields[i].slice(1) + " ";
        } else {
          converted += fields[i].charAt(0).toUpperCase() + fields[i].slice(1);
        }
      }
      return converted;
    },
  },
};
</script>

<style scoped>
.stock-title {
  text-align: center;
  padding-top: 2vh;
}

.subtitle {
  opacity: 50%;
}

.trending-stocks-box {
  width: 90%;
  margin: auto;
  flex: auto;
  border-radius: 12px;
  padding: 1vh;
}

.list-box {
  display: grid;
  grid-template-columns: auto auto auto auto auto;
}

.stock-item {
  margin-right: 1vw;
}

li {
  list-style-type: none;
}

table {
  border-collapse: collapse;
  width: 90%;
  margin: auto;
  margin-bottom: 2vh;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 1vh;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

@media only screen and (max-width: 812px) {
  .list-box {
    display: grid;
    grid-template-columns: auto auto;
  }
}
</style>
