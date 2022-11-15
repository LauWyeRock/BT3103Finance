<template>
  <div class="stock-card-box-container">
    <div class="stock-card-box" v-on:click="navigateToStock(stock.symbol)">
      <div class="stock-logo-box">
        <img :src="stock.logo_url" alt="stock_logo" class="stock-logo" />
      </div>
      <div class="stock-info">
        <h2>{{ stock.symbol }}</h2>
        <h3>
          {{ stock.volume && numberWithCommas(stock.volume) + "\nshares traded" }}
        </h3>
        <h3>
          {{
              stock.activity && numberWithCommas(stock.activity) + "\nlikes and shares"
          }}
        </h3>
        <h3>
          {{
              stock.twitter_total_mentions || stock.twitter_total_mentions >= 0
                ? numberWithCommas(stock.twitter_total_mentions) + " twitter"
                : ""
          }}
        </h3>

      </div>
    </div>
    <button v-on:click="assignSelectedStockIndex()" style="width: 100%; border-radius: 12px">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
        width="24">
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  name: "StockCard",
  props: ["stock"],
  components: {},

  methods: {
    numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    assignSelectedStockIndex() {
      // console.log(x);
      this.$emit("selectedStockIndex")
      // console.log(this.selectedStockIndex);
    },
    navigateToStock(symbol) {
      this.$store.commit("updateExchangeTicker", symbol);
      this.$router.push("/stocks/" + symbol);
    }
  },
};
</script>

<style>
.stock-card-box-container {
  border: 1px solid #dddddd;
  padding: 1vh;
  border-radius: 24px;
  background-color: #ffffff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  height: 26vh;
  margin-top: 2vh;
}

.stock-card-box {
  display: flex;
  flex-direction: row;
  height: 12vh;
  /* margin-top: 2vh; */
  border: 1px #dddddd;
  padding: 1vh;
  /* border-radius: 12px; */
  /* background-color: #ffffff; */
  /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); */
}

.stock-card-box:hover {
  background-color: #dddddd;
  opacity: 60%;
  cursor: pointer;
}

.stock-logo-box {
  padding: 2vh;
  margin-right: 1vw;
}

.stock-logo {
  /* height: 40px; */
  /* height: 5vh; */
  /* width: 5vh; */
  height: 3rem;
  width: 3rem;
  object-fit: contain;
}

.stock-info {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
</style>
