<template>
  <div class="container">
    <form id="myform">
      <h2>Add Stocks</h2>
      <div class="center">
        <div class="search">
          <input
            type="text"
            class="search"
            placeholder="Search for stock"
            v-model="ticker"
            @keyup.enter="onEnter(ticker)"
          />
        </div>
      </div>
      <h1 v-if="isLoading">LOADING...</h1>
      <div class="formli">
        <AddStockCard
          :stockInfo="stockInfo"
          v-show="!isLoading && stockInfo.length !== 0"
          @updateQuantity="updateQuantity($event)"
        />
        <h1
          style="text-align: center"
          v-show="!isLoading && stockInfo.length !== 0"
        >
          Total Price: ${{ calculateTotalPrice() }}
        </h1>
        <div class="save">
          <button id="savebutton" type="button" v-on:click="savetofs()">
            Add
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { db } from "@/firebase/firebase";
import { addDoc, collection } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import AddStockCard from "./AddStockCard.vue";

export default {
  components: { AddStockCard },
  props: {
    myUid: String,
    portfolio: Object,
  },
  data() {
    return {
      user: false,
      stockInfo: [],
      isLoading: false,
      stockQuantity: 0,
    };
  },
  mounted() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.user = user;
      }
    });
    console.log("in addstock: " + this.portfolio);
  },
  methods: {
    async savetofs() {
      // console.log("Symbol: " + this.stockInfo.symbol);
      // console.log("Name: " + this.stockInfo.name);
      // console.log("Price: " + this.stockInfo.last_quote);
      // console.log("Quantity: " + this.stockQuantity);

      //when adding need to
      //1. add stocks to user
      //stock, ticker, buy price, quantity

      // let totalPrice = this.calculateTotalPrice();

      console.log("ADD STUFF:");
      console.log(this.myUid);
      console.log(this.portfolio);
      // console.log(this.portfolio.money + " vs " + totalPrice);

      const database = collection(db, "portfolio", this.myUid, "stocks");
      const docref = await addDoc(database, {
        stock: this.stockInfo.name,
        ticker: this.stockInfo.symbol,
        price: this.stockInfo.last_quote,
        quantity: this.stockQuantity,
      });

      console.log("added stock!" + this.stockInfo.name + " " + docref);

      //2. add a transaction into history.
      //date, stock, ticker, trasaction type, quantity, price

      const timestamp = Date.now();
      const database2 = collection(db, "portfolio", this.myUid, "history");
      const docref2 = await addDoc(database2, {
        date: timestamp,
        stock: this.stockInfo.name,
        ticker: this.stockInfo.symbol,
        trasactionType: "BUY",
        price: this.stockInfo.last_quote,
        quantity: this.stockQuantity,
      });

      console.log(
        "saved transaction to history! " + this.stockInfo.name + " " + docref2
      );
    },
    async onEnter(ticker) {
      this.isLoading = true;
      this.stockInfo = await fetch(
        `http://timcheng112.pythonanywhere.com/get_stock_price?ticker=` + ticker
      )
        .then((res) => res.json())
        .catch(() => []);
      this.isLoading = false;
    },
    updateQuantity(quantity) {
      this.stockQuantity = quantity;
    },
    calculateTotalPrice() {
      if (this.stockQuantity === 0) {
        return 0;
      }
      return (
        Math.round(this.stockQuantity * this.stockInfo.last_quote * 100) / 100
      );
    },
  },
};
</script>

<style scoped>
.search input {
  flex: 1 1 auto;
  height: 44px;
  width: 25vw;
  padding-left: 16px;
  padding-right: 60px;
  font-size: 16px;
  border: 1px solid #dddddd;
  border-radius: 22px;
  background: #ffffff;
  color: inherit;
  font-family: inherit;
  font-weight: 400;
  margin-top: 10px;
}

h2 {
  background-color: rgba(161, 195, 209, 0.75);
}

.formli {
  display: inline-block;
  text-align: right;
}

form {
  text-align: center;
  align-items: center;
  margin: auto;
}

/* input:hover {
  box-shadow: 3px 3px purple;
  border-radius: 2px;
} */

.save {
  text-align: center;
}
</style>
