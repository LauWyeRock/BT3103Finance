<template>
  <div class="tradingview-widget-container">
    <div id="tradingview_4894e"></div>
  <div>
    <h1 class="stock-title">Stock Screener</h1>
    <div class="trending-stocks-box">
      <h2>Top Stocks</h2>
      <h3 class="subtitle">by volume</h3>
      <Suspense>
        <template #default>
          <StockCardsAndTable :isByVolume="true" />
        </template>
        <template #fallback>Loading...</template>
      </Suspense>
    </div>
    <div class="trending-stocks-box">
      <h2>Top Stocks</h2>
      <h3 class="subtitle">by social sentiment</h3>
      <Suspense>
        <template #default>
          <StockCardsAndTable :isByVolume="false" />
        </template>
        <template #fallback>Loading...</template>
      </Suspense>
    </div>
    <!-- <div>
      <column-chart
        :data="[
          ['Sun', 32],
          ['Mon', 46],
          ['Tue', 28],
        ]"
      ></column-chart>
    </div> -->
  </div>
</template>

<script>
import StockCardsAndTable from "../components/StockCardsAndTable.vue";

export default {
  name: "StockScreener",
  components: {
    StockCardsAndTable,
  },

  data() {
    return {
      stocksInfo: [],
      stocksSentimentInfo: [],
    };
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
</style>
