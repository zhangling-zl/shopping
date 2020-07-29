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
    postEditCart({ count, id, mallPrice }) {
        return service.post('/editCart', {
            count: count,
            id: id,
            mallPrice: mallPrice
        })
    },
    //6.购物车商品删除(post)
    postDeleteShop(idArr) {
        return service.post('/deleteShop', idArr)
    },
    //7.购物车支付页面(post)
    postOrder({ address, tel, orderId, totalPrice, idDirect, count }) {
        return service.post('/order', {
            address: address,
            tel: tel,
            orderId: orderId,
            totalPrice: totalPrice,
            idDirect: idDirect,
            count: count
        })
    },
    //8.单个商品详情(get)
    getGoods(id) {
        return service.get(`/goods/one?id=${id}`)
    },
    //9.收藏单个商品(post)
    postCollection(goods) {
        return service.post('/collection', goods)
    },
    //10.取消收藏(post)
    postCancel(id) {
        return service.post('/cancelCollection', id)
    },
    //11.查询商品是否已收藏(post)
    postIsCollection(id) {
        return service.post('/isCollection', id)
    },
    //12.加入购物车(post)
    postAddShop(id) {
        return service.post('/addShop', id)
    },
    //13.退出登录(post)
    postloginOut() {
        return service.post('/loginOut', {})
    },
    //14.获取用户信息(post)
    postQueryUser() {
        return service.post('/queryUser', {})
    },
    //15.修改保存用户信息(post)
    postSaveUser({ gender, year, month, day, id, nickname }) {
        return service.post('/saveUser', {
            gender: gender,
            year: year,
            month: month,
            day: day,
            id: id,
            nickname: nickname
        })
    },

    //  //查询用户订单数量(get)
    //  getOrderNum() {
    //     return service.get('/myOrder/orderNum')
    // },


    //16.商品评论(post)
    postGoodsOne({ id, rate, content, anonymous, _id, order_id, image }) {
        return service.post('/goodsOne/comment', {
            id: id,
            rate: rate,
            content: content,
            anonymous: anonymous,
            _id: _id,
            order_id: order_id,
            image
        })
    },
    //17.获取登录注册默认验证码(get)
    getVerify() {
        return service.get('/verify')
    },
    //18.查询用户收货地址(get)
    getAddress() {
        return service.get('/getAddress')
    },
    //19. 查询默认收货地址(get)
    getDefaultAddress() {
        return service.get('/getDefaultAddress')
    },
    //20.设置默认收货地址(post)
    postsetDefault(id) {
        return service.post('/setDefaultAddress', id)
    },
    //21.()增加收货地址(post)
    postAddress({ name, tel, address, isDefault, province, city, county, addressDetail, areaCode, id }) {
        return service.post('/address', {
            name,
            tel,
            address,
            isDefault,
            province,
            city,
            county,
            addressDetail,
            areaCode,
            id
        })
    },
    //22.删除地址(post)
    postDelete(id) {
        return service.post('/deleteAddress', {
            id
        })
    },

    //查询我的收藏(get)
    getCollectionList(){
        return service.get('/collection/list')
     },


    //23.注册(post)
    postRegister({ nickname, password, verify }) {
        return service.post('/register', {
            nickname,
            password,
            verify
        })
    },
    //24.登录(post)
    postLogin({ nickname, password, verify }) {
        return service.post('/login', {
            nickname,
            password,
            verify
        })
    },
    //25.订单查询(get)
    getMyOrder(){
        return service.get('/getMyOrder')
    },
    //26.查询已评价(get)
    getAlreadyEvaluated(){
        return service.get('/alreadyEvaluated')
    },
    //27.查询未评价(get)
    getTobeEvaluated(){
        return service.get('/tobeEvaluated')
    },
    //28.查询单条评论(post)
    postEvaluateOne({id,_id}){
        return service.post('/evaluateOne',{
            id,
            _id 
        })
    }

}
