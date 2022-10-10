<template>
	<div class="container">
		<SearchBar @searchTermChange="onSearchTermChange"></SearchBar>
		<div class="row">
			<VideoDetail :video="selectedVideo" />
			<VideoList @videoSelect="onVideoSelect" :videos="videosList"></VideoList>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
import SearchBar from '../components/SearchBar';
import VideoList from '../components/VideoList';
import VideoDetail from '../components/VideoDetail';
const API_KEY = 'AIzaSyBUSaxahFCy25CYIrSkopFfEzk0g7rhWZQ';
export default {
	name: 'App',
	components: {
		SearchBar,
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
	}
};
</script>