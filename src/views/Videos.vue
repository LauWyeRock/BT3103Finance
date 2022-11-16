<template>
	<div>
	<div class="container-fluid">

		<!-- header + search bar -->
        <div class="header">Videos</div>
		<div class="subheader">Not sure where to start?</div>
		<div class="description"> Flourish has carefully curated a list of investing educational videos below,
			ranging from easy to difficult concepts for investors or traders of all levels.
		</div>

		<!-- Intro -->
		<div class="vidheader">
			<button v-on:click="onSearchTermChange('Investing')">An Introduction to the Stock Market</button>
		</div>

		<!-- Crypto -->
		<div class="vidheader">
			<button v-on:click="onSearchTermChange('Cryptocurrencies')">Cryptocurrencies and What They Do</button>
		</div>

		<!-- Stocks -->
		<div class="vidheader">
			<button v-on:click="onSearchTermChange('Stocks')">Solidifying your Investing Foundations</button>
		</div>

		<div class="vidresults">
			<VideoDetail :video="selectedVideo" />
			<VideoList @videoSelect="onVideoSelect" :videos="videosList"></VideoList>
		</div>



	</div>
</div>
</template>

<script>
import axios from 'axios';
// import SearchBar from '../components/SearchBar';
import VideoList from '../components/VideoList';
import VideoDetail from '../components/VideoDetail';
const API_KEY = 'AIzaSyDPMbn8BAn5ccYEh6wknEGAGWaVtj7Begw';

export default {
	name: 'App',
	components: {
		// SearchBar,
		VideoList,
		VideoDetail
	},
	data() {
		return {
			videosList: [],
			selectedVideo: null
		};
	},
	methods: {

		onSearchTermChange(newSearch) {
			// axios returns a promise
			axios.get('https://www.googleapis.com/youtube/v3/search', {
				params: {
					key: API_KEY,
					type: 'video', // type of search
					part: 'snippet', // the type of info we want to get back, 'snippet' is small piece of info
					q: newSearch, // query
					maxResults: 9
				}
			}).then(response => {
				this.videosList = response.data.items;
			});
		},

		onVideoSelect(video) {
			this.selectedVideo = video;
		}

	}
}

</script>

<style scoped>

	button {
		font-size: 20px;
		font-weight: bold;
		border-radius: 4px;
		color:black;
		background-color: rgba(255, 225, 200, 1);
		padding: 10px 10px 10px 10px;
		/* text-transform: lowercase;  */
	}
	.container-fluid {
		background-image: repeating-linear-gradient(
		rgba(240, 235, 244, 1), 
		rgba(161, 195, 209, 0.5), 
		rgba(241, 114, 161, 0.5)
		);
		border: 0;
		height: 100%;
		margin: 0;
		padding: 0;
		width: 100%;
	}

	.header {
		font-family: serif;
		font-size: 480%;
		font-weight: bold;
		text-align: center; 
		padding-top:30px;
		letter-spacing: -1px;
	}

	.subheader {
		padding-top: 50px;
		width: 100px;
		text-align:left;
		margin: auto;
		width: 80%;
		font-size: 30px;
		letter-spacing: -1px;
		font-weight: bold;
	}

	.description {
		font-size: 20px;
		width: 100px;
		text-align:left;
		margin: auto;
		width: 80%;
		letter-spacing: 0px;
	}

	.vidheader {
		padding-top: 0px;
		width: 100px;
		text-align:left;
		margin: auto;
		width: 80%;
		font-size: 30px;
		letter-spacing: -1px;
		font-weight: bold;
		text-decoration: underline;
	}

	.vidresults {
		padding-top: 50px;
		width: 100px;
		text-align:left;
		margin: auto;
		width: 80%;
		font-size: 20px;
		letter-spacing: -1px;
		font-weight: bold;
	}

</style>