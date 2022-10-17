import { db, auth } from '@/firebase/firebase';
import { doc, getDoc } from 'firebase/firestore';
import Vue from 'vue';
import Vuex from "vuex"


Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        sampleBlogCards: [
            { blogTitle: "Blog Card #1", blogCoverPhoto: "stock-1", blogDate: "May 1, 2022"},
            { blogTitle: "Blog Card #2", blogCoverPhoto: "stock-2", blogDate: "May 1, 2022"},
            { blogTitle: "Blog Card #3", blogCoverPhoto: "stock-3", blogDate: "May 1, 2022"},
            { blogTitle: "Blog Card #4", blogCoverPhoto: "stock-4", blogDate: "May 1, 2022"},
        ],
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
            const dbResults = await getDoc(doc(db, "users", auth.currentUser.uid))
            //const dataBase = await db.collection("users").doc(auth.currentUser.uid)
            commit("setProfileInfo", dbResults)
        },
    },
    modules: {},
})