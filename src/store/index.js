import { db } from '@/firebase/firebase';
//import Vue from 'vue';
import { createStore } from "vuex"


//Vue.use(Vuex);

export default createStore({
    state: {
        sampleBlogCards:[],
        editPost:null,
        user:null,
        profileEmail:null,
        profileId: null,
        exchangeTicker: "NYSE:GME"
    }
    ,
    mutations: {
        toggleEditPost(state, payload) {
            state.editPost = payload;
        },
        updateUser(state, payload) {
            state.user = payload
        },
        setProfileInfo(state, doc) {
            state.profileId = doc.id;
            state.profileEmail = doc.data().email
        },
        updateExchangeTicker(state, exchangeTicker) {
            state.exchangeTicker = exchangeTicker
        }
    },
    actions: {
        async getCurrentUser({commit}) {
            const dataBase = await db.collection("users").doc(db.auth().currentUser.uid)
            const dbResults = await dataBase.get();
            commit("setProfileInfo", dbResults)
        }
    },
    getters: {
        getStock: (state) => {
            return `${state.exchangeTicker[state.exchangeTicker.length - 1]}`
        }
    },
    //computed: {
    //    stockTicker: storeKey.state.stockTicker
    //},
    modules: {},
})