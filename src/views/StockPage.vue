<template>
    <div class="tradingview-widget-container">
    <div id="tradingview_4894e"></div>
    <div class="tradingview-widget-copyright">
		<div class = "Hello" style = "float: left">
				<SymbolInfo
				:options = "{symbol: getStock, theme: 'dark'}"/>
				<Chart
				:options = "{
					autosize: false,
					theme: 'dark',
					symbol: getStock,
					style: 1,
					allow_symbol_change: false
				}"/>
				<div class = "new" style = "float:right">
				<TechnicalAnalysis
				:options = "{symbol: getStock, theme: 'dark'}" />

				<CompanyProfile
				:options = "{symbol: getStock, theme: 'dark'}" />
				</div>
				<FundamentalData
				:options = "{symbol: getStock, theme: 'dark'}" />
		</div>
	</div>
	</div>

</template>

<script>
//import {src} from "https://s3.tradingview.com/tv.js"
import { Chart, TechnicalAnalysis, CompanyProfile, SymbolInfo, FundamentalData } from 'vue-tradingview-widgets';

export default {
    name: 'HelloWorld',
    components: {
		Chart, TechnicalAnalysis, CompanyProfile, SymbolInfo, FundamentalData
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
	
	background: linear-gradient(
		180deg,
		rgba(161, 195, 209, 0.75) 46.38%,
		rgba(241, 114, 161, 0.5) 100%
	);

}

.Hello {
	flex-grow: 1
}

</style>