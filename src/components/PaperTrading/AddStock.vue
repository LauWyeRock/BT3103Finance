<template>
  <div class="container">
    <form id="myform">
      <h2 class="subtitle">Add Stocks</h2>
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
      <div
        v-if="isLoading"
        style="
          width: 100%;
          display: flex;
          margin: auto;
          align-items: center;
          justify-content: center;
        "
      >
        <StockCardSkeleton />
      </div>
      <div
        v-show="!isLoading && stockInfo.length === 0"
        style="padding: 40px; margin: 10px; margin: 10px auto"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="{1.5}"
          stroke="currentColor"
          width="150"
          className="w-6 h-6"
          style="
            background-color: #eff0f5;
            border-radius: 50%;
            padding: 20px;
            border: 1px dashed black;
          "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"
          />
        </svg>
        <p style="margin: 10px">Please search for a valid stock</p>
      </div>
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
// import { addDoc, collection, getDoc, docref } from "firebase/firestore";
import {
  addDoc,
  collection,
  getDocs,
  query,
  setDoc,
  doc,
} from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import AddStockCard from "./AddStockCard.vue";
import StockCardSkeleton from "../StockCardSkeleton.vue";

export default {
  components: { AddStockCard, StockCardSkeleton },
  props: {
    myUid: String,
    money: Number,
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

      //verify if you can afford to buy.

      let totalPrice = this.calculateTotalPrice();
      console.log("money : " + this.money);
      if (this.money < totalPrice) {
        alert("You cannot afford to buy this!");
        return;
      }

      //when adding need to
      //1. add stocks to user
      //stock, ticker, buy price, quantity

      let stocksArr = [];
      let stockExistsInDb = false;
      let existingStockId = "";
      let existingStockQty = 0;

      // check if we have stocks of the same name & price already.
      const docRefStocks = query(
        collection(db, "portfolio", this.myUid, "stocks")
      );
      const querySnapShot = await getDocs(docRefStocks);
      querySnapShot.forEach(async (doc) => {
        stocksArr.push([doc.data(), doc.id]);
      });
      for (let i = 0; i < stocksArr.length; i++) {
        if (stocksArr[i][0].stock == this.stockInfo.name) {
          if (stocksArr[i][0].price == this.stockInfo.last_quote) {
            //same price & same name.
            stockExistsInDb = true;
            existingStockId = stocksArr[i][1];
            existingStockQty = stocksArr[i][0].quantity;
            break;
          }
        }
      }

      //this is a new stock/price.
      if (!stockExistsInDb) {
        const database = collection(db, "portfolio", this.myUid, "stocks");
        const docref = await addDoc(database, {
          stock: this.stockInfo.name,
          ticker: this.stockInfo.symbol,
          price: this.stockInfo.last_quote,
          quantity: this.stockQuantity,
        });
        console.log("added stock!" + this.stockInfo.name + " " + docref);
      } //existing stock & price, exists, overwrite.
      else {
        setDoc(
          doc(db, "portfolio", this.myUid, "stocks", existingStockId),
          {
            quantity: existingStockQty + this.stockQuantity,
          },
          { merge: true }
        ).then(() => {
          console.log(
            "merged stock with existing stock." +
              existingStockQty +
              " + " +
              this.stockQuantity
          );
        });
      }

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

      //3. deduct money.
      const newMoneyBalance = this.money - totalPrice;
      await setDoc(
        doc(db, "portfolio", this.myUid),
        {
          money: newMoneyBalance,
        },
        { merge: true }
      ).then(() => {
        console.log("money deducted: " + this.money + " => " + newMoneyBalance);
      });
      alert(
        "Purchased " +
          this.stockQuantity +
          " " +
          this.stockInfo.name +
          " stocks!"
      );
      location.reload();
    },
    async onEnter(ticker) {
      this.isLoading = true;
      this.stockInfo = await fetch(
        `https://timcheng112.pythonanywhere.com/get_stock_price?ticker=` +
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

.subtitle {
  font-family: serif;
  letter-spacing: -1px;
  font-weight: bold;
  margin-left: 1vw;
  font-size: 250%;
}
/* 
h2 {
  background-color: rgba(161, 195, 209, 0.75);
} */

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
