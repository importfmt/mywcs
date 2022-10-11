// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/router.js' // Router
import axios from 'axios' // Axios
import NProgress from 'nprogress' // nprogress
import 'nprogress/nprogress.css'  // nprogress
import ElementUI, { Tree } from 'element-ui'  // ElementUI
import 'element-ui/lib/theme-chalk/index.css' // ElementUI
import './assets/css/global.css'  // Global CSS

// Set axios baseURL
axios.defaults.baseURL = "http://127.0.0.1:8888/api/v1/"

// Set axios request interceptor
axios.interceptors.request.use(config => {
  // Request interceptor
  NProgress.start()
  config.headers.Authorization = "Bearer " + window.sessionStorage.getItem('token')
  return config
})
//  Response interceptor
axios.interceptors.response.use(config => {NProgress.done(); return config})

Vue.config.productionTip = false
Vue.prototype.$http = axios // Axios
Vue.use(ElementUI); // ElementUI


// Date format
Vue.filter('dataFormat',function(originValue){
  const date = new Date(originValue);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1 + '').padStart(2, '0')
  const day = (date.getDate() + '').padStart(2, '0')
  const hour = (date.getHours() + '').padStart(2, '0')
  const minute = (date.getMinutes() + '').padStart(2, '0')
  const sedcond = (date.getSeconds() + '').padStart(2, '0')
  return `${year}/${month}/${day} ${hour}:${minute}:${sedcond}`
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
