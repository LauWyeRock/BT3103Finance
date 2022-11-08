<template>
  <div className="Watch-List-Outer">
    <h1 className="Watch-List-Title">Favourite Stocks/Cryptocurrencies</h1>
    <div className="Watch-List-Content">
      <div className="Long-Card-Buttons" v-for="item in favorites" :key = "item">
        <StockTickerCard :ticker="item"/>
      </div>
    </div>
    <div className="Long-Card-Buttons">
        <button @click = "open()">Add Stock</button>
        <button @click = "open2()"> Remove Stocks</button>
    </div>
    <teleport to = "body">
			<div class = "modal" v-if="isOpen">
        <div class = "box"> 
          <h2> Add a stock here </h2><br>
          <div class="searchdiv">
            <input type="text" id= "stockSearch" class="searchbar" placeholder="Search Stock..." />
          </div>
          <button class = "confirm" @click = "savetofs()"> Confirm </button>
          <button class = "close" @click = close()> Close </button>
        </div>
      </div>
    </teleport>
    <teleport to = "body">
			<div class = "modal" v-if="isOpen2"> 
        <div class = "box">
					<h2> Are you sure? </h2><br>
          <button class = "confirm" @click = close2()> Yes </button>
          <button class = "close" @click = close2()> No </button>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script>
import { ref } from 'vue';
import StockTickerCard from "./StockTickerCard.vue";
import { getAuth } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "@/firebase/firebase";
export default { 
  components: { StockTickerCard },
  async created() {
    this.favorites = await this.getFavStocks();
  },
  data() {
    return {
        isOpen: ref(false),
        isOpen2: ref(false),
        toDelete: [], //array of strings
        favorites: [],
    }
  },
  methods: {
    open() { this.isOpen = true },
		close() { this.isOpen = false },
    open2() { this.isOpen2 = true },
		close2() { this.isOpen2 = false },
    async getFavStocks() {
      let b = await this.getUserId();
      let docRef = doc(db, "profiles", b);
      let docSnap = await getDoc(docRef);
      let c = docSnap.data().favoriteStocks;
      console.log(c);
      return c;
    },
    async savetofs() {
        let uid = document.getElementById("stockSearch").value;
        if (uid == "") {
          alert("Stock cannot be empty")
          return
        } else {
          let b = await this.getUserId();
          let docRef = doc(db, "profiles", b);
          let docSnap = await getDoc(docRef);
          let c = docSnap.data().favoriteStocks;
          let ticker = uid.toUpperCase();
          if (c.includes(ticker)) {
            alert("Favorites list already has ticker")
            return
          }
          c.push(ticker);
          setDoc(
            doc(db, "profiles", b),
            {
              favoriteStocks: c
            },
            { merge: true }
          )
            .then(() => {
              console.log("updated...");
              alert("Profile Updated Successfully!");
            })
            .catch((error) => {
              //error
              console.error(
                "oh no something went wrong with setting favorite stocks!" + error
              );
            });
        }
    },
    getUserId() {
      return new Promise((resolve, reject) => {
        getAuth().onAuthStateChanged((user) => {
          if (user) {
            const uid = user.uid;
            console.log("1st uid:" + uid);
            resolve(uid);
          } else {
            console.log("sad didnt work.");
            reject();
          }
        });
      });
    },
    removeStocks() {
        alert("stocks removed")
    }
  }
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
	background-color: rgba(0,0,0,0.1);
	width: 100%;
	height: 200%;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 50px;
  border-radius: 10px
}

.box{
  background-color: blanchedalmond;
  padding: 50px;
  border-radius: 10px;
  border-color: black
}
</style>
