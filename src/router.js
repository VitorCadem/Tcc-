import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Home from './views/Home.vue'
import Download from './views/Download.vue'
import Curiosidades from './views/Curiosidades.vue'
import Wiki from './views/Wiki.vue'
import Sobre from './views/Sobre.vue'

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
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/download',
      name: 'download',
      component: Download
    },
    {
      path: '/curiosidades',
      name: 'curiosidades',
      component: Curiosidades
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
    }


    
  ]
})
