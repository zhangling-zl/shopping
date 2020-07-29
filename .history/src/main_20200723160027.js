import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import api from './http/api'
//挂载在原型对象上
Vue.prototype.$api = api


//Vue.prototype.  固定写法
//把传值这个函数挂载在全局里面，所有组件都可以用
Vue.prototype.$toDetails = (id)=>{
  console.log(id);
  router.push({
    path:'/details',
    query:{
      id:id
    }
  })
}




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
