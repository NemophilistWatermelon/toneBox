const traner = require('../model/translate_model')
const { log } = require('../lib/util')
const encode = str => {
    result = encodeURI(str)
        // 词法不正确会有 json 信息返回错误提示
    return result !== str ? result : JSON.parse('{"code":1, "msg":"Error_输入词法有误"}')
}
const getURL = async encode_query => {
    const axios = require('axios')
    var path = `http://tts.baidu.com/text2audio?cuid=baiduid&lan=zh&ctp=5&pdt=211&tex=${encode_query}`
    var data = await axios(path)
    return data.config.url
}

const trans_func = async(req, res) => {
    var appID = '20200710000516341'

    // http api
    var baidu_trans = 'http://api.fanyi.baidu.com/api/trans/vip/translate'
        //获取 ori_ct ori_lang 原始翻译 tar_lang 目标翻译
    var body = req.body

    // 转化
    // var encode_query = encode(ori_ct)
    // 判断是否是英文字符
    // if (typeof encode_query == 'object') {
    //     return res.send(encode_query)
    // }
    // var url = await getURL(encode_query)
    // 有客户端处理数据
    var r = await traner.action_trans_words(body)
    if (r.error_code) {
        return res.status(500).send({ msg: '非线上地址' })
    }
    return res.status(200).send(r)
}

const html_func = (req, res) => {
    res.render('./trans/index.html')
}

const read_func = async(req, res) => {
    var body = req.body
    var r = await traner.action_read(body)
    return res.status(200).send({ code: 0, url: r })
}
const index = {
    method: "get",
    path: "/tranPage",
    func: html_func,
}
const trans = {
    method: "post",
    path: "/trans",
    func: trans_func,
}


const read = {
    method: "post",
    path: "/read",
    func: read_func,

}
module.exports = [
    trans,
    index,
    read,
]