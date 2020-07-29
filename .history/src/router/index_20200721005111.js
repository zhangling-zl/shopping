import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home'
import Layout from '../views/layout/Layout'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: '/home',  //把首页重定向
    redirect: '/'
  },
  {
    path: '/',
    name: 'Layout',
    component: 'Layout',
    children: [
      {
        path: '',
        name: 'Home',
        component: Home,
        meta:{
          title:'首页'
        }
      },
    ]
  },



  
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/Login')
  }
]




// {
//   path: '/about',
//   name: 'About',
//   component: () => import('../views/home/About')
// },
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


// router.beforeEach((to,from,next)=>{
//   document.title=to.meta.title
//   next()
// })
export default router
