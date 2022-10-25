<template>
  <table v-if="isByVolume">
    <tr>
      <th>Asset</th>
      <th>Name</th>
      <th>Volume</th>
      <th>Price</th>
      <th>Market Cap</th>
      <th>Recommendation</th>
    </tr>
    <tr v-for="stock in stocksInfo.Stocks" v-bind:key="stock.symbol">
      <td>{{ stock.symbol }}</td>
      <td>{{ stock.name }}</td>
      <td>{{ numberWithCommas(stock.volume) }}</td>
      <td>${{ stock.price }}</td>
      <td>${{ numberWithCommas(stock.market_cap) }}</td>
      <td>{{ recommendationConvert(stock.recommendation) }}</td>
    </tr>
  </table>
  <table v-else>
    <tr>
      <th>Asset</th>
      <th>Reddit Total Mentions</th>
      <th>Reddit Total Negative Score</th>
      <th>Reddit Total Positive Score</th>
      <th>Reddit Total Score</th>
      <th>Twitter Total Mentions</th>
      <th>Twitter Total Negative Score</th>
      <th>Twitter Total Positive Score</th>
      <th>Twitter Total Score</th>
    </tr>
    <tr v-for="stock in stocksInfo.Stocks" v-bind:key="stock.symbol">
      <td>{{ stock.symbol }}</td>
      <td>{{ numberWithCommas(stock.reddit_total_mentions) }}</td>
      <td>{{ stock.reddit_total_negative_score }}</td>
      <td>{{ stock.reddit_total_positive_score }}</td>
      <td>{{ stock.reddit_total_score }}</td>
      <td>{{ numberWithCommas(stock.twitter_total_mentions) }}</td>
      <td>{{ stock.twitter_total_negative_score }}</td>
      <td>{{ stock.twitter_total_positive_score }}</td>
      <td>{{ stock.twitter_total_score }}</td>
    </tr>
  </table>
</template>

<script>
export default {
  props: ["isByVolume", "stocksInfo"],
  methods: {
    numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    recommendationConvert(x) {
      let converted = "";
      let fields = x.split("_");
      for (let i = 0; i < fields.length; i++) {
        // console.log(fields);
        // converted += fields[i].charAt(0).toUppercase() + fields[i].slice(1);
        if (i !== fields.length - 1) {
          converted +=
            fields[i].charAt(0).toUpperCase() + fields[i].slice(1) + " ";
        } else {
          converted += fields[i].charAt(0).toUpperCase() + fields[i].slice(1);
        }
      }
      return converted;
    },
  },
};
</script>

<style>
table {
  border-collapse: collapse;
  width: 100%;
  margin: auto;
  margin-bottom: 2vh;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 1vh;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}
</style>
