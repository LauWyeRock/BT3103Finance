<template>
  <div class="tradingview-widget-container">
    <div id="tradingview_4894e"></div>
    <h1 class="stock-title">Stock Screener</h1>
    <div class="trending-stocks-box">
      <h2>Top Stocks</h2>
      <h3 class="subtitle">by market cap</h3>
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
          <th>Price</th>
          <th>Market Cap</th>
          <th>Recommendation</th>
        </tr>
        <tr v-for="stock in stocksInfo" v-bind:key="stock.data.symbol">
          <td>{{ stock.data.symbol }}</td>
          <td>{{ stock.data.shortName }}</td>
          <td>${{ stock.data.currentPrice }}</td>
          <td>${{ numberWithCommas(stock.data.marketCap) }}</td>
          <td>{{ stock.data.recommendationKey }}</td>
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
      stocks: [
        {
          symbol: "AAPL",
          name: "Apple Inc",
          price: "143.86",
          pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/976px-Apple_logo_black.svg.png?20220821121934",
          market: "2.312T",
        },
        {
          symbol: "MSFT",
          name: "Microsoft Corp.",
          price: "236.48",
          pic: "https://companieslogo.com/img/orig/MSFT-a203b22d.png?t=1633073277",
          market: "1.764T",
        },
        {
          symbol: "GOOG",
          name: "Alphabet Inc (Google) Class C",
          price: "100.29",
          pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png",
          market: "1.304T",
        },
        {
          symbol: "AMZN",
          name: "Amazon.com, Inc",
          price: "115.07",
          pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Amazon_icon.svg/2500px-Amazon_icon.svg.png",
          market: "1.172T",
        },
        {
          symbol: "AMZN",
          name: "Amazon.com, Inc",
          price: "115.07",
          pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Amazon_icon.svg/2500px-Amazon_icon.svg.png",
          market: "1.172T",
        },
      ],
      stocksInfo: [],
    };
  },

  mounted() {
    const symbols = [
      "AAPL",
      "MSFT",
      "GOOG",
      "AMZN",
      "TSLA",
      "BRK-B",
      "JNJ",
      "XOM",
      "V",
      "META",
    ];
    // let stocksInfo = [];

    for (let i = 0; i < symbols.length; i++) {
      const encodedParams = new URLSearchParams();
      encodedParams.append("symbol", symbols[i]);

      const options = {
        method: "POST",
        url: "https://yahoo-finance97.p.rapidapi.com/stock-info",
        headers: {
          "content-type": "application/x-www-form-urlencoded",
          "X-RapidAPI-Key":
            "9e5086a482msh9ed634f178722c5p160495jsna9d40bbc9f31",
          "X-RapidAPI-Host": "yahoo-finance97.p.rapidapi.com",
        },
        data: encodedParams,
      };

      axios
        .request(options)
        .then((response) => {
          this.stocksInfo.push(response.data);
          console.log(this.stocksInfo[0].data);
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  },

  methods: {
    numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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

@media only screen and (max-width: 768px) {
  .list-box {
    display: grid;
    grid-template-columns: auto auto;
  }
}
</style>
