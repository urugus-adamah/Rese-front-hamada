import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Thanks from '../views/Thanks.vue'
import Done from '../views/Done.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component:Register
  },
  {
    path: '/thanks',
    name: 'Thanks',
    component:Thanks
  },
  {
    path: '/done',
    name: 'Done',
    component:Done
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
