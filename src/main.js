import 'babel-polyfill'
import promise from 'es6-promise';
import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'

import '@/icons' // icon
import '@/permission' // permission control

const { mockXHR } = require('../mock')
mockXHR()

import adaptive from '@/directive/el-table'
// Vue.directive('el-height-adaptive-table', adaptive)
Vue.use(adaptive)


promise.polyfill();

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  mounted() {
    document.dispatchEvent(new Event("render-event"));
  }
})
