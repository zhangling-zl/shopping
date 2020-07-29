//封装axios
import axios from 'axios'


//创建一个axios的实例
const service = axios.create({
    //基础路径
    baseURL:'/api',

    //超时时间，如果超过这个时间，则请求失败
    timeout:10000

})


//响应拦截
service.interceptors.response.use((res)=>{
    return res.data
},err=>{
    console.log(err);
})