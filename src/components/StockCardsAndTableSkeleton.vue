<template>
  <div class="list-box">
    <StockCardSkeleton class="stock-item" />
    <StockCardSkeleton class="stock-item" />
    <StockCardSkeleton class="stock-item" />
    <StockCardSkeleton class="stock-item" />
    <StockCardSkeleton class="stock-item" />
  </div>
  <div class="table-box">
    <StockTableSkeleton :isByVolume="isByVolume" />
  </div>
</template>

<script>
import StockCardSkeleton from "./StockCardSkeleton.vue";
import StockTableSkeleton from "./StockTableSkeleton.vue";

export default {
  components: {
    StockCardSkeleton,
    StockTableSkeleton,
  },
  props: ["isByVolume"],
};
</script>

<style>
.list-box {
  display: grid;
  grid-template-columns: auto auto auto auto auto;
}

.stock-item {
  margin-right: 1vw;
}
</style>
