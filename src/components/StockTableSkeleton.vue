<template>
  <table v-if="isByVolume">
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
    <tr>
      <td>
        <div class="column-item" />
      </td>
      <td>
        <div class="column-item" />
      </td>
      <td>
        <div class="column-item" />
      </td>
      <td>
        <div class="column-item" />
      </td>
      <td>
        <div class="column-item" />
      </td>
      <td>
        <div class="column-item" />
      </td>
    </tr>
    <tr>
      <td>
        <div class="column-item" />
      </td>
      <td>
        <div class="column-item" />
      </td>
      <td>
        <div class="column-item" />
      </td>
      <td>
        <div class="column-item" />
      </td>
      <td>
        <div class="column-item" />
      </td>
      <td>
        <div class="column-item" />
      </td>
    </tr>
    <tr>
      <td>
        <div class="column-item" />
      </td>
      <td>
        <div class="column-item" />
      </td>
      <td>
        <div class="column-item" />
      </td>
      <td>
        <div class="column-item" />
      </td>
      <td>
        <div class="column-item" />
      </td>
      <td>
        <div class="column-item" />
      </td>
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
    <tr>
      <td>
        <div class="column-item" />
      </td>
      <td>
        <div class="column-item" />
      </td>
      <td>
        <div class="column-item" />
      </td>
      <td>
        <div class="column-item" />
      </td>
      <td>
        <div class="column-item" />
      </td>
      <td>
        <div class="column-item" />
      </td>
    </tr>
    <tr>
      <td>
        <div class="column-item" />
      </td>
      <td>
        <div class="column-item" />
      </td>
      <td>
        <div class="column-item" />
      </td>
      <td>
        <div class="column-item" />
      </td>
      <td>
        <div class="column-item" />
      </td>
      <td>
        <div class="column-item" />
      </td>
    </tr>
    <tr>
      <td>
        <div class="column-item" />
      </td>
      <td>
        <div class="column-item" />
      </td>
      <td>
        <div class="column-item" />
      </td>
      <td>
        <div class="column-item" />
      </td>
      <td>
        <div class="column-item" />
      </td>
      <td>
        <div class="column-item" />
      </td>
    </tr>
  </table>
</template>

<script>
import ToolTip from "@/components/ToolTip";

export default {
  components: {
    ToolTip,
  }, props: ["isByVolume"]
};
</script>

<style>
.column-item {
  content: " ";
  width: 70%;
  height: 16px;
  animation: pulse-bg 1s infinite;
}

@keyframes pulse-bg {
  0% {
    background-color: #ddd;
  }

  50% {
    background-color: #d0d0d0;
  }

  100% {
    background-color: #ddd;
  }
}

.header-text {
  border-bottom: 1px dotted black;
}
</style>
