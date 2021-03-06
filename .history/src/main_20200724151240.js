import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import api from './http/api'
//挂载在原型对象上
Vue.prototype.$api = api


//Vue.prototype.  固定写法
//把传值这个函数挂载在全局里面，所有组件都可以用
Vue.prototype.$toDetails = (id) => {
  // console.log(id);
  router.push({
    path: '/details',
    query: {
      id: id
    }
  })
}

//购物车的封装请求，传id值
Vue.prototype.$shoopingcar = (id) => {
  console.log(id);
  api.postAddShop({ item.goodsId })
}

// import { Dialog } from 'vant';
// Vue.prototype.$clicklogin = (item) =>{
//  if(!localStorage.user){
//   Dialog.confirm({
//     title: '系统检测到当前状态未登录',
//     message: '是否立即前往登录/注册页面',
//   })
//   .then(() => {
//     router.push('/login')
//   })
//   .catch(() => {
//     // on cancel
//   });
//  }else{

//  }
// }






//van组件
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
