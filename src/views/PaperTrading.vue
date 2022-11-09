<template>
  <div class="hello">
  <AddStock @added="change" />
  <ProfitDisplay :key="refreshComp" />
</div>
</template>

<script>
  import AddStock from '../components/AddStock.vue';
  import ProfitDisplay from '../components/ProfitDisplay.vue';
  import axios from 'axios';

export default {
  name: "App",
  components: {
    AddStock,
    ProfitDisplay,
  },
  data() {
    return {
      refreshComp: 0,
      price: 0,
      done: false,
      stockprice : "",
    };
  },
  methods: {
    async stockPrice() {
      this.url = 'https://financialmodelingprep.com/api/v3/quote-short/AAPL?apikey=25531fecc6020f8bf9636c030e0e3b1a/' + this.stock
      await axios.get(this.url)
      .then( res => {
        this.stockprice = res.data.price,
        console.log(this.stockprice)
        this.done = true
      })
      .catch( err => console.log(err))
    },
    formatNumber(number) {
      number = (number/1000000).toFixed(2).replace('.',',')
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    },
    change() {
      this.refreshComp += 1;
    },
  },
};
</script>

<style scoped>
.hello {
  background-image: repeating-linear-gradient(
    rgba(240, 235, 244, 1), 
    rgba(161, 195, 209, 0.75), 
    rgba(241, 114, 161, 0.5)
    );
}

</style>

<!-- <template>
  <div class="hello">
  <h1>Showing Income Statement {{this.stock}}</h1>
   <form @submit.prevent="updateStock">
    <input type="submit" value="Submit" class="btn-primary m-2">
    <input type="text" v-model="stock" name="stock" placeholder="Enter Ticker">
   </form>
    <div class="container">
      {{this.stock}}
      <div class="stock_name"> {{stockprice}}</div>
    </div>

    <div class="row" v-if="loaded">
   

    <div class="col-md-5 ml-5">
      <b-table sticky-header hover :items="items" :fields="fields"></b-table>
    </div>

    <div class="col-md-5">
      <chart :options="ChartOptionsBar"></chart>
    </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'mainPage',
  props: {
    msg: String
  },
  data() {
    return {
      url: '',
      allfinancials: [],
      loaded:'',
      financials: [],
      stock: '',
      ChartOptionsBar: {},
      stockprice: '',
    }
  },
 methods: {
    // eslint-disable-next-line no-unused-vars
    plotStock(allfinancials) {
      
      this.ChartOptionsBar = {
        xAxis: {
          data: [this.allfinancials[0].date,this.allfinancials[1].date, this.allfinancials[2].date, this.allfinancials[3].date ]
        },
        yAxis: {
          type: 'value',
        },
        series: {
          type: 'bar',
          data: [this.allfinancials[0].Revenue/1000000, this.allfinancials[1].Revenue/1000000,this.allfinancials[2].Revenue/1000000,this.allfinancials[3].Revenue/1000000,]
        }, 
        title: {
          text:'Yearly Revenues',
          x: 'center',
          textStyle: {
            fontSize:24
          }
        },
      }
    },
    async stockPrice() {
      this.url = 'https://financialmodelingprep.com/api/v3/quote-short/AAPL?apikey=25531fecc6020f8bf9636c030e0e3b1a/' + this.stock
      await axios.get(this.url)
      .then( res => {
        this.stockprice = res.data.price,
        console.log(this.stockprice)
      })
      .catch( err => console.log(err))
    },
    formatNumber(number) {
      number = (number/1000000).toFixed(2).replace('.',',')
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    },
    async updateStock() {
      this.url = 'https://financialmodelingprep.com/api/v3/income-statement/AAPL?apikey=25531fecc6020f8bf9636c030e0e3b1a/' + this.stock
      console.log(this.url)
      await axios.get(this.url)
      .then( res => {
        this.allfinancials = res.data.financials,
        this.financials = res.data.financials[0];
        this.loaded = true,
       this.fields = ['item','in_Millions','in_Millions1'],
        this.items = [
         { in_Millions: this.allfinancials[0].date, item: Object.keys(this.financials)[0], in_Millions1:this.allfinancials[1].date, },
        { in_Millions: this.formatNumber(this.allfinancials[0].Revenue) , item: Object.keys(this.financials)[1],in_Millions1: this.formatNumber(this.allfinancials[1].Revenue )},
        { in_Millions: this.formatNumber(this.allfinancials[0]["Cost of Revenue"]), item: Object.keys(this.financials)[3], in_Millions1: this.formatNumber(this.allfinancials[1]["Cost of Revenue"])},
        { in_Millions: this.formatNumber(this.allfinancials[0]["Operating Expenses"]), item: Object.keys(this.financials)[7], in_Millions1: this.formatNumber(this.allfinancials[1]["Operating Expenses"])},
        { in_Millions: this.formatNumber(this.allfinancials[0]["Operating Income"]), item: Object.keys(this.financials)[8], in_Millions1: this.formatNumber(this.allfinancials[1]["Operating Income"])},
        { in_Millions: this.formatNumber(this.allfinancials[0]["Interest Expense"]), item: Object.keys(this.financials)[9], in_Millions1: this.formatNumber(this.allfinancials[1]["Interest Expense"])},
        { in_Millions: this.formatNumber(this.allfinancials[0]["Earnings before Tax"]), item: Object.keys(this.financials)[10], in_Millions1: this.formatNumber(this.allfinancials[1]["Earnings before Tax"])},
        { in_Millions: this.formatNumber(this.allfinancials[0]["Income Tax Expense"]), item: Object.keys(this.financials)[11],in_Millions1: this.formatNumber(this.allfinancials[1]["Income Tax Expense"])},
        { in_Millions: this.formatNumber(this.allfinancials[0]["Net Income"]), item: Object.keys(this.financials)[14], in_Millions1: this.formatNumber(this.allfinancials[1]["Net Income"])},
         ]
        this.plotStock(this.allfinancials)
        this.stockPrice()
      })
      .catch (err => console.log(err))
    }
  }
}
</script> -->