<template>
    <h2> Simplified Data for {{ title }}</h2>
    <div>
        This is sample text.
    </div>
    <button @click="count++">You clicked me {{ count }} times.</button>
    <div class="stockData">
        {{ stockData }}
    </div>
</template>

<script>
// api key: YYDJ5HRF9K8DOGJE
import axios from "axios";
export default {
    async setup() {
        var url = 'https://www.alphavantage.co/query?function=OVERVIEW&symbol=' + 'GME' + '&apikey=' + 'YYDJ5HRF9K8DOGJE';
        let stockData = await axios.get(url).then(b => b.data)
        async function a() {
            let b = await axios.get(url, {params: 'annualEarnings', symbol: "GME"})
            let c = await b.data
            //let d = c.length
            return c
        }
        a()
        stockData = stockData['ForwardPE']
        console.log(stockData)
        return { stockData }
    },
    data() { 
        return {
            count: 0
        }
    },
    props:{
        title: String,
        bob: String
    }
}
</script>