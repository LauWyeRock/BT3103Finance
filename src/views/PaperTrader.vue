<template>
  <div class="main-box">
    <h1 class="title">Paper Trading</h1>
    <Suspense id="doesntmatter">
      <template #default>
        <PaperTrading />
      </template>
      <template #fallback>
        <div id="trader-skeleton">
          <h1 style="font-size: 50px; margin-bottom: 0px; padding-bottom: 0px">
            fetching profile...
          </h1>
          <img style="object-fit: scale-down; margin-top: 0px; padding-top: 0px" src="../assets/hamster-wheel.gif" />
        </div>
      </template>
    </Suspense>
  </div>
</template>

<script>
import PaperTrading from "../components/PaperTrading/PaperTrading.vue";
export default {
  name: "PaperTrader",
  components: {
    PaperTrading,
  },
};
</script>

<style>
/* #doesntmatter,
#default,
#fallback {
  background: repeating-linear-gradient(rgba(240, 235, 244, 1),
      rgba(161, 195, 209, 0.75),
      rgba(241, 114, 161, 0.5));
}

#trader-skeleton {
  text-align: center;
  margin-top: 0px;
  background: repeating-linear-gradient(rgba(240, 235, 244, 1),
      rgba(161, 195, 209, 0.75),
      rgba(241, 114, 161, 0.5));
} */

.main-box {
  text-align: center;
  background-image: repeating-linear-gradient(rgba(240, 235, 244, 1),
      rgba(161, 195, 209, 0.75),
      rgba(241, 114, 161, 0.5));
}

.title {
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
</style>
