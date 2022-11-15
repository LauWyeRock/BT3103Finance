<template>
    <div class="container">
      <form id="myform">
        <h2>Add Stocks</h2>
        <div class="formli">
          <label for="coin1">Stock Name: </label>
          <input
            type="text"
            id="stock1"
            required=""
            placeholder="Enter your Stock"
          /><br /><br />
  
          <label for="ticker1">Ticker: </label>
          <input
            type="text"
            id="ticker1"
            required=""
            placeholder="Valid (eg:AAPL) "
          /><br /><br />
  
          <label for="buy1">Buy Price: </label>
          <input
            type="number"
            id="buy1"
            required=""
            placeholder="Enter the price"
          /><br /><br />
  
          <label for="quant1">Buy Quantity: </label>
          <input
            type="number"
            id="quant1"
            required=""
            placeholder="Enter the quantity"
          /><br /><br />
  
          <div class="save">
            <button id="savebutton" type="button" v-on:click="savetofs()">
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  import {db} from "../firebase/firebase";
  import {    addDoc, collection  } from "firebase/firestore";
  import { getAuth, onAuthStateChanged } from "firebase/auth";

  export default {
    data() {
        return {
          user:false,
        }
      },
    mounted() {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
          if (user) {
            this.user = user;
          }
        })
      },
    methods: {
      async savetofs() {
        var a = document.getElementById("stock1").value;
        var b = document.getElementById("ticker1").value;
        var c = document.getElementById("buy1").value;
        var d = document.getElementById("quant1").value;
  
        alert(" Saving Stock: " + a);
  
        try {
          const docRef = await addDoc(collection(db,"stocks",String(this.fbuser), "allStocks"), {Stock:a, Ticker: b, Buy_Price: c, Buy_Quantity: d})
          console.log(docRef)
          document.getElementById('myform').reset();
          this.$emit("added")
        } catch(error) {
          console.error("Error adding document: ", error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  h2{
      background-color: rgba(161, 195, 209, 0.75);
  }
  
  .formli{
      display: inline-block;
      text-align: right;
  }
  form{
      text-align: center;
      align-items: center;
      margin: auto;
  }
  input:hover{
      box-shadow: 3px 3px purple;
      border-radius: 2px;
  }
  .save{
      text-align: center;
  }
  </style>