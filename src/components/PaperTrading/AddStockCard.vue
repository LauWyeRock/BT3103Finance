<template>
  <div class="stock-card-box">
    <div class="stock-logo-box">
      <img :src="stockInfo.logo" alt="stock_logo" class="stock-logo" />
      <h2 style="font-family: serif; letter-spacing: -1px; font-weight: bold">
        {{ stockInfo.symbol }}
      </h2>
    </div>
    <div class="stock-info">
      <h2 style="font-family: serif; letter-spacing: -1px; font-weight: bold">
        {{ stockInfo.name }}
      </h2>
      <label for="price" style="font-weight: 100">Price:</label>
      <input
        id="price"
        type="text"
        disabled
        :value="Math.round(stockInfo.last_quote * 100) / 100"
      />
      <label for="quantity" style="font-weight: 100">Quantity:</label>
      <input
        style="font-weight: 100"
        type="number"
        min="1"
        id="quantity"
        v-model="stockQuantity"
        @change="passQuantity(stockQuantity)"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "AddStockCard",
  props: ["stockInfo"],
  data() {
    return {
      stockQuantity: 0,
    };
  },
  methods: {
    passQuantity(quantity) {
      this.$emit("updateQuantity", quantity);
    },
  },
};
</script>

<style>
.stock-card-box {
  background-color: #ffffff;
  border: 1px solid #dddddd;
  border-radius: 24px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  display: flex;
  flex-direction: row;
  border: 1px #dddddd;
  padding: 5vh;
  margin: 20px;
  text-align: left;
}

.stock-logo-box {
  padding: 10px;
  margin-right: 1vw;
  text-align: center;
}

.stock-logo {
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
