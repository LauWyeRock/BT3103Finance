<template>
  <div class="hello">
  <AddStock @added="change" />
  <ProfitDisplay :key="refreshComp" />
</div>
</template>

<script>
  import AddStock from '../components/AddStock.vue';
  import ProfitDisplay from '../components/ProfitDisplay.vue';

export default {
  name: "App",
  components: {
    AddStock,
    ProfitDisplay,
  },
  data() {
    return {
      refreshComp: 0,
    };
  },
  methods: {
    change() {
      this.refreshComp += 1;
    },
  },
};
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
