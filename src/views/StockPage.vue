<template>
<div class="tradingview-widget-container">
    <div id="tradingview_4894e"></div>
    <div class="tradingview-widget-copyright">
		<div class = "Hello" style = "float: left; border-color: black; border-radius: 5px;">
			<SymbolInfo
			:options = "{symbol: getStock, theme: 'dark', width: 970, isTransparent: true}"/>
			<Chart
			:options = "{
					theme: 'dark',
					autosize: false,
					symbol: getStock,
					allow_symbol_change: false,
					height: 632.5,
			}"/>
		</div>
			<div> 
				<StockInDepthData :title="getStock"/>
			</div>
	</div>
	<div style = "display: flex; flex-direction: row;">
		<TechnicalAnalysis :options = "{symbol: getStock, isTransparent: true}"/>
	</div>
	<div style = "display: flex; align-items: center;">
		<FundamentalData :options = "{symbol: getStock, width: 666, height: 600, isTransparent: true}"/>
		<CompanyProfile :options = "{symbol: getStock, width: 700, height: 600, isTransparent: true}"/>
	</div>
</div>

</template>

<script>
//import {src} from "https://s3.tradingview.com/tv.js"
import { Chart, TechnicalAnalysis, CompanyProfile, SymbolInfo, FundamentalData  } from 'vue-tradingview-widgets';
import StockInDepthData from '@/components/StockInDepthData'
//import QuizPopup from '@/components/QuizPopup'

export default {
    name: 'HelloWorld',
    components: {
		Chart, TechnicalAnalysis, CompanyProfile, SymbolInfo, FundamentalData , StockInDepthData
    },
	mounted() {
		if (localStorage.getItem('reloaded')) {
			// The page was just reloaded. Clear the value from local storage
			// so that it will reload the next time this page is visited
			localStorage.removeItem('reloaded');
		} else {
			// Set a flag so that we know not to reload the page twice.
			localStorage.setItem('reloaded', '1');
			//localStorage.setItem('stock', this.$store.state.exchangeTicker)
			localStorage.setItem('stock', this.$route.params.stock)
			location.reload()
			console.log(Chart)
		}
	},
	computed: {
		getStock() {
			return localStorage.getItem('stock')
		}
	},
}
</script>

<style scoped>
.tradingview-widget-container {
  background: repeating-linear-gradient(
    rgba(240, 235, 244, 1),
    rgba(161, 195, 209, 0.75),
    rgba(241, 114, 161, 0.5)
  );
}

</style>