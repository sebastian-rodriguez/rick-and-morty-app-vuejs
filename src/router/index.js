import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Characters from '../views/Characters'
import Episodes from '../views/Episodes'
import Character from '../views/Character'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/characters',
    name: 'Characters',
    component: Characters
  },
  {
    path: '/episodes',
    name: 'Episodes',
    component: Episodes
  },
  {
    path: '/character/:id',
    name: 'Character',
    component: Character
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
