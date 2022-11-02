<template>
  <table v-if="isByVolume">
    <tr>
      <th>
        <ToolTip
          text="A resource with economic value that an individual, corporation, or country owns or controls with the expectation that it will provide a future benefit"
        >
          <span>Asset</span>
        </ToolTip>
      </th>
      <th>
        <ToolTip text="Company's Full Name">
          <span>Name</span>
        </ToolTip>
      </th>
      <th>
        <ToolTip
          text="The amount of an asset or security that changes hands over some period of time, often over the course of a day"
        >
          <span>Volume</span>
        </ToolTip>
      </th>
      <th>
        <ToolTip
          text="The current price that a share of stock is trading for on the market"
        >
          <span>Price</span>
        </ToolTip>
      </th>
      <th>
        <ToolTip
          text="Market capitalization refers to how much a company is worth as determined by the stock market"
        >
          <span>Market Cap</span>
        </ToolTip>
      </th>
      <th>
        <ToolTip text="Analyst buy, hold and sell ratings">
          <span>Recommendation</span>
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
          text="A resource with economic value that an individual, corporation, or country owns or controls with the expectation that it will provide a future benefit"
        >
          <span>Asset</span>
        </ToolTip>
      </th>
      <th>
        <ToolTip
          text="Total number of times asset has been mentioned on Reddit"
        >
          <span>Reddit Total Mentions</span>
        </ToolTip>
      </th>
      <th>
        <ToolTip
          text="Total number of times asset has been negatively mentioned on Reddit"
        >
          <span>Reddit Total Negative Score</span>
        </ToolTip>
      </th>
      <th>
        <ToolTip
          text="Total number of times asset has been positively mentioned on Reddit"
        >
          <span>Reddit Total Positive Score</span>
        </ToolTip>
      </th>
      <th>
        <ToolTip
          text="Final score based on positive and negative mentions on Reddit"
        >
          <span>Reddit Total Score</span>
        </ToolTip>
      </th>
      <th>
        <ToolTip
          text="Total number of times asset has been mentioned on Twitter"
        >
          <span>Twitter Total Mentions</span>
        </ToolTip>
      </th>
      <th>
        <ToolTip
          text="Total number of times asset has been negatively mentioned on Twitter"
        >
          <span>Twitter Total Negative Score</span>
        </ToolTip>
      </th>
      <th>
        <ToolTip
          text="Total number of times asset has been positively mentioned on Twitter"
        >
          <span>Twitter Total Positive Score</span>
        </ToolTip>
      </th>
      <th>
        <ToolTip
          text="Final score based on positive and negative mentions on Twitter"
        >
          <span>Twitter Total Score</span>
        </ToolTip>
      </th>
    </tr>
    <tr v-for="stock in stocksInfo.Stocks" v-bind:key="stock.symbol">
      <td>{{ stock.symbol }}</td>
      <td>{{ numberWithCommas(stock.reddit_total_mentions) }}</td>
      <td>{{ percentageConvert(stock.reddit_total_negative_score) }}%</td>
      <td>{{ percentageConvert(stock.reddit_total_positive_score) }}%</td>
      <td>{{ percentageConvert(stock.reddit_total_score) }}%</td>
      <td>{{ numberWithCommas(stock.twitter_total_mentions) }}</td>
      <td>{{ percentageConvert(stock.twitter_total_negative_score) }}%</td>
      <td>{{ percentageConvert(stock.twitter_total_positive_score) }}%</td>
      <td>{{ percentageConvert(stock.twitter_total_score) }}%</td>
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
</style>
