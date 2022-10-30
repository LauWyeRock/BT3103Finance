<template>
    <div class = "Box">
        <h2> Simplified Data for {{ title }}</h2>
        <div class="stockData">
            PE Ratio: {{ stockData }}, Industry: {{ industry }} 
            <div class = "tooltip">
                <img src = "@/assets/stockPage/light-bulb.png">
                <span class="tooltiptext">
                    <b>P/E Ratio stands for Price to earnings ratio.</b>
                    The price to earnings ratio differs greatly from industry
                    to industry. For example, stocks in the technology sector
                    have a higher PE than normal, and commodity stocks such as
                    energy-related stocks have a lower PE.
                </span>
            </div>
        </div>
        <div>
            Take a quiz here to access paper trading! <br>
            <button> Take the quiz </button>
            
        </div>
    </div>
</template>

<script>
// api key: YYDJ5HRF9K8DOGJE
import axios from "axios";
import { type } from "os";
export default {
    data() { 
        return {
            stockData: "Loading...",
            industry: "Loading..."
        }
    },
    props:{
        title: String,
    },
    async mounted() {
        var url = 'https://www.alphavantage.co/query?function=OVERVIEW&symbol=' + localStorage.getItem('stock') + '&apikey=' + 'YYDJ5HRF9K8DOGJE';
        let stockData = await axios.get(url).then(b => b.data)
        async function a() {
            let b = await axios.get(url, {params: 'annualEarnings'})
            let c = await b.data
            //let d = c.length
            return c
        }
        a()
        console.log(stockData)
        let forwardPE = stockData['ForwardPE']
        let industry = stockData['Sector']
        if (type(stockData) == undefined) {
            this.stockData = "N/A"
            this.industry = "N/A"
        } else {
            this.stockData  = forwardPE
            this.industry = industry
        }
    }
}
</script>

<style scoped>

.Box {
	background: white;
    color: black;
}

.Hello {
	flex-grow: 1
}


/* Tooltip container */
.tooltip {
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 300px;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  top: -5px;
  right: 105%;

  /* Position the tooltip */
  position: absolute;
  z-index: 1;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
}
</style>