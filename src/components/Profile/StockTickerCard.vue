<template>
  <div className="Stock-Card-Outer">
    <img className="Stock-Icon" v-bind:src="newLink" />
    <div
      className="notClicked"
      id="Ticker"
      style="cursor: pointer"
      @click="check(this)"
    >
      <h1>{{ ticker }}</h1>
    </div>
    <h3>{{ ticker }}</h3>
  </div>
</template>

<script>
export default {
  props: {
    ticker: String,
  },
  data() {
    return {
      newLink: this.getLink(),
    };
  },
  methods: {
    theFunction() {
      alert("You clicked me");
    },
    check(element) {
      console.log(element);
      if (event.target.className == "clicked") {
        event.target.className = "notClicked";
        this.removeStock(this.ticker);
        console.log(this.getStocks);
      } else {
        event.target.className = "clicked";
        this.addStock(this.ticker);
        console.log(this.getStocks);
      }
    },
    addStock(stock) {
      this.$store.dispatch("setStocksToDelete", stock);
    },
    removeStock(stock) {
      this.$store.dispatch("removeStocksToDelete", stock);
    },
    getLink() {
      let c =
        "https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/" +
        this.ticker +
        ".svg";
      return c;
    },
  },
  computed: {
    getStocks() {
      let a = this.$store.state.stocksToDelete;
      return a;
    },
  },
};
</script>

<style>
.Stock-Card-Outer {
  border-radius: 10px;
  border: 1px solid black;
  /* margin-right: 2; */
  margin-bottom: 1%;
  min-width: 230px;
  padding: 1rem;
}
.Stock-Icon {
  margin-top: 4%;
  width: 50px;
  height: 50px;
  float: left;
  margin-right: 20px;
}

.clicked {
  color: purple;
}

.Ticker {
  margin-top: 0px;
}
</style>
