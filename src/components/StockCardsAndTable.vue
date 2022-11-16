<template>
  <div>
    <div class="list-box">
      <li v-for="(stock, index) in stocksInfo.Stocks" v-bind:key="stock.symbol">
        <StockCard @selectedStockIndex="assignSelectedStockIndex(index)" class="stock-item" v-bind:stock="stock"
          :index="index" />
      </li>
    </div>
    <div class="line-chart-box" v-if="isByVolume" v-show="selectedStockIndex > -1 && isByVolume">
      <button v-show="
        selectedStockIndex > -1 &&
        isByVolume
      " @click="this.selectedStockIndex = -1">
        Close
      </button>
      <line-chart v-show="selectedStockIndex > -1 && stocksInfo.Stocks[selectedStockIndex].volume"
        :title="'Volume changes over the past few business days'"
        :data="selectedStockIndex > -1 && { [this.stocksInfo.Stocks[selectedStockIndex].historical.date0]: stocksInfo.Stocks[selectedStockIndex].historical.volume0, [this.stocksInfo.Stocks[selectedStockIndex].historical.date1]: stocksInfo.Stocks[selectedStockIndex].historical.volume1, [this.stocksInfo.Stocks[selectedStockIndex].historical.date2]: stocksInfo.Stocks[selectedStockIndex].historical.volume2, [this.stocksInfo.Stocks[selectedStockIndex].historical.date3]: stocksInfo.Stocks[selectedStockIndex].historical.volume3, [this.stocksInfo.Stocks[selectedStockIndex].historical.date4]: stocksInfo.Stocks[selectedStockIndex].historical.volume4, [this.stocksInfo.Stocks[selectedStockIndex].historical.date5]: stocksInfo.Stocks[selectedStockIndex].historical.volume5, 'Most Recent': stocksInfo.Stocks[selectedStockIndex].volume }"
        :download="true" thousands="," :curve="true">
      </line-chart>
    </div>
    <div v-else class="line-chart-box" v-show="selectedStockIndex > -1 && !isByVolume">
      <button v-show="
        selectedStockIndex > -1 &&
        !isByVolume
      " @click="this.selectedStockIndex = -1">
        Close
      </button>
      <line-chart v-show="selectedStockIndex > -1 && stocksInfo.Stocks[selectedStockIndex].activity"
        :title="'Activity over the past week'"
        :data="selectedStockIndex > -1 && { 'Six Days Ago': stocksInfo.Stocks[selectedStockIndex].activity0, 'Five Days Ago': stocksInfo.Stocks[selectedStockIndex].activity1, 'Four Days Ago': stocksInfo.Stocks[selectedStockIndex].activity2, 'Three Days Ago': stocksInfo.Stocks[selectedStockIndex].activity3, 'Two Days Ago': stocksInfo.Stocks[selectedStockIndex].activity4, 'One Day Ago': stocksInfo.Stocks[selectedStockIndex].activity }"
        :download="true" thousands="," :curve="true">
      </line-chart>
    </div>
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
      stocksInfo = await fetch(
        `https://tradebros-api-umvju6u6lq-as.a.run.app/stocks`
      ).then((res) => res.json());
    } else {
      stocksInfo = await fetch(
        `https://tradebros-api-umvju6u6lq-as.a.run.app/social-sentiments`
      ).then((res) => res.json());
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
      var mm = (d.getMonth() + 1).toString(); // getMonth() is zero-based  
      var dd = d.getDate().toString();
      return yyyy + '-' + (mm[1] ? mm : "0" + mm[0]) + '-' + (dd[1] ? dd : "0" + dd[0]);
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
  margin-left: 1vw;
}

.table-box {
  margin-top: 2vh;
  margin-bottom: 1vh;
  margin-left: 1vw;
  margin-right: 1vw;
}

.line-chart-box {
  margin-left: 1vw;
  margin-right: 1vw;
  margin-top: 2vh;
  margin-bottom: 1vh;
  border-radius: 20px;
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

@media only screen and (max-width: 1371px) {
  .list-box {
    display: grid;
    grid-template-columns: auto auto auto auto;
  }
}

@media only screen and (max-width: 1245px) {
  .list-box {
    display: grid;
    grid-template-columns: auto auto auto;
  }
}

@media only screen and (max-width: 812px) {
  .list-box {
    display: grid;
    grid-template-columns: auto auto;
  }
}

@media only screen and (max-width: 504px) {
  .list-box {
    display: grid;
    grid-template-columns: auto;
  }
}
</style>
