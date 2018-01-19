import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import HelloWorld from '@/components/HelloWorld'
import About from '@/components/About'
import Food from '@/view/Food'
import Goods from '@/components/goods/goods'
import Ratings from '@/components/ratings/ratings'
import Sells from '@/components/sells/sells'
import '../assets/styles/index.styl'
Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  routes: [
    {
      path: '/helloWorld',
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
    },
    {
      path: '/goods',
      name: 'Goods',
      component: Goods,
      meta: {
        title: 'goods'
      }
    },
    {
      path: '/ratings',
      name: 'Ratings',
      component: Ratings,
      meta: {
        title: 'ratings'
      }
    },
    {
      path: '/sells',
      name: 'Sells',
      component: Sells,
      meta: {
        title: 'sells'
      }
    }
  ]
})
