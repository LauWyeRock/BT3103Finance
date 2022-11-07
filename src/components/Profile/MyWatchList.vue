<template>
  <div className="Watch-List-Outer">
    <h1 className="Watch-List-Title">Favourite Stocks/Cryptocurrencies</h1>
    <div className="Watch-List-Content">
      <StockTickerCard />
      <StockTickerCard />
      <StockTickerCard />
      <StockTickerCard />
      <StockTickerCard />
      <StockTickerCard />
      <StockTickerCard />
      <StockTickerCard />
    </div>
    <div className="Long-Card-Buttons">
      <button>Add Stocks</button>
      <button>Remove Stocks</button>
    </div>
  </div>
</template>

<script>
import StockTickerCard from "./StockTickerCard.vue";
export default { 
  components: { StockTickerCard } 
};
</script>

<style>
.Watch-List-Outer {
  border-radius: 10px;
  border: 1px solid black;
  margin-right: 2.5%;
  margin-left: 2.5%;
  margin-bottom: 10px;
  width: 95%;
  padding: 1%;
}

.Watch-List-Title {
  margin-left: 5%;
}

.Long-Card-Buttons {
  margin-left: 5%;
}

.Watch-List-Content {
  margin-top: 2%;
  margin-left: 5%;
  margin-right: 5%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
