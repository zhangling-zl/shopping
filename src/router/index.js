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
        meta: {
          title: '商城'
        }
      },
      {
        path: 'assort',
        name: 'Assort',
        component: () => import('../views/assort/Assort'),
        meta: {
          title: '分类'
        }
      },
      {
        path: 'shopping',
        name: 'Shopping',
        component: () => import('../views/shopping/Shopping'),
        meta: {
          title: '购物车'
        }
      },
      {
        path: 'mine',
        name: 'Mine',
        component: () => import('../views/mine/Mine'),
        meta: {
          title: '我的'
        }
      },

    ]
  },

  {
    path: '/mineAll',
    name: 'MineAll',
    component: () => import('../views/mine/MineAll'),
    meta: {
      title: '个人资料'
     
    }
  },
  {
    path: '/collect',
    name: 'Collect',
    component: () => import('../views/mine/Collect'),
    meta: {
      title: '我的收藏'
    }
  },
  {
    path: '/browse',
    name: 'Browse',
    component: () => import('../views/mine/Browse.vue'),
    meta: {
      title: '最近浏览'
    }
  },
  {
    path: '/settlement',
    name: 'Settlement',
    component: () => import('../views/mine/Settlement'),
    meta: {
      title: '结算页面'
    }
  },
  {
    path: '/address',
    name: 'Address',
    component: () => import('../views/mine/Address'),
    meta: {
      title: '新增地址'
    }
  },
  {
    path: '/addressedit',
    name: 'Addressedit',
    component: () => import('../views/mine/Addressedit'),
    meta: {
      title: '编辑地址'
    }
  },
  {
    path: '/addresslist',
    name: 'Addresslist',
    component: () => import('../views/mine/Addresslist.vue'),
    meta: {
      title: '地址列表'
    }
  },
  {
    path: '/details',
    name: 'Details',
    component: () => import('../views/details/Details'),
    meta: {
      title: '详情页'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/Login'),
    meta: {
      title: '登录'
    }
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
//核心
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
//路由源信息，改变页面的标题
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})
export default router
