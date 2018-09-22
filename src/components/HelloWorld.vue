<template>
  <div class="hello">
      <p>说明：</p>
      <p>当我们在使用vue的时候，有时候需要一个两个数据在全局共享，vue虽然提供了
      vuex模块来解决此问题，但是为了一两个数据的共享引入vuex未免小题大做，
      所以我们选择使用storage来保存共享数据，但有个问题就是如何监听storage的
      变化，让我们可以在保存数据的同时，在另外一个路由中监听到变化并执行操作
      本例子就是演示此方法</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
