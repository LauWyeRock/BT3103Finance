<template>
	<div class="container">

		<!-- header + search bar -->
        <div class="header">education</div>
		<div class="subheader">Not sure where to start?</div>
		<div class="description"> TradeBros has carefully curated a list of investing educational videos below,
			ranging from easy to difficult concepts for investors or traders of all levels.
		</div>
		<SearchBar @searchTermChange="onSearchTermChange"></SearchBar>

		<!-- Intro -->
		<div class="vidheader">An Introduction to the Stock Market</div>

		<!-- Medium -->
		<div class="vidheader">Cryptocurrencies and What They Do</div>

		<!-- Difficult -->
		<div class="vidheader">Solidifying your Investing Foundations</div>


		<div class="row">
			<VideoDetail :video="selectedVideo" />
			<VideoList @videoSelect="onVideoSelect" :videos="videosList"></VideoList>
		</div>



	</div>
</template>

<script>
import axios from 'axios';
// import SearchBar from '../components/SearchBar';
import VideoList from '../components/VideoList';
import VideoDetail from '../components/VideoDetail';
const API_KEY = 'AIzaSyBUSaxahFCy25CYIrSkopFfEzk0g7rhWZQ';
// const nextPageToken = '';
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
					q: newSearch // query
				}
			}).then(response => {
				this.videosList = response.data.items;
			});
		},
		onVideoSelect(video) {
			this.selectedVideo = video;
		}

		// getVideos() {
		// 	let req  = new Request(https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=AIzaSyBUSaxahFCy25CYIrSkopFfEzk0g7rhWZQ);
		// 	fetch(req)
		// 		.then((resp) => resp.json())
		// 		.then((data) => {
		// 			console.log(data)	
		// 			let videos = data.items;
		// 			nextPageToken = data.nextPageToken;
		// 			let videoContainer = document.querySelector(".youtube-container")
		// 			for(video of videos) {
		// 				videoContainer.innerHTML ="";

		// 			}
		// 			data.articles.forEach(element => {
        //         this.articles.push(element);
        //       });

				
        // }
	}
}

</script>

<style scoped>

	.container {
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
		padding-top: 50px;
		width: 100px;
		text-align:left;
		margin: auto;
		width: 80%;
		font-size: 30px;
		letter-spacing: -1px;
		font-weight: bold;
		text-decoration: underline;
	}

</style>