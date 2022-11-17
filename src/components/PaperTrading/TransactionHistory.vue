<template>
  <h1 id="Current">Transaction History</h1>

  <table id="transcationHistoryTable" class="auto-index">
    <tr>
      <th>S.No</th>
      <th>Date</th>
      <th>Stock</th>
      <th>Ticker</th>
      <th>Transaction Type</th>
      <th>Quantity</th>
      <th>Price (USD)</th>
    </tr>
  </table>
</template>

<script>
import { db } from "@/firebase/firebase";
import { collection, getDocs, query } from "firebase/firestore";

export default {
  props: {
    myUid: String,
  },
  async mounted() {
    async function display(uid) {
      const docRef = query(collection(db, "portfolio", uid, "history"));
      const querySnapshot = await getDocs(docRef);

      let idx = 1;

      console.log("mounted in add docs:");

      querySnapshot.forEach((docs) => {
        let transaction = docs.data();
        var table = document.getElementById("transcationHistoryTable");
        var row = table.insertRow(idx);

        var date = timeConverter(transaction.date);
        var stockName = transaction.stock;
        var ticker = transaction.ticker;
        var transactionType = transaction.trasactionType;
        var quantity = transaction.quantity;
        var price = "$" + Math.round(transaction.price * 100) / 100;

        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        var cell7 = row.insertCell(6);

        cell1.innerHTML = idx;
        cell2.innerHTML = date;
        cell3.innerHTML = stockName;
        cell4.innerHTML = ticker;
        cell5.innerHTML = transactionType;
        cell6.innerHTML = quantity;
        cell7.innerHTML = price;
      });
      console.log("display complete.");
    }

    console.log("myuid:" + this.myUid);
    display(this.myUid);
  },
};
function timeConverter(timestamp) {
  var a = new Date(timestamp);
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time =
    date + " " + month + " " + year + " " + hour + ":" + min + ":" + sec;
  return time;
}
</script>

<style scoped>
h1,
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
}

table {
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
}

.bwt {
  color: rgb(243, 236, 236);
  background-color: rgb(255, 94, 0);
}
</style>
