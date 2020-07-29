import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//状态共享 所有组件都可以使用的数据（公共的数据）
export default new Vuex.Store({
  //state里面是定义的数据
  state: {
    str:null,
  },
  //mutations里面改变state的值
  mutations: {
    setName(state){
       state.str++
  },
  actions: {
  },
  modules: {
  }
})
