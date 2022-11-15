<template>
  <div className="Watch-List-Outer">
    <h1 className="Watch-List-Title">Favourite Stocks/Cryptocurrencies</h1>
    <div className="Watch-List-Content">
      <div className="Long-Card-Buttons" v-for="item in favorites" :key="item">
        <StockTickerCard :ticker="item" />
      </div>
    </div>
    <div className="Long-Card-Buttons" v-if="ownPage">
      <button @click="open()">Add Stock</button>
      <button @click="open2()" style="margin-left: 10px">Remove Stocks</button>
    </div>
    <teleport to="body">
      <div class="modal" v-if="isOpen">
        <div class="box">
          <h2>Add a stock here</h2>
          <br />
          <div class="searchdiv">
            <input
              type="text"
              id="stockSearch"
              class="searchbar"
              placeholder="Search Stock..."
            />
          </div>
          <button class="confirm" @click="savetofs()">Confirm</button>
          <button class="close" @click="close()">Close</button>
        </div>
      </div>
    </teleport>
    <teleport to="body">
      <div class="modal" v-if="isOpen2">
        <div class="box">
          <h2>Are you sure?</h2>
          <br />
          <button class="confirm" @click="removeStocks()">Yes</button>
          <button class="close" @click="close2()">No</button>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script>
import { ref } from "vue";
import StockTickerCard from "./StockTickerCard.vue";
// import { getAuth } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "@/firebase/firebase";
export default {
  props: {
    profile: Object,
    ownPage: Boolean,
    uid: String,
  },
  components: { StockTickerCard },
  async created() {
    this.toDelete = await this.getFavStocks();
    this.favorites = await this.getFavStocks();
  },
  data() {
    return {
      isOpen: ref(false),
      isOpen2: ref(false),
      toDelete: [], //array of strings
      favorites: [],
    };
  },
  methods: {
    open() {
      this.isOpen = true;
    },
    close() {
      this.isOpen = false;
    },
    open2() {
      this.isOpen2 = true;
    },
    close2() {
      this.isOpen2 = false;
    },
    async getFavStocks() {
      // let b = await this.getUserId();
      // console.log("### GET FAV STOCKS ###");
      // console.log("profile: " + this.profile);
      // console.log("ownpage : " + this.ownPage);
      // console.log("uid : " + this.uid);
      let b = this.uid;
      let docRef = doc(db, "profiles", b);
      let docSnap = await getDoc(docRef);
      let c = docSnap.data().favoriteStocks;
      console.log(c);
      return c;
    },
    checkTicker(tickerRaw) {
      return new Promise((resolve, reject) => {
        const finnhub = require("finnhub");

        const api_key = finnhub.ApiClient.instance.authentications["api_key"];
        api_key.apiKey = "cd99b8aad3i97v8iq5tgcd99b8aad3i97v8iq5u0";
        const finnhubClient = new finnhub.DefaultApi();
        tickerRaw = tickerRaw.toUpperCase();
        console.log("TICKER RAW: " + tickerRaw);

        finnhubClient.companyProfile2({ symbol: tickerRaw }, (error, data) => {
          if (error) {
            alert("Unknown Ticker!");
            reject("unknownticker");
          } else {
            console.log("no errors in symbol search!");
            console.log(data);
            if (data.ticker == "" || data.ticker == null) {
              alert("Unknown Ticker!");
              reject("unknownticker");
            } else {
              tickerRaw = data.ticker;
              console.log("SET TICKER VIA FINNHUB" + tickerRaw);
              resolve(tickerRaw);
            }
          }
        });
      });
    },
    async savetofs() {
      let tickerRaw = await this.checkTicker(
        document.getElementById("stockSearch").value
      );
      console.log("SAVE TO FS: TICKERRAW: " + tickerRaw);

      if (tickerRaw == "unknownticker") {
        alert("Unknown Ticker!");
        return;
      }
      if (tickerRaw == "") {
        alert("Stock cannot be empty");
        return;
      } else {
        // let b = await this.getUserId();
        let b = this.uid;
        let docRef = doc(db, "profiles", b);
        let docSnap = await getDoc(docRef);
        let c = docSnap.data().favoriteStocks;
        let ticker = tickerRaw.toUpperCase();
        if (c.includes(ticker)) {
          alert("Favorites list already has ticker");
          return;
        }
        c.push(ticker);
        setDoc(
          doc(db, "profiles", b),
          {
            favoriteStocks: c,
          },
          { merge: true }
        )
          .then(() => {
            console.log("updated...");
            alert("Profile Updated Successfully!");
            location.reload();
            // this.$forceUpdate;
            // this.$mount();
          })
          .catch((error) => {
            //error
            console.error(
              "oh no something went wrong with setting favorite stocks!" + error
            );
          });
      }
    },
    // getUserId() {
    //   return new Promise((resolve, reject) => {
    //     getAuth().onAuthStateChanged((user) => {
    //       if (user) {
    //         const uid = user.uid;
    //         console.log("1st uid:" + uid);
    //         resolve(uid);
    //       } else {
    //         console.log("sad didnt work.");
    //         reject();
    //       }
    //     });
    //   });
    // },
    async removeStocks() {
      let toDelete = this.$store.state.stocksToDelete;
      let currentStocks = await this.getFavStocks();
      if (toDelete.length < 1) {
        alert(
          "No stocks to delete! Click on the ticker and highlight the stocks to delete."
        );
        this.close2();
        return;
      }
      for (let i = 0; i < toDelete.length; i++) {
        let index = currentStocks.indexOf(toDelete[i]);
        currentStocks.splice(index, 1);
      }
      console.log(currentStocks);
      // let b = await this.getUserId();
      let b = this.uid;
      setDoc(
        doc(db, "profiles", b),
        {
          favoriteStocks: currentStocks,
        },
        { merge: true }
      )
        .then(() => {
          console.log("updated...");
          alert("Stocks Removed!");
          location.reload();
          // this.$mount();
        })
        .catch((error) => {
          //error
          console.error(
            "oh no something went wrong with setting favorite stocks!" + error
          );
        });
    },
  },
};
</script>

<style>
.Watch-List-Outer {
  border-radius: 10px;
  border: 1px solid black;
  margin-right: 2.5%;
  margin-left: 2.5%;
  margin-bottom: 10px;
  width: 95%;
  padding: 1%;
}

.Watch-List-Title {
  margin-left: 5%;
}

.Long-Card-Buttons {
  margin-left: 5%;
}

.Watch-List-Content {
  margin-top: 2%;
  margin-left: 5%;
  margin-right: 5%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.modal {
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 200%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
  border-radius: 10px;
}

.box {
  background-color: blanchedalmond;
  padding: 50px;
  border-radius: 10px;
  border-color: black;
}
</style>
