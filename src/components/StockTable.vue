<template>
  <table v-if="isByVolume">
    <tr>
      <th>
        <ToolTip
          text="A resource with economic value that an individual, corporation, or country owns or controls with the expectation that it will provide a future benefit">
          <span class="header-text">Asset</span>
        </ToolTip>
      </th>
      <th>
        <ToolTip text="Company's Full Name">
          <span class="header-text">Name</span>
        </ToolTip>
      </th>
      <th>
        <ToolTip
          text="The amount of an asset or security that changes hands over some period of time, often over the course of a day">
          <span class="header-text">Volume</span>
        </ToolTip>
      </th>
      <th>
        <ToolTip text="The current price that a share of stock is trading for on the market">
          <span class="header-text">Price</span>
        </ToolTip>
      </th>
      <th>
        <ToolTip text="Market capitalization refers to how much a company is worth as determined by the stock market">
          <span class="header-text">Market Cap</span>
        </ToolTip>
      </th>
      <th>
        <ToolTip text="Analyst buy, hold and sell ratings">
          <span class="header-text">Recommendation</span>
        </ToolTip>
      </th>
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
      <th>
        <ToolTip
          text="A resource with economic value that an individual, corporation, or country owns or controls with the expectation that it will provide a future benefit">
          <span class="header-text">Asset</span>
        </ToolTip>
      </th>
      <th>
        <ToolTip text="Total likes and shares for the posts analyzed">
          <span class="header-text">Activity</span>
        </ToolTip>
      </th>
      <th>
        <ToolTip text="Weighted average of negative posts found on social media">
          <span class="header-text">Negative Score</span>
        </ToolTip>
      </th>
      <th>
        <ToolTip text="Weighted average of positive posts found on social media">
          <span class="header-text">Positive Score</span>
        </ToolTip>
      </th>
      <th>
        <ToolTip text="Weighted average of positive, negative, and neutral posts found on social media">
          <span class="header-text">Score</span>
        </ToolTip>
      </th>
    </tr>
    <tr v-for="stock in stocksInfo.Stocks" v-bind:key="stock.symbol">
      <td>{{ stock.symbol }}</td>
      <td>{{ numberWithCommas(stock.activity) }}</td>
      <td>{{ numberWithCommas(stock.negative_score) }}</td>
      <td>{{ numberWithCommas(stock.positive_score) }}</td>
      <td>{{ numberWithCommas(stock.score) }}</td>
    </tr>
  </table>
</template>

<script>
import ToolTip from "@/components/ToolTip";

export default {
  components: {
    ToolTip,
  },
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
    percentageConvert(x) {
      // let y = Number.parseFloat(x).toFixed(3);
      return Math.round(x.toPrecision(3) * 100);
      // return Math.round(x.toFixed(3) * 100);
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

.header-text {
  border-bottom: 1px dotted black;
}
</style>
