import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router/router.js'

Vue.use(VueRouter); // 这两步的作用是注册路由，然后在其他页面可以访问this.$route
Vue.config.productionTip = false;

// 添加全局事件监控方法
Vue.prototype.resetSetItem = function (key, newVal) {
    if (key === 'watchStorage') {

        // 创建一个StorageEvent事件
        var newStorageEvent = document.createEvent('StorageEvent');
        const storage = {
            setItem: function (k, val) {
                sessionStorage.setItem(k, val);

                // 初始化创建的事件
                newStorageEvent.initStorageEvent('setItem', false, false, k, null, val, null, null);

                // 派发对象
                window.dispatchEvent(newStorageEvent)
            }
        }
        return storage.setItem(key, newVal);
    }
}

new Vue({
  render: h => h(App),
  router // 这两步的作用是注册路由，然后在其他页面可以访问this.$route
}).$mount('#app')
