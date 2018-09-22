<template>
<div id="app">
    <HelloWorld></HelloWorld>
    <router-view></router-view>
</div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
export default {
	name: 'app',
	components: {
		HelloWorld
	},
    mounted() {
        console.log(this.$route);
    }
}
</script>

<style>
#app {
    width: 100%;
    height: 100%;
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
