<template>
  <div className="Stock-Card-Outer">
    <img
      className="Stock-Icon"
      src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
    />
    <div className="Ticker">
      <h1>AAPL</h1>
      <h3>Apple</h3>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.Stock-Card-Outer {
  border-radius: 10px;
  border: 1px solid black;
  margin-right: 2.5%;
  margin-left: 2.5%;
  margin-bottom: 1%;
  min-width: 230px;
  padding: 1%;
}
.Stock-Icon {
  margin-top: 4%;
  width: 50px;
  height: 50px;
  float: left;
  margin-right: 20px;
}

.Ticker {
  margin-top: 0px;
}
</style>
