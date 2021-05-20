import Vue from 'vue'
import App from './App.vue'
// 引入创建的router.js
import router from './router.js';

Vue.config.productionTip = false

new Vue({
  // 使用上面的引入
  router, //es6语法 相当于router:router
  render: h => h(App),
}).$mount('#app')
