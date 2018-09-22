<template lang="html">
	<div class="bar">
		<span>我监听到了变化，保存的值为：{{newVal}}</span>
	</div>
</template>

<script>
export default {
	data() {
		return {
			newVal: ''
		}
	},
	created() {
		window.addEventListener('setItem', ()=> {
			this.newVal = sessionStorage.getItem('watchStorage');
		})
	}
}
</script>

<style lang="css">
	.bar {
		box-sizing: border-box;
		padding: 20px;
		width: 100%;
		height: 100%;
		background: #cdf;
		position: absolute;
		left: 100%;
		top: 0;
	}
</style>
