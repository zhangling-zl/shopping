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
    path: '/',  //父路由
    name: 'Layout',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home,
        meta:{
          title:'首页'
          
        }
      },
      {
        path: 'assort',
        name: 'Assort',
        component: ()=>import('../components/assortA/AssortAll.vue'),
        meta:{
          title:'分类'
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
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//路由源信息，改变页面的标题
router.beforeEach((to,from,next)=>{
  document.title=to.meta.title
  next()
})
export default router
