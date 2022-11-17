<template>
  <div class="hello">
    <AddStock :myUid="portfolio.userId" />
    <ProfitDisplay />
    <TransactionHistory :myUid="portfolio.userId" />
  </div>
</template>

<script>
import AddStock from "./AddStock.vue";
import ProfitDisplay from "./ProfitDisplay.vue";
import TransactionHistory from "./TransactionHistory.vue";
import { getAuth } from "firebase/auth";
import { db } from "@/firebase/firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";

export default {
  name: "App",
  components: {
    AddStock,
    ProfitDisplay,
    TransactionHistory,
  },
  async setup() {
    try {
      var portfolio = await getPortfolio();
      if (portfolio == null) {
        //might be creating new portfolio, call get a second time.
        console.log("Attempting second fetch...");
        portfolio = await getPortfolio();
      }
      console.log("got portfolio: ");
      console.log(portfolio);
    } catch (e) {
      console.error("Error in mounted" + e);
    }
    return {
      portfolio,
    };
  },
};
function getUserId() {
  return new Promise((resolve, reject) => {
    getAuth().onAuthStateChanged((user) => {
      if (user) {
        const uid = user.uid;
        resolve(uid);
      } else {
        console.log("sad didnt work.");
        reject();
      }
    });
  });
}
async function getPortfolio() {
  const uid = await getUserId();

  const docRef = doc(db, "portfolio", uid);

  console.log("got docref");
  const docSnap = await getDoc(docRef);
  console.log("get for docsnap");

  if (docSnap.exists()) {
    const data = docSnap.data();
    console.info("successfully got portfolio: " + data);
    return data;
  } else {
    //create a new portfolio for user who does not have a portfolio.
    await setDoc(doc(db, "portfolio", uid), {
      money: 1000000,
      userId: uid,
    })
      .then(() => {
        console.log("created new portfolio for user...");
      })
      .catch((error) => {
        //error
        console.error(
          "oh no something went wrong with creating new profile!" + error
        );
      });
  }
}
</script>

<style scoped>
.hello {
  background-image: repeating-linear-gradient(
    rgba(240, 235, 244, 1),
    rgba(161, 195, 209, 0.75),
    rgba(241, 114, 161, 0.5)
  );
}
</style>
