<template>
	<div class="hello">
	<ul class="result-list">
		<VideoListItem
			v-for="video in videos"
			:video="video"
			:key="video.etag"
			@videoSelect="onVideoSelect"
		>
		</VideoListItem>
	</ul>
</div>
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
/* .hello {
  background-image: repeating-linear-gradient(
    rgba(240, 235, 244, 1), 
    rgba(161, 195, 209, 0.75), 
    rgba(241, 114, 161, 0.5)
    );
} */
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