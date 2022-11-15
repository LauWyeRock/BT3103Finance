<template>
  <div class="main-box">
    <h1 class="stock-title">Stock Screener</h1>
    <div class="trending-stocks-box">
      <h2 class="title">Trending Stocks</h2>
      <h3 class="subtitle">By Volume</h3>
      <Suspense>
        <template #default>
          <StockCardsAndTable :isByVolume="true" />
        </template>
        <template #fallback>
          <StockCardsAndTableSkeleton :isByVolume="true" />
        </template>
      </Suspense>
    </div>
    <div class="trending-stocks-box">
      <h2 class="title">Trending Stocks</h2>
      <h3 class="subtitle">By Social Sentiments</h3>
      <Suspense>
        <template #default>
          <StockCardsAndTable :isByVolume="false" />
        </template>
        <template #fallback>
          <StockCardsAndTableSkeleton :isByVolume="false" />
        </template>
      </Suspense>
    </div>
  </div>
</template>

<script>
import StockCardsAndTableSkeleton from "@/components/StockCardsAndTableSkeleton.vue";
import StockCardsAndTable from "../components/StockCardsAndTable.vue";

export default {
  name: "StockScreener",
  components: {
    StockCardsAndTable,
    StockCardsAndTableSkeleton,
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

.main-box {
  background-image: repeating-linear-gradient(
    rgba(240, 235, 244, 1), 
    rgba(161, 195, 209, 0.75), 
    rgba(241, 114, 161, 0.5)
    );
}
.stock-title {
  margin: auto;
  text-align: center;
  padding-top: 2vh;
  padding-bottom: 4vh;
  font-family: serif;
  font-size: 400%;
  font-weight: bold;
  /* padding-top: 30px; */
  letter-spacing: -1px;
  width: 25%;
  border-radius: 20px;
}

.title {
  font-family: serif;
  letter-spacing: -1px;
  font-weight: bold;
  margin-left: 1vw;
  font-size: 250%;
}

.subtitle {
  font-family: serif;
  letter-spacing: -1px;
  font-weight: bold;
  margin-left: 1vw;
  font-size: 150%;
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
