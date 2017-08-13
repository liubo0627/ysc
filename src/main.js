import Vue from 'vue'
import App from './App.vue'

import Mint from 'mint-ui';
Vue.use(Mint);


import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Fav from "./components/Fav.vue";
import Home from "./components/Home.vue";
const routes = [
  { path: '/home', component: Home },
  { path: '/fav', component: Fav },
  { path: '/', redirect: '/home'}
 
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
