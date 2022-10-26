<template>
    <div style="text-align:center" v-if="user">
        <h3>Page Not Found !!</h3>
        <h4>Please click on the above available options</h4>
        <br>
    </div>
    </template>
    
    <script>
    import {getAuth, onAuthStateChanged } from "firebase/auth";
    
    export default {
        name:"NotFound", 
    
        components:{

        },
    
        data() {
            return {
                user:false,
            }
        },
    
        mounted() {
            const auth = getAuth();
            onAuthStateChanged(auth, (user) => {
                if(user) {
                    this.user = user;
                }
            })
        }
    }
    </script>