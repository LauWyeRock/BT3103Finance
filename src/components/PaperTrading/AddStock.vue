<template>
  <div class="container">
    <form id="myform">
      <h2>Add Stocks</h2>
      <div class="search">
        <input
          type="text"
          class="search"
          placeholder="Search for stock"
          v-model="ticker"
          @keyup.enter="onEnter(ticker)"
        />
        <div
          class="close-button"
          @click="
            resetTicker();
            onEnter(ticker);
          "
          v-show="ticker.length !== 0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="{1.5}"
            stroke="currentColor"
            className="w-6 h-6"
            width="24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <div class="search-button" @click="onEnter(ticker)">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="{1.5}"
            stroke="currentColor"
            className="w-6 h-6"
            width="20"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
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
          style="
            text-align: center;
            font-family: serif;
            letter-spacing: -1px;
            font-weight: bold;
          "
          v-show="!isLoading && stockInfo.length !== 0"
        >
          Total Price:
          <span
            style="font-family: serif; letter-spacing: -1px; font-weight: 100"
          >
            ${{ calculateTotalPrice() }}
          </span>
        </h1>
        <div class="save" v-show="!isLoading && stockInfo.length !== 0">
          <button id="savebutton" type="button" @click="savetofs()">Add</button>
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
      ticker: "",
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
        `http://timcheng112.pythonanywhere.com/get_stock_price?ticker=` +
          ticker.toUpperCase()
      )
        .then((res) => res.json())
        .catch(() => []);
      this.isLoading = false;
    },
    resetTicker() {
      this.ticker = "";
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
.search {
  display: flex;
  width: 60%;
  margin: auto;
}

.search input {
  flex: 1 1 auto;
  height: 44px;
  width: 75%;
  padding-left: 16px;
  padding-right: 60px;
  font-size: 16px;
  border-top: 1px solid #dddddd;
  border-left: 1px solid #dddddd;
  border-right: 0px;
  border-bottom: 1px solid #dddddd;
  border-top-left-radius: 22px;
  border-bottom-left-radius: 22px;
  background: #ffffff;
  color: inherit;
  font-family: inherit;
  font-weight: 400;
  margin-top: 10px;
  outline: none;
}

.search input:focus {
  border: 1px solid #f172a1;
  border-right: 0px;
}

.search input:focus + .close-button {
  border: 1px solid #f172a1;
  border-left: 0px;
}

.close-button {
  height: 44px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  margin-top: 10px;
  background-color: #ffffff;
  border: 1px solid #dddddd;
  border-left: 0px;
  border-right: 0px;
  width: 5%;
}

.search-button {
  border-top-right-radius: 22px;
  border-bottom-right-radius: 22px;
  height: 44px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  margin-top: 10px;
  background-color: #f8f8f8;
  border: 1px solid #dddddd;
  width: 20%;
}

.search-button:hover {
  cursor: pointer;
  background-color: #f0f0f0;
}

.close-button:hover {
  cursor: pointer;
  background-color: #f0f0f0;
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

.save {
  text-align: center;
}
</style>
