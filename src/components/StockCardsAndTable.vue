<template>
  <div>
    <div class="list-box">
      <li v-for="(stock, index) in stocksInfo.Stocks" v-bind:key="stock.symbol">
        <StockCard
          class="stock-item"
          v-bind:stock="stock"
          v-on:click="assignSelectedStockIndex(index)"
        />
      </li>
    </div>
    <div class="table-box">
      <StockTable :isByVolume="isByVolume" :stocksInfo="stocksInfo" />
    </div>
    <button
      v-show="
        selectedStockIndex > -1 &&
        !isByVolume &&
        stocksInfo.Stocks[selectedStockIndex].reddit_negative_mention > 0 &&
        stocksInfo.Stocks[selectedStockIndex].reddit_positive_mention > 0
      "
      @click="this.selectedStockIndex = -1"
    >
      Close
    </button>
    <div style="margin-bottom: 5px">
      <pie-chart
        style="float: left; width: 50%"
        v-show="
          selectedStockIndex > -1 &&
          !isByVolume &&
          stocksInfo.Stocks[selectedStockIndex].reddit_negative_mention > 0 &&
          stocksInfo.Stocks[selectedStockIndex].reddit_positive_mention > 0
        "
        :data="
          selectedStockIndex > -1 && [
            [
              'Negative',
              stocksInfo.Stocks[selectedStockIndex].reddit_negative_mention,
            ],
            [
              'Positive',
              stocksInfo.Stocks[selectedStockIndex].reddit_positive_mention,
            ],
          ]
        "
        :donut="true"
        title="Negative Mentions vs Positive Mentions (Reddit)"
      ></pie-chart>
      <pie-chart
        style="float: left; width: 50%"
        v-show="
          selectedStockIndex > -1 &&
          !isByVolume &&
          stocksInfo.Stocks[selectedStockIndex].twitter_negative_mention > 0 &&
          stocksInfo.Stocks[selectedStockIndex].twitter_positive_mention > 0
        "
        :data="
          selectedStockIndex > -1 && [
            [
              'Negative',
              stocksInfo.Stocks[selectedStockIndex].twitter_negative_mention,
            ],
            [
              'Positive',
              stocksInfo.Stocks[selectedStockIndex].twitter_positive_mention,
            ],
          ]
        "
        :donut="true"
        title="Negative Mentions vs Positive Mentions (Twitter)"
      ></pie-chart>
    </div>
  </div>
</template>

<script>
//STOCK API KEY = YYDJ5HRF9K8DOGJE
import StockCard from "../components/StockCard.vue";
import StockTable from "../components/StockTable.vue";

export default {
  components: { StockCard, StockTable },
  props: ["isByVolume"],
  data() {
    return {
      selectedStockIndex: -1,
    };
  },

  async setup(props) {
    let stocksInfo;
    if (props.isByVolume) {
      stocksInfo = await fetch(`http://127.0.0.1:5000/stocks`).then((res) =>
        res.json()
      );
    } else {
      stocksInfo = await fetch(`http://127.0.0.1:5000/social-sentiments`).then(
        (res) => res.json()
      );
    }
    return { stocksInfo };
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
    assignSelectedStockIndex(x) {
      console.log(x);
      this.selectedStockIndex = x;
      console.log(this.selectedStockIndex);
    },
  },
};
</script>

<style>
.list-box {
  display: grid;
  grid-template-columns: auto auto auto auto auto;
}

li {
  list-style-type: none;
}

.piechart-box {
  margin-bottom: 5px;
}

.stock-item {
  margin-right: 1vw;
  cursor: pointer;
}

.table-box {
  margin-top: 1vh;
  margin-bottom: 1vh;
}

@media only screen and (max-width: 812px) {
  .list-box {
    display: grid;
    grid-template-columns: auto auto;
  }
}
</style>
