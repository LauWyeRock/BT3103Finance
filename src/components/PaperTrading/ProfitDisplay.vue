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
          <ToolTip text="Sum of liquid amount and investment value">
            <span class="header-text">Total Assets</span>
          </ToolTip>
        </th>
        <th>
          <ToolTip text="Profits of investment">
            <span class="header-text">Profit</span>
          </ToolTip>
        </th>
      </tr>
      <tr class="information-table-row">
        <td>${{ numberWithCommas(1000000) }}</td>
        <td>${{ numberWithCommas(Math.round(money * 100) / 100) }}</td>
        <td>${{ numberWithCommas(Math.round(this.totalInvestmentValue * 100) / 100) }}</td>
        <td>${{ numberWithCommas(Math.round((money + this.totalInvestmentValue) * 100) / 100) }}</td>
        <td>${{ numberWithCommas(Math.round((money + this.totalInvestmentValue - 1000000) * 100) / 100) }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import { db } from "../../firebase/firebase";
import {
  collection,
  getDocs,
  doc,
  deleteDoc,
  query,
  setDoc,
  addDoc,
} from "firebase/firestore";
// import { computed, ref } from "vue";
// import axios from "axios";
import ToolTip from "../ToolTip.vue";

export default {
  components: { ToolTip },
  props: {
    myUid: String,
    money: Number,
  },
  methods: {
    numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },
  data() {
    return {
      totalInvestmentValue: 0
    }
  },
  async mounted() {

    const display = async (uid, money) => {
      const docRef = query(collection(db, "portfolio", uid, "stocks"));
      const querySnapshot = await getDocs(docRef);

      let idx = 1;
      // let tp = 0;
      let investmentValue = 0;
      let index = 0;
      var loopThroughData = new Promise((resolve) => {
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
          // const stockInfo = await fetch(`http://timcheng112.pythonanywhere.com/get_stock_price?ticker=` + ticker.toUpperCase()).then((res) => res.json()).catch(() => []);
          // const currentPrice = Math.round(stockInfo.last_quote * 100) / 100;
          // const profit = Math.round((price - currentPrice) * 100) / 100
          // investmentValue += (stockInfo.last_quote * quantity)
          // console.log(investmentValue);
          // cell1.innerHTML = idx;
          // cell2.innerHTML = stockName;
          // cell3.innerHTML = ticker;
          // cell4.innerHTML = "$" + price;
          // cell5.innerHTML = quantity;
          // //currentPrice
          // cell6.innerHTML = '$' + currentPrice;
          // //profit
          // cell7.innerHTML = '$' + profit;
          // cell7.className = "profits";

          const stockInfo = await fetch(
            `http://timcheng112.pythonanywhere.com/get_stock_price?ticker=` +
            ticker.toUpperCase()
          )
            .then((res) => res.json())
            .catch(() => []);
          investmentValue += (stockInfo.last_quote * quantity)
          const currentPrice = Math.round(stockInfo.last_quote * 100) / 100;
          const profit = Math.round((price - currentPrice) * 100) / 100;
          cell1.innerHTML = idx;
          idx++;
          cell2.innerHTML = stockName;
          cell3.innerHTML = ticker;
          cell4.innerHTML = "$" + price;
          cell5.innerHTML = quantity;
          //currentPrice
          cell6.innerHTML = "$" + currentPrice;
          //profit
          cell7.innerHTML = "$" + profit;
          cell7.className = "profits";

          var input = document.createElement("input");
          input.type = "number";
          input.className = "sellInput";
          input.id = String(stockName) + "input";
          input.placeholder = "#stocks to sell...";
          cell8.appendChild(input);

          var btn = document.createElement("button");
          btn.className = "sellButton";
          btn.id = String(stockName);
          btn.innerHTML = "Sell";
          btn.onclick = function () {
            sellStock(docs.id, String(stockName) + "input", stock, uid, money);
          };
          cell8.appendChild(btn);
          console.log(querySnapshot.size)
          console.log(index);
          if (index === querySnapshot.size - 1) {
            resolve();
          }
          index += 1
        })
      });
      this.totalInvestmentValue = await loopThroughData.then(() => investmentValue);
      console.log(this.totalInvestmentValue)
    }

    display(this.myUid, this.money);

    async function sellStock(stockId, inputId, stock, uid, money) {
      var qty;
      try {
        qty = Number(document.getElementById(inputId).value);
      } catch {
        alert("Quantity has to be a number!")
      }
      if (qty === 0) {
        alert("You cannot sell 0 stocks!")
        return;
      }
      if (qty > stock.quantity) {
        alert("You do not have enough stocks to sell!");
        return;
      }
      //to sell stocks...
      else if (qty == stock.quantity) {
        //1. case 1: sell ALL stocks.
        // remove stock from db
        await deleteDoc(doc(db, "portfolio", uid, "stocks", stockId)).then(
          () => {
            console.log("successfully deleted stock.");
          }
        );
      } else {
        //2. case 2: sell a portion of the stocks.
        // modify qty in db.
        let remainingQty = stock.quantity - qty;
        await setDoc(
          doc(db, "portfolio", uid, "stocks", stockId),
          {
            quantity: remainingQty,
          },
          { merge: true }
        ).then(() => {
          console.log(
            "merged stock with existing stock." +
            stock.quantity +
            " => " +
            remainingQty
          );
        });
      }
      //3. push to history.
      const timestamp = Date.now();
      const databaseHist = collection(db, "portfolio", uid, "history");
      const docref2 = await addDoc(databaseHist, {
        date: timestamp,
        stock: stock.stock,
        ticker: stock.ticker,
        trasactionType: "SELL",
        price: stock.price,
        quantity: qty,
      });
      console.log(
        "saved transaction to history! " + stock.name + " " + docref2
      );

      //3. add money to your account.
      const newMoneyBalance = money + stock.quantity * stock.price;
      await setDoc(
        doc(db, "portfolio", uid),
        {
          money: newMoneyBalance,
        },
        { merge: true }
      ).then(() => {
        console.log("money added: " + money + " => " + newMoneyBalance);
      });
      alert(
        "Sold " +
        qty +
        " " +
        stock.stock +
        " stocks. New Balance: " +
        newMoneyBalance
      );
      location.reload();

      //re-render table
      //might need location.reload.
      // display(this.myUid);
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
