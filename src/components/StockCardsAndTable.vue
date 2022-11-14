<template>
  <div>
    <div class="list-box">
      <li v-for="(stock, index) in stocksInfo.Stocks" v-bind:key="stock.symbol">
        <StockCard class="stock-item" v-bind:stock="stock" v-on:click="assignSelectedStockIndex(index)" />
      </li>
    </div>
    <button v-show="
      selectedStockIndex > -1 &&
      !isByVolume &&
      (stocksInfo.Stocks[selectedStockIndex].reddit_negative_mention !== 0 &&
        stocksInfo.Stocks[selectedStockIndex].reddit_positive_mention !== 0 && stocksInfo.Stocks[selectedStockIndex].twitter_negative_mention !== 0 &&
        stocksInfo.Stocks[selectedStockIndex].twitter_positive_mention !== 0)
    " @click="this.selectedStockIndex = -1">
      Close
    </button>
    <line-chart v-show="selectedStockIndex > -1" title="Activity over past week" style="margin-bottom: 40px;"
      :data="selectedStockIndex > -1 && {'Six Days Ago': stocksInfo.Stocks[selectedStockIndex].activity0, 'Five Days Ago': stocksInfo.Stocks[selectedStockIndex].activity1, 'Four Days Ago': stocksInfo.Stocks[selectedStockIndex].activity2, 'Three Days Ago': stocksInfo.Stocks[selectedStockIndex].activity3, 'Two Days Ago': stocksInfo.Stocks[selectedStockIndex].activity4, 'One Day Ago': stocksInfo.Stocks[selectedStockIndex].activity }"
      :download="true">
    </line-chart>
    <!-- <div style="margin-bottom: 5px">
      <pie-chart style="float: left; width: 50%; margin-bottom: 40px;" v-show="
        selectedStockIndex > -1 &&
        !isByVolume &&
        (stocksInfo.Stocks[selectedStockIndex].reddit_negative_mention !== 0 &&
          stocksInfo.Stocks[selectedStockIndex].reddit_positive_mention !== 0)
      " :data="
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
" :donut="true" title="Negative Mentions vs Positive Mentions (Reddit)"></pie-chart>
      <pie-chart style="float: left; width: 50%" v-show="
        selectedStockIndex > -1 &&
        !isByVolume &&
        (stocksInfo.Stocks[selectedStockIndex].twitter_negative_mention !== 0 &&
          stocksInfo.Stocks[selectedStockIndex].twitter_positive_mention !== 0)
      " :data="
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
" :donut="true" title="Negative Mentions vs Positive Mentions (Twitter)"></pie-chart>
    </div> -->
    <div class="table-box">
      <StockTable :isByVolume="isByVolume" :stocksInfo="stocksInfo" />
    </div>
  </div>
</template>

<script>
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
      // stocksInfo = await fetch(`http://127.0.0.1:5000/stocks`).then((res) =>
      //   res.json()
      // );
      // stocksInfo = await fetch(
      //   `http://timcheng112.pythonanywhere.com/stocks`
      // ).then((res) => res.json());
      stocksInfo = await fetch(
        `https://tradebros-api-umvju6u6lq-as.a.run.app/stocks`
      ).then((res) => res.json());
    } else {
      // stocksInfo = await fetch(`http://127.0.0.1:5000/social-sentiments`).then(
      //   (res) => res.json()
      // );
      // stocksInfo = await fetch(
      //   `http://timcheng112.pythonanywhere.com/social-sentiments`
      // ).then((res) => res.json());
      stocksInfo = await fetch(
        `https://tradebros-api-umvju6u6lq-as.a.run.app/social-sentiments`
      ).then((res) => res.json());
      // stocksInfo = await fetch(
      //   `http://127.0.0.1:8000/twitter-sentiments`
      // ).then((res) => res.json());
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
    dateToFormattedString(d) {         
      var yyyy = d.getFullYear().toString();         
      var mm = (d.getMonth()+1).toString(); // getMonth() is zero-based  
      var dd  = d.getDate().toString();           
      return yyyy + '-' + (mm[1]?mm:"0"+mm[0]) + '-' + (dd[1]?dd:"0"+dd[0]);
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
