//封装所有的请求
//把index.js引进来
import service from './index'

//export default里面写所有的请求
export default{
    //1.获取首页数据(get)
    getRecommend(){
        return service.get('/recommend')
    },
    //2.搜索(post)
    getSearch(value){
        return service.post('/service',{
            value:value
        })
    },
    //3.分类查询(get)
    getClassification(id){
      return service.get(`/classification?mallSubId=${id}`)
    }

}
