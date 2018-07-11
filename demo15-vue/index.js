import Vue from 'vue'

// 如果webpack里不设置别名，这里就只能这么引。resolve.alias
// import Vue from 'vue/dist/vue.js'

import App from './app.vue'

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
