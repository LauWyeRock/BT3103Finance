
import { db, auth } from '@/firebase/firebase';
import { doc, getDoc } from 'firebase/firestore';

import { createStore } from 'vuex';


// eslint-disable-next-line no-undef
// export const store =  new Vuex.Store({ // export default new Vuex.Store

export default createStore({
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
        exchangeTicker: "NYSE:GME"
        blogHTML: "Write your blog here...",
        blogTitle: "",
        blogPhotoName: "",
        blogPhotoFileURL: null,
        blogPhotoPreview: null,
    },
    mutations: {
        newBlogPost(state, payload) {
            state.blogHTML = payload;
        },
        updateBlogTitle(state,payload) {
            state.blogTitle = payload;
        },
        fileNameChange(state,payload) {
            state.blogPhotoName = payload;
        },
        createFileURL(state,payload) {
            state.blogPhotoFileURL = payload;
        },
        openPhotoPreview(state) {
            state.blogPhotoPreview = !state.blogPhotoPreview
        },
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
            //const dataBase = await db.collection("users").doc(db.auth().currentUser.uid)
            const dbResults = await dataBase.get();
            const dbResults = await getDoc(doc(db, "users", auth.currentUser.uid))
            //const dataBase = await db.collection("users").doc(auth.currentUser.uid)
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