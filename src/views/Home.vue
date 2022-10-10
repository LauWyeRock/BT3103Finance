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
    }
  }
  </script>