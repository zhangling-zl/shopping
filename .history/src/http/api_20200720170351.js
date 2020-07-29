//封装所有的请求
//把index.js引进来
import service from './index'

//export default里面写所有的请求
export default {
    //1.获取首页数据(get)
    getRecommend() {
        return service.get('/recommend')
    },
    //2.搜索(post)
    postSearch(value) {
        return service.post('/service', {
            value: value
        })
    },
    //3.分类查询(get)
    getClassification(id) {
        return service.get(`/classification?mallSubId=${id}`)//模板字符串
    },
    //4.查询获取购物车数据(post)
    postQetCard(id) {
        return service.post('/getCard', {
            id: id
        })
    },
    //5.购物车加减商品(post)
    postEditCart({count,id,mallPrice}){
        return service.post('/editCart',{
            count:count,
            id:id,
            mallPrice:mallPrice
        })
    },
    //6.购物车商品删除(post)
    postDeleteShop(idArr){
        return service.post('/deleteShop',idArr)
    },
    //7.购物车支付页面(post)
    postOrder({address,tel,orderId,totalPrice,idDirect,count}){
        return service.post('/order',{
            address:address,
            tel:tel,
            orderId:orderId,
            totalPrice:totalPrice,
            idDirect:idDirect,
            count:count
        })
    },
    //8.单个商品详情(get)
    getGoods(id){
      return service.get(`/goods/one?id=${id}`)
    },
    //9.收藏单个商品(post)
    postCollection(goods){
      return service.post('/collection',goods)
    },
    //10.取消收藏(post)
    postCancel(id){
        return service.post('/cancelCollection',id)
    },
    //11.查询商品是否已收藏(post)
    postIsCollection(id){
        return service.post('/isCollection',id)
    }

}
