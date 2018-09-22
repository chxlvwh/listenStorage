<template lang="html">
	<div class="foo">
		<label for="session">请输入要保存的值：</label>
		</br></br>
		<input type="text" name="session" v-model='value'>
		</br></br>
		<button type="button" name="button" @click="keep">保存</button>
		</br></br>
		请打开debug工具，并查看sessionStorage变化：
		</br>
		当前存入的值为：{{hasKept}}
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	data() {
		return {
			value: '',
			hasKept: ''
		}
	},
	methods: {
		keep() {
			this.hasKept = this.value;
			this.resetSetItem('watchStorage', this.value);
		}
	}
}
</script>

<style lang="css">
	.foo {
		box-sizing: border-box;
		padding: 20px;
		width: 50%;
		height: 200px;
		background-color: #ccf;
		position: relative;
	}
</style>
