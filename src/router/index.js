import Vue from 'vue'
import Router from 'vue-router'
import About from '../components/about/about.vue'
import Home from '../components/home/home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ],
   mode: 'history'

})