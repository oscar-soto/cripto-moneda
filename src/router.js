import Vue from 'vue'
import Router from 'vue-router'

// Pages
import Home from '@/views/Home'
import About from '@/views/About'
import Error from '@/views/Error'
import CoinDetail from '@/views/CoinDetail'

Vue.use(Router);

export default new Router({
   mode: 'history',

   routes: [
      {
         path: '/',
         name: 'home',
         component: Home
      },
      {
         path: '/coin/:id',
         name: 'coin-detail',
         component: CoinDetail
      },
      {
         path: '/about',
         name: 'about',
         component: About
      },
      {
         path: '*',
         name: 'error',
         component: Error
      }
   ]
})
