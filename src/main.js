import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'

import FastClick from 'fastclick'
import configRouter from './routers'

window.addEventListener('load', () => {
  FastClick.attach(document.body)
})

Vue.use(VueRouter)
Vue.use(VueResource)

let app = Vue.extend(App)

let router = new VueRouter({
  linkActiveClass: 'active'
})
configRouter(router)

router.start(app, '#app')
router.go('/home')
