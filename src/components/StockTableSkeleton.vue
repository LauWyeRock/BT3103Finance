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
    <tr>
      <td><div class="column-item" /></td>
      <td><div class="column-item" /></td>
      <td><div class="column-item" /></td>
      <td><div class="column-item" /></td>
      <td><div class="column-item" /></td>
      <td><div class="column-item" /></td>
    </tr>
    <tr>
      <td><div class="column-item" /></td>
      <td><div class="column-item" /></td>
      <td><div class="column-item" /></td>
      <td><div class="column-item" /></td>
      <td><div class="column-item" /></td>
      <td><div class="column-item" /></td>
    </tr>
    <tr>
      <td><div class="column-item" /></td>
      <td><div class="column-item" /></td>
      <td><div class="column-item" /></td>
      <td><div class="column-item" /></td>
      <td><div class="column-item" /></td>
      <td><div class="column-item" /></td>
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
    <tr>
      <td><div class="column-item" /></td>
      <td><div class="column-item" /></td>
      <td><div class="column-item" /></td>
      <td><div class="column-item" /></td>
      <td><div class="column-item" /></td>
      <td><div class="column-item" /></td>
      <td><div class="column-item" /></td>
      <td><div class="column-item" /></td>
      <td><div class="column-item" /></td>
    </tr>
    <tr>
      <td><div class="column-item" /></td>
      <td><div class="column-item" /></td>
      <td><div class="column-item" /></td>
      <td><div class="column-item" /></td>
      <td><div class="column-item" /></td>
      <td><div class="column-item" /></td>
      <td><div class="column-item" /></td>
      <td><div class="column-item" /></td>
      <td><div class="column-item" /></td>
    </tr>
    <tr>
      <td><div class="column-item" /></td>
      <td><div class="column-item" /></td>
      <td><div class="column-item" /></td>
      <td><div class="column-item" /></td>
      <td><div class="column-item" /></td>
      <td><div class="column-item" /></td>
      <td><div class="column-item" /></td>
      <td><div class="column-item" /></td>
      <td><div class="column-item" /></td>
    </tr>
  </table>
</template>

<script>
export default { props: ["isByVolume"] };
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
</style>
