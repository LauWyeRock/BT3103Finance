<template>
	<div>
		<input @keyup.enter="onInput" placeholder="press enter to search" />
	</div>
</template>

<script>
export default {
	name: 'SearchBar',
	methods: {
		onInput: function(e) {
			this.$emit('searchTermChange', e.target.value);
		}
	}
};
</script>

<style scoped>
	input {
		width: 75%;
	}
	div {
		text-align: center;
		margin: 20px;
	}
</style>