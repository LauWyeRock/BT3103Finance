<template>
	<div v-if="video" class="col-md-8">
		<div class="embed-responsive embed-responsive-16by9">
			<iframe class="embed-responsive-item" :src="videoUrl" width="500" height="300"/>
		</div>
		<div class="details">
			<h4 class="vidtitle">{{ video.snippet.title }}</h4>
			<div class="viddesc">{{ video.snippet.description }}</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'videoDetail',
	props: {
		video: Object
	},
	computed: {
		videoUrl() {
			// const videoId = this.video.id.videoId; below use es2015:
			const { videoId } = this.video.id;
			return `https://www.youtube.com/embed/${videoId}`;
		}
	}
	
}
</script>

<style scoped>
	.details {
		margin-top: 10px;
		padding: 10px;
		border: 1px solid #ddd;
		border-radius: 4px;
	}


	.vidtitle {
		font-size:30px;
	}
	.viddesc {
		font-size:20px;
		font-weight: lighter;
		letter-spacing: 0px;
	}
</style>