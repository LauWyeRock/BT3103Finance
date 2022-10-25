<template>
  <div class="list-box">
    <li v-for="stock in stocksInfo.Stocks" v-bind:key="stock.symbol">
      <StockCard class="stock-item" v-bind:stock="stock" />
    </li>
  </div>
  <div class="table-box">
    <StockTable :isByVolume="isByVolume" :stocksInfo="stocksInfo" />
  </div>
</template>

<script>
import StockCard from "../components/StockCard.vue";
import StockTable from "../components/StockTable.vue";

export default {
  components: { StockCard, StockTable },
  props: ["isByVolume"],

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
    console.log(stocksInfo);
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

.stock-item {
  margin-right: 1vw;
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
