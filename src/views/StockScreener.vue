<template>
  <div class="tradingview-widget-container">
    <div id="tradingview_4894e"></div>
    <h1 class="stock-title">Stock Screener</h1>
    <div class="trending-stocks-box">
      <h2>Top Stocks</h2>
      <h3>By Market Cap</h3>
      <div class="list-box">
        <li v-for="stock in stocks" v-bind:key="stock.symbol">
          <StockCard class="stock-item" v-bind:stock="stock" />
        </li>
      </div>
    </div>
    <!-- <p>{{ getStock }}</p>
    <div class="tradingview-widget-copyright">
      <div class="Hello">
        <Chart
          :options="{
            autosize: false,
            theme: 'dark',
            symbol: getStock,
            style: 1,
            allow_symbol_change: false,
          }"
        />
        <TechnicalAnalysis :options="{ symbol: getStock }" />
      </div>
    </div> -->
  </div>
</template>

<script>
//import {src} from "https://s3.tradingview.com/tv.js"
// import { Chart, TechnicalAnalysis } from "vue-tradingview-widgets";
import StockCard from "../components/StockCard.vue";

export default {
  name: "HelloWorld",
  components: {
    StockCard,
  },
  //   mounted() {
  //     if (localStorage.getItem("reloaded")) {
  //       // The page was just reloaded. Clear the value from local storage
  //       // so that it will reload the next time this page is visited.
  //       localStorage.removeItem("reloaded");
  //     } else {
  //       // Set a flag so that we know not to reload the page twice.
  //       localStorage.setItem("reloaded", "1");
  //       localStorage.setItem("stock", this.$store.state.exchangeTicker);
  //       location.reload();
  //     }
  //   },
  //   computed: {
  //     getStock() {
  //       return localStorage.getItem("stock");
  //     },
  //   },
  data() {
    return {
      stocks: [
        {
          symbol: "AAPL",
          price: "2.312T",
          pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/976px-Apple_logo_black.svg.png?20220821121934",
        },
        {
          symbol: "MSFT",
          price: "1.764T",
          pic: "https://companieslogo.com/img/orig/MSFT-a203b22d.png?t=1633073277",
        },
        {
          symbol: "GOOG",
          price: "1.304T",
          pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png",
        },
        {
          symbol: "AMZN",
          price: "1.172T",
          pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Amazon_icon.svg/2500px-Amazon_icon.svg.png",
        },
      ],
    };
  },
};
</script>

<style scoped>
.stock-title {
  text-align: center;
}

.trending-stocks-box {
  width: 70%;
  margin: auto;
  flex: auto;
  border-radius: 12px;
  padding: 10px;
}

.list-box {
  display: grid;
  grid-template-columns: auto auto auto auto;
}

.stock-item {
  margin-right: 1vh;
}

li {
  list-style-type: none;
}

@media only screen and (max-width: 768px) {
  .list-box {
    display: grid;
    grid-template-columns: auto auto;
  }
}
</style>
