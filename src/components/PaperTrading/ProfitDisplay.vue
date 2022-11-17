<template>
  <h2 class="subtitle">Current Portfolio</h2>
  <!-- <h1 id="Current">Current Portfolio</h1> -->
  <table id="stocksTable" class="auto-index">
    <tr>
      <th>S.No</th>
      <th>Stock</th>
      <th>Ticker</th>
      <th>Buy_Price</th>
      <th>Buy_Quantity</th>
      <th>Current_Price</th>
      <th>Profit</th>
      <th>Options</th>
    </tr>
  </table>
  <br /><br />
  <h2 class="subtitle">Information</h2>
  <div style="text-align: center">
    <table role="table">
      <tr role="row">
        <th role="columnheader">
          <ToolTip text="How much money trader started off with">
            <span class="header-text">Initial Amount</span>
          </ToolTip>
        </th>
        <th>
          <ToolTip text="Amount of money in portfolio that is not spent">
            <span class="header-text">Liquid Amount</span>
          </ToolTip>
        </th>
        <th>
          <ToolTip text="Value of investment">
            <span class="header-text">Investment Value</span>
          </ToolTip>
        </th>
        <th>
          <ToolTip text="Value of investment">
            <span class="header-text">Current Value</span>
          </ToolTip>
        </th>
        <th>
          <ToolTip text="Value of investment">
            <span class="header-text">Profit</span>
          </ToolTip>
        </th>
      </tr>
      <tr class="information-table-row">
        <td>${{ numberWithCommas(money) }}</td>
        <td>${{ numberWithCommas(Math.round((1000000 - money) * 100) / 100) }}</td>
        <td>$1,000,000</td>
        <td>$1,000,000</td>
        <td>$1,000,000</td>
      </tr>
    </table>
  </div>
</template>

<script>
import { db } from "../../firebase/firebase";
import { collection, getDocs, doc, deleteDoc, query } from "firebase/firestore";
// import { computed, ref } from "vue";
// import axios from "axios";
import ToolTip from "../ToolTip.vue";

export default {
  components: { ToolTip },
  props: {
    myUid: String,
    money: Number
  },
  methods: {
    numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },
  async mounted() {

    async function display(uid) {
      const docRef = query(collection(db, "portfolio", uid, "stocks"));
      const querySnapshot = await getDocs(docRef);

      let idx = 1;
      // let tp = 0;

      querySnapshot.forEach(async (docs) => {
        let stock = docs.data();
        var table = document.getElementById("stocksTable");
        var row = table.insertRow(idx);

        var stockName = stock.stock;
        var price = Math.round(stock.price * 100) / 100;
        var quantity = stock.quantity;
        var ticker = stock.ticker;

        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        var cell7 = row.insertCell(6);
        var cell8 = row.insertCell(7);

        const stockInfo = await fetch(`http://timcheng112.pythonanywhere.com/get_stock_price?ticker=` + ticker.toUpperCase()).then((res) => res.json()).catch(() => []);
        const currentPrice = Math.round(stockInfo.last_quote * 100) / 100;
        const profit = Math.round((price - currentPrice) * 100) / 100
        cell1.innerHTML = idx;
        cell2.innerHTML = stockName;
        cell3.innerHTML = ticker;
        cell4.innerHTML = "$" + price;
        cell5.innerHTML = quantity;
        //currentPrice
        cell6.innerHTML = '$' + currentPrice;
        //profit
        cell7.innerHTML = '$' + profit;
        cell7.className = "profits";

        var btn = document.createElement("button");
        btn.className = "sellButton";
        btn.id = String(stockName);
        btn.innerHTML = "Sell";
        btn.onclick = function () {
          deleteInstrument2(docs.id);
        };
        cell8.appendChild(btn);

        // val(ticker);

        // async function val(ticker) {
        //   let stockSymbol = ref(ticker);
        //   let AlphaVantageApi_URL_LINK = computed(() => {
        //     return (
        //       "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=" +
        //       stockSymbol.value +
        //       "&interval=5min&apikey=T8KDAAX3DMF90GU8"
        //     );
        //   });
        //   await axios.get(AlphaVantageApi_URL_LINK).then((response) => {
        //     console.log(response.data["Time Series (5min)"]);

        //     for (const property in response.data["Time Series (5min)"]) {
        //       let price =
        //         response.data["Time Series (5min)"][property]["4. close"];
        //       cell6.innerHTML = price;
        //       cell7.innerHTML = Math.round(
        //         quantity * (-parseFloat() + parseFloat(cell6.innerHTML))
        //       );
        //       tp = tp + parseFloat(cell7.innerHTML);
        //       document.getElementById("totalProfit").innerHTML =
        //         " Total Profit is " + String(tp);
        //       console.log(price);
        //       break;
        //     }
        //     idx += 1;
        //   });
        // }
      });
    }

    display(this.myUid);

    async function deleteInstrument2(stock) {
      var x = stock;
      alert("You are going to delete " + x);
      await deleteDoc(
        doc(db, "stocks", "Hi3Tx6xdc2OvBG1EeAfBYIz2P2c2", "allStocks", x)
      );
      console.log("Document successfully created", x);
      let tb = document.getElementById("table");
      while (tb.rows.length > 1) {
        tb.deleteRow(1);
      }
      document.getElementById("totalProfit").innerHTML = "";
      display();
    }



  },
};
</script>

<style scoped>
/* h1,
h2 {
  text-align: center;
  background-color: rgba(241, 114, 161, 0.5);
  font: 700;
  display: block;
  font-size: 2em;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
} */

.subtitle {
  font-family: serif;
  letter-spacing: -1px;
  font-weight: bold;
  margin-left: 1vw;
  font-size: 250%;
  text-align: center;
  margin-bottom: 10px;
}

/* table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
  text-align: center;
}

tr:nth-child(even) {
  background-color: #e3edee;
}

th,
td {
  border: 1px solid #dddddd;
  text-align: center;
  padding: 8px;
} */

.bwt {
  color: rgb(243, 236, 236);
  background-color: rgb(255, 94, 0);
}

table {
  border-collapse: collapse;
  width: 80%;
  margin: auto;
  margin-bottom: 2vh;
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

td,
th {
  text-align: left;
  padding: 2vh;
  /* border-bottom-left-radius: 20px; */
  /* border-bottom-right-radius: 20px; */
}

.information-table-row td:nth-child(1) {
  border-bottom-left-radius: 20px;
}

.information-table-row :nth-child(5) {
  border-bottom-right-radius: 20px;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

.header-text {
  border-bottom: 1px dotted black;
}
</style>
