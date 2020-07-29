import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { Dialog } from 'vant';
Vue.prototype.$checkLogin = (next) => {
  if (!localStorage.user) {
    Dialog.confirm({
      title: '请登录',
      message: '是否立即前往登录/注册页面',
    })
    .then(() => {
      // on confirm
      router.push('/login')
    })
    .catch(() => {
      // on cancel
    });
    return false
  } else {
    next()
  }
}

Vue.prototype.$addbrowseList = (item)=>{
  if(localStorage.getItem("browseList")){//如果本地储存里面有这个数据（点进详情页）
     let browse = JSON.parse(localStorage.getItem("browseList"));
     browse.push(item);//添加
     localStorage.setItem("browseList",JSON.stringify(browse))
  }else{
    let arr = []
    arr.push(item)
    localStorage.setItem("browseList",JSON.stringify(arr))
  }
}

//引入这个文件
import api from '../src/http/api'
//全局挂载 固定写法
Vue.prototype.$api = api


//引入组件库
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
