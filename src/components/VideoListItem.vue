<template>

	<article class="videoresults" @click="onVideoSelect">
		<img class="thumbnail" :src="thumbnailUrl" />
		<div class="vidtitle">
		{{ video.snippet.title }}
		</div>
	</article>

	<!-- <div></div> -->
</template>

<script>
export default {
	name: 'VideoListItem',
	props: {
		video: Object
	},
	computed: {
		thumbnailUrl() {
			return this.video.snippet.thumbnails.default.url;
		}
	},
	methods: {
		onVideoSelect() {
			this.$emit('videoSelect', this.video);
		}
	}
}
</script>

<style scoped>
	li {
		display: flex;
		cursor: pointer;
	}

	article:hover {
		cursor: pointer;
	}

	img {
		float: left;
		width:  300px;
		height: 200px;
		object-fit: cover;
		padding-bottom:30px;
	}

	.vidtitle {
		text-align: center;
		position:relative;
	}
</style>