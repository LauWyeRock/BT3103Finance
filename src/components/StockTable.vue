<template>
  <table v-if="isByVolume" role="table">
    <tr role="row">
      <th role="columnheader">
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
      <td class="by-volume-column">{{ stock.symbol }}</td>
      <td class="by-volume-column">{{ stock.name }}</td>
      <td class="by-volume-column">{{ numberWithCommas(stock.volume) }}</td>
      <td class="by-volume-column">${{ stock.price }}</td>
      <td class="by-volume-column">${{ numberWithCommas(stock.market_cap) }}</td>
      <td class="by-volume-column">{{ recommendationConvert(stock.recommendation) }}</td>
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
        <ToolTip text="Company's Full Name">
          <span class="header-text">Name</span>
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
      <td class="by-sentiment-column">{{ stock.symbol }}</td>
      <td class="by-sentiment-column">{{ stock.name }}</td>
      <td class="by-sentiment-column">{{ numberWithCommas(stock.activity) }}</td>
      <td class="by-sentiment-column">{{ numberWithCommas(stock.negative_score) }}</td>
      <td class="by-sentiment-column">{{ numberWithCommas(stock.positive_score) }}</td>
      <td class="by-sentiment-column">{{ numberWithCommas(stock.score) }}</td>
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
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

td,
th {
  text-align: left;
  padding: 2vh;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

.header-text {
  border-bottom: 1px dotted black;
}

@media only screen and (max-width: 842px),
(min-device-width: 768px) and (max-device-width: 1024px) {

  /* Force table to not be like tables anymore */
  table,
  thead,
  tbody,
  th,
  td,
  tr {
    display: block;
  }

  /* Hide table headers (but not display: none;, for accessibility) */
  thead tr {
    position: absolute;
    top: -9999px;
    left: -9999px;
  }

  tr {
    margin: 0 0 1rem 0;
  }

  tr:nth-child(even) {
    background: #f2f2f2;
  }

  td {
    /* Behave  like a "row" */
    border: none;
    position: relative;
    padding-left: 50%;
  }

  td:before {
    /* Now like a table header */
    position: absolute;
    /* Top/left values mimic padding */
    top: 0;
    left: 6px;
    width: 45%;
    padding-right: 10px;
    white-space: nowrap;
  }

  /*
  Label the data
  You could also use a data-* attribute and content for this. That way "bloats" the HTML, this way means you need to keep HTML and CSS in sync. Lea Verou has a clever way to handle with text-shadow.
  */
  .by-volume-column:nth-of-type(1):before {
    padding: 2vh;
    font-weight: bold;
    content: "Asset";
  }

  .by-volume-column:nth-of-type(2):before {
    padding: 2vh;
    font-weight: bold;
    content: "Name";
  }

  .by-volume-column:nth-of-type(3):before {
    padding: 2vh;
    font-weight: bold;
    content: "Volume";
  }

  .by-volume-column:nth-of-type(4):before {
    padding: 2vh;
    font-weight: bold;
    content: "Price";
  }

  .by-volume-column:nth-of-type(5):before {
    padding: 2vh;
    font-weight: bold;
    content: "Market Cap";
  }

  .by-volume-column:nth-of-type(6):before {
    padding: 2vh;
    font-weight: bold;
    content: "Recommendation";
  }

  .by-sentiment-column:nth-of-type(1):before {
    padding: 2vh;
    font-weight: bold;
    content: "Asset";
  }

  .by-sentiment-column:nth-of-type(2):before {
    padding: 2vh;
    font-weight: bold;
    content: "Activity";
  }

  .by-sentiment-column:nth-of-type(3):before {
    padding: 2vh;
    font-weight: bold;
    content: "Negative Score";
  }

  .by-sentiment-column:nth-of-type(4):before {
    padding: 2vh;
    font-weight: bold;
    content: "Positive Score";
  }

  .by-sentiment-column:nth-of-type(5):before {
    padding: 2vh;
    font-weight: bold;
    content: "Score";
  }
}
</style>
