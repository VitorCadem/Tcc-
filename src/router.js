import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Home from './views/Home.vue'
import Download from './views/Download.vue'
import Wiki from './views/Wiki.vue'
import Sobre from './views/Sobre.vue'
import Produto from './views/Produto.vue'
import Agua from './views/Agua.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/download',
      name: 'download',
      component: Download
    },
    {
      path: '/wiki',
      name: 'wiki',
      component: Wiki
    },
    {
      path: '/sobre',
      name: 'sobre',
      component: Sobre
    },
    {
      path: '/Produto',
      name: 'produto',
      component: Produto
    },
    {
      path: '/agua',
      name: 'agua',
      component: Agua
    }



    
  ]
})
