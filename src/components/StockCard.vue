<template>
  <div class="stock-card-box-container">
    <a class="stock-card-box" :href="'/stocks/' + stock.symbol">
      <div class="stock-logo-box">
        <img
          :src="checkForImage(result ? stock.logo_url : 'data:image/png;base64,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')"
          alt="stock_logo" class="stock-logo" />
      </div>
      <div class="stock-info">
        <h2 style="font-family: serif;letter-spacing: -1px; font-weight: bold;">{{ stock.symbol }}</h2>
        <h3 style="font-weight: 100">
          {{ stock.volume && numberWithCommas(stock.volume) + "\nshares traded" }}
        </h3>
        <h3 style="font-weight: 100">
          {{
              stock.activity && numberWithCommas(stock.activity) + "\nlikes and shares"
          }}
        </h3>

      </div>
    </a>
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

  async setup(props) {
    function isImgUrl(url) {
      const img = new Image();
      img.src = url;
      return new Promise((resolve) => {
        img.onerror = () => resolve(false);
        img.onload = () => resolve(true);
      });
    }
    const result = await isImgUrl(props.stock.logo_url).then((response) => response);
    return { result }
  },

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
    },
    isSVGFormatImage(url) {
      return url.endsWith(".svg");
    },
    checkForImage(url) {
      if (url === "") {
        return 'data:image/png;base64,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'
      }
      var img = new Image();
      img.src = url;
      // const result = await this.isImgUrl(url).then(response => response.data)
      // console.log(result)
      if (img.height !== "100%") {
        return url
      } else {
        if (this.isSVGFormatImage(url)) {
          return url
        } else {
          return 'data:image/png;base64,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'
        }
      }
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
  height: 14rem;
  margin-top: 2vh;
}

.stock-card-box {
  display: flex;
  flex-direction: row;
  height: 6rem;
  border: 1px #dddddd;
  padding: 1vh;
  text-decoration-line: none;
  color: #000000;
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
