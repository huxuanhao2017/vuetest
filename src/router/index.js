import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import About from '@/components/About'
import Food from '@/view/Food'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {
        title: 'vuetest'
      }
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      meta: {
        title: 'about'
      }
    },
    {
      path: '/food',
      name: 'Food',
      component: Food,
      meta: {
        title: 'food'
      }
    }
  ]
})
