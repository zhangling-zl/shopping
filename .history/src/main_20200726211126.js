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

//加入购物车的封装请求，传id值
Vue.prototype.$shoopingcar = (id) => {
  console.log(id);
  api.postAddShop({ id })
}

//最近浏览的封装方法
Vue.prototype.$addbrowseList = (item)=>{
  if(localStorage.getItem("browseList")){//如果本地储存里面有这个数据（点进详情页）
     let browse = JSON.parse(localStorage.getItem("browseList"));
     browse.push(item);//添加
     localStorage.setItem("browseList",JSON.stringify('125888452'))
  }else{
    let arr = []
    arr.push(item)
    localStorage.setItem("browseList",JSON.stringify('小可爱'))
  }
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
