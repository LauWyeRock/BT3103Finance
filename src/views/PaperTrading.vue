<template>
    <Navigation />
  <!-- <AddCoin @added="change"/>
  <ProfitDisplay :key="refreshComp" /> -->
  </template>
  
  <script>
    //   import AddCoin from '../components/AddCoin.vue';
    //   import ProfitDisplay from '../components/ProfitDisplay.vue';
      
      export default {
          name: "App",
          components: {  },
          data(){
            return{
              refreshComp:0
            }
          },
          methods:{
            change(){
              this.refreshComp+=1 
            }
          }
      }
      </script>