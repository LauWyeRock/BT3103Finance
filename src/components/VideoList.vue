<template>
	<ul class="result-list">
		<VideoListItem
			v-for="video in videos"
			:video="video"
			:key="video.etag"
			@videoSelect="onVideoSelect"
		>
		</VideoListItem>
	</ul>
</template>

<script>
import VideoListItem from './VideoListItem';
export default {
	name: 'VideoList',
	components: {
		VideoListItem,
	},
	props: {
		videos: Array
	},
	methods: {
		onVideoSelect(video) {
			this.$emit('videoSelect', video);
		}
	}
};
</script>

<style>
	.result-list {
			padding-top: 60px;
			display: grid;
			grid-gap: 100px;
			align-items: start;
			margin:0 auto; /* this will center the page */
			width:1000px; /*  use your width here */
			grid-template-columns: repeat(auto-fill, minmax(200px, 5fr));
		}

</style>