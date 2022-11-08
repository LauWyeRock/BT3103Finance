<template>
  <div className="Stock-Card-Outer">
    <img
      className="Stock-Icon" src='https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/AAPL.svg'
    />
    <div className="notClicked" id = "Ticker" style="cursor: pointer;" @click="check(this)">
      <h1> {{ ticker }} </h1>
    </div>
    <h3> {{ ticker }} </h3>
  </div>
</template>

<script>
export default {
  props: {
    ticker: String,
  },
  methods: {
    theFunction() {
      alert("You clicked me")
    },
    check(element) {
			console.log(element)
			console.log(event.target.id)
			console.log(event.target.className)
			if(event.target.className == "notClicked"){
				event.target.className="clicked"
			}
			else {
				event.target.className="notClicked"
			}
		}
  }
};
</script>

<style>
.Stock-Card-Outer{
  border-radius: 10px;
  border: 1px solid black;
  margin-right: 2%;
  margin-left: 2%;
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

.clicked {
  color: purple;
}

.Ticker {
  margin-top: 0px;
}
</style>
