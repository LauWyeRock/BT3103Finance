<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="hello">
        <Chart />
        <TechnicalAnalysis />
        <Screener />
        <Snaps />
        <MarketOverview />
        <MarketData />
        <StockMarket />
        <EconomicCalendar />
    </div>
  </template>
  
  <script>
  import { Chart,TechnicalAnalysis, Snaps, Screener, MarketOverview, MarketData, StockMarket, EconomicCalendar } from 'vue-tradingview-widgets';

  export default {
    name: 'HelloWorld',
    components: {
      Chart,
      TechnicalAnalysis,
      Screener,
      Snaps,
      MarketData,
      MarketOverview,
      StockMarket,
      EconomicCalendar
    },
  mounted() {
		if (localStorage.getItem('reloaded')) {
			// The page was just reloaded. Clear the value from local storage
			// so that it will reload the next time this page is visited.
			localStorage.removeItem('reloaded');
		} else {
			// Set a flag so that we know not to reload the page twice.
			localStorage.setItem('reloaded', '1');
			location.reload();
		}
	}
}
  </script>