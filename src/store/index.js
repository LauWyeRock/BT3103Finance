import { db } from '@/firebase/firebase';
import Vue from 'vue';
import Vuex from "vuex"


Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        sampleBlogCards:[],
        editPost:null,
        user:null,
        profileEmail:null,
        profileId: null,
    },
    mutations: {
        toggleEditPost(state, payload) {
            state.editPost = payload;
        },
        updateUser(state, payload) {
            state.user = payload
        },
        setProfileInfo(state, doc) {
            state.profileId = doc.id;
            state.profileEmail = doc.data().email;
            
        },
    },
    actions: {
        async getCurrentUser({commit}) {
            const dataBase = await db.collection("users").doc(firebase.auth().currentUser.uid)
            const dbResults = await dataBase.get();
            commit("setProfileInfo", dbResults)
        },
    },
    modules: {},
})