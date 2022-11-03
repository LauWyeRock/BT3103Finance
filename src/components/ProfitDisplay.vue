<template>
    <h1 id="Current">Current Portfolio</h1>
  
    <table id="table" class="auto-index">
      <tr>
        <th>S.No</th>
        <th>Coin</th>
        <th>Ticker</th>
        <th>Buy_Price</th>
        <th>Buy_Quantity</th>
        <th>Current_Price</th>
        <th>Profit</th>
        <th>Options</th>
      </tr>
    </table>
    <br /><br />
    <h2 id="totalProfit"> TP </h2>
  </template>
  
  <script>
  // import ccxt from "ccxt";
import {db} from "../firebase/firebase"
  import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
  
  export default {
    mounted() {
      async function display(user) {
        let z = await getDocs(collection(db, String(user)));
        let ind = 1;
        var tp = 0;
  
        z.forEach((docs) => {
          let yy = docs.data();
          var table = document.getElementById("table");
          var row = table.insertRow(ind);
  
          var coin = yy.Coin;
          var price = yy.Buy_Price;
          var quantity = yy.Buy_Quantity;
          var ticker = yy.Ticker;
  
          var cell1 = row.insertCell(0);
          var cell2 = row.insertCell(1);
          var cell3 = row.insertCell(2);
          var cell4 = row.insertCell(3);
          var cell5 = row.insertCell(4);
          var cell6 = row.insertCell(5);
          var cell7 = row.insertCell(6);
          var cell8 = row.insertCell(7);
  
          cell1.innerHTML = ind;
          cell2.innerHTML = coin;
          cell3.innerHTML = ticker;
          cell4.innerHTML = price;
          cell5.innerHTML = quantity;
          cell6.innerHTML = 0;
          cell7.innerHTML = 0;
  
          cell7.className = "profits";
  
          var bu = document.createElement("button");
          bu.className = "bwt";
          bu.id = String(coin);
          bu.innerHTML = "Delete";  
          bu.onclick = function () {
            deleteInstrument2(coin);
          };
          cell8.appendChild(bu);
  
          val(ticker);
  
          async function val(ticker) {
            
            // let binance = new ccxt.binance();
            // let x = await binance.fetch_ohlcv(ticker, "5m");
            let x = ticker; // this statement is bs
            cell6.innerHTML = x[499][4];
            cell7.innerHTML = Math.round(
              quantity * (-parseFloat(price) + parseFloat(cell6.innerHTML))
            );
            tp = tp + parseFloat(cell7.innerHTML);
            document.getElementById("totalProfit").innerHTML =
              " Total Profit is " + String(tp);
          }
          ind += 1;
        });
      }
      display();
  
      async function deleteInstrument2(coin) {
        var x = coin;
        alert("You are going to delete " + x);
        await deleteDoc(doc(db, "Portfolio", x));
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
  
  h1,h2 {
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
  }
  
  table{
      font-family: arial, sans-serif;
      border-collapse: collapse;
      width:100%;
  }
  
  tr:nth-child(even){
      background-color: #e3edee;
  }
  
  th,td {
      border: 1px solid #dddddd;
      text-align: center;
      padding: 8px;
  }
  
  .bwt{
      color:rgb(243,236,236);
      background-color: rgb(255,94,0);
  }
  
  </style>