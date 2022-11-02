<template>
  <div class="stock-card-box">
    <div class="stock-logo-box">
      <div class="stock-logo-skeleton" />
    </div>
    <div class="stock-info-skeleton">
      <h2 />
      <h3 />
      <h3 />
    </div>
  </div>
</template>

<script>
export default {};
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

.stock-logo-skeleton {
  height: 40px;
  height: 5vh;
  width: 5vh;
  /* width: 10%; */
  padding-top: 10%;
  border-radius: 20%;
  animation: pulse-bg 1s infinite;
}

.stock-info-skeleton {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.stock-info-skeleton h2 {
  width: 30%;
  height: 16px;
  display: inline-block;
  animation: pulse-bg 1s infinite;
}

.stock-info-skeleton h3 {
  content: " ";
  width: 6em;
  height: 16px;
  animation: pulse-bg 1s infinite;

  /* margin: 10px 0; */
}

@keyframes pulse-bg {
  0% {
    background-color: #ddd;
  }
  50% {
    background-color: #d0d0d0;
  }
  100% {
    background-color: #ddd;
  }
}
</style>
