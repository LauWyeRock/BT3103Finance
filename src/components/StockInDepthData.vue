<template>
    <div class = "Box">
        <h2> Simplified Data for {{ title }}</h2>
        This component provides common metrics used for evaluating stocks.
        Hover over the tooltips to see more!
        <div class="stockData">
            Industry: {{ industry }} <br>
            P/E Ratio: {{ stockData }}
            <div class = "tooltip">
                <img src = "@/assets/stockPage/light-bulb.png">
                <span class="tooltiptext">
                    <b>P/E Ratio stands for Price to earnings ratio.</b>
                    This tells investors how much a company is worth. The P/E ratio 
                    simply the stock price divided by the company's earnings per share for 
                    a designated period like the past 12 months. The price/earnings 
                    ratio conveys how much investors will pay per share for $1 of earnings.
                </span>
            </div>
            <br>
            P/B Ratio: {{ bookValue }} 
            <div class = "tooltip">
                <img src = "@/assets/stockPage/light-bulb.png">
                <span class="tooltiptext">
                    <b>P/B Ratio stands for Price to Book Ratio. <br></b>
                    This is commonly known as book value. The price is the company's stock price 
                    and book refers to the company's book value per share. 
                    A company's book value is equal to its assets minus its liabilities.
                </span>
            </div>
            <br>
            P/S Ratio: {{ sales }} 
            <div class = "tooltip">
                <img src = "@/assets/stockPage/light-bulb.png">
                <span class="tooltiptext">
                    <b>P/S Ratio stands for Price to Sales Ratio. <br></b>
                    It is the share price of a company divided by its sales per share. 
                    This is measured on a TTM (Trailing 12-month) 
                    basis and earnings are diluted and normalised.
                </span>
            </div>
        </div>
        <div>
            Take a quiz here to access paper trading! <br>
            <QuizPopup/>
            <br>
        </div>
    </div>
</template>

<script>
// api key: YYDJ5HRF9K8DOGJE
import axios from "axios";
import { type } from "os";
import QuizPopup from './QuizPopup.vue';
export default {
    data() { 
        return {
            stockData: "Loading...",
            industry: "Loading...",
            bookValue: "Loading...",
            sales: "Loading..."
        }
    },
    components : {
        QuizPopup
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
        let forwardPE = stockData['PERatio']
        let industry = stockData['Sector']
        let bookValue = stockData['PriceToBookRatio']
        let sales = stockData['PriceToSalesRatioTTM']
        if (type(stockData) == undefined) {
            this.stockData = "N/A"
            this.industry = "N/A"
            this.bookValue = "N/A"
            this.sales = "N/A"
        } else {
            this.stockData  = forwardPE
            this.industry = industry
            this.bookValue = bookValue
            this.sales = sales
        }
    }
}
</script>

<style scoped>

.Box {
	background: transparent;
    color: black;
    justify-content: center;
    align-items: center;
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
  line-height: 20px;

  /* Position the tooltip */
  position: absolute;
  z-index: 1;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
}
</style>