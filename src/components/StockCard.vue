<template>
  <div class="stock-card-box">
    <div class="stock-logo-box">
      <img :src="stock.logo_url" alt="stock_logo" class="stock-logo" />
    </div>
    <div class="stock-info">
      <h2>{{ stock.symbol }}</h2>
      <h3>${{ stock.price }} USD</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "StockCard",
  props: ["stock"],
  components: {},
};
</script>

<style>
.stock-card-box {
  display: flex;
  flex-direction: row;
  margin-top: 2vh;
  border: 1px solid #dddddd;
  padding: 1vh;
  border-radius: 12px;
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
