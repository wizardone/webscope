// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
const data = {
  message: 'Main data message'
}
/* eslint-disable no-new */
let el = new Vue({
  el: '#app',
  data: data,
  template: '<App/>',
  components: { App }
})
console.log(el.message === data.message)
