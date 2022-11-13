
import { db } from '@/firebase/firebase';
//import { doc, getDoc, orderBy, collection, getDocs } from 'firebase/firestore';
import {  orderBy, collection, getDocs } from 'firebase/firestore';

import { getAuth, onAuthStateChanged } from "firebase/auth";

import { createStore } from 'vuex';


export default createStore({
    mounted() {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
          if (user) {
            this.user = user;
          }
        })
      },
      data() {
        return {
          user:false,
        }
      },
    state: {
        blogPosts: [],
        stocksToDelete: [],
        postLoaded:null,
        editPost:null,
        user:null,
        profileEmail:null,
        profileId: null,
        exchangeTicker: "NYSE:GME",
        blogHTML: "Write your blog here...",
        blogTitle: "",
        blogPhotoName: "",
        blogPhotoFileURL: null,
        blogPhotoPreview: null,
    },
    
    mutations: {
        modifyStocksToDelete(state, payload) {
            state.stocksToDelete = payload;
        },
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
        setProfileInfo1(state,payload) {
            state.profileEmail = payload;
        },
        setProfileInfo2(state,payload) {
            state.profileId = payload;
        },
        updateExchangeTicker(state, exchangeTicker) {
            state.exchangeTicker = exchangeTicker
        }
    },
    actions: {
        async getCurrentUser({commit}) {
            // const dbResults = await getDoc(doc(db, "users", this.user.uid))
            // commit("setProfileInfo", dbResults)
            commit("setProfileInfo1", this.user.uid)
            commit("setProfileInfo2", this.user.email)
        },
        async getPost({ state }) {
            const dataBase = await getDocs(collection(db, "blogPosts"), orderBy("date", "desc"))
            //const dataBase = await query(collection(db, "blogPosts"), orderBy("date", "desc"));
            dataBase.forEach((doc) => {
                if (!state.blogPosts.some((post) => post.blogID === doc.id)) {
                    const data = {
                        blogID: doc.data().blogID,
                        blogHTML: doc.data().blogHTML,
                        blogCoverPhoto: doc.data().blogCoverPhoto,
                        blogTitle: doc.data().blogTitle,
                        blogDate: doc.data().date,
                    };
                    state.blogPosts.push(data)
                }
            });
            state.postLoaded = true;
            console.log(state.blogPosts)
        },
        async setStocksToDelete({ commit }, value) {
            let a = this.state.stocksToDelete;
            a.push(value);
            commit('modifyStocksToDelete', a);
        },
        async removeStocksToDelete({ commit }, value) {
            let a = this.state.stocksToDelete;
            let b = a.indexOf(value);
            a.splice(b, 1);
            commit('modifyStocksToDelete', a);
        },
        async resetStocks({ commit }) {
            commit('modifyStocksToDelete', []);
        }   
        
    },
    getters: {
        getStock: (state) => {
            return `${state.exchangeTicker}`
        },
        blogPostsFeed(state) {
            return state.blogPosts.slice(0,2)
        },
        blogPostsCards(state) {
            return state.blogPosts.slice(2,6)
        },
        blogPosts(state) {
            return state.blogPosts
        },
        getStocksToDelete(){
            return this.$store.state.exchangeTicker;
        },
    },
    modules: {},
})