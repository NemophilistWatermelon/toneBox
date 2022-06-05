const axios = require('axios')
const {log} = require('../lib/util')
const md5 = require('md5')

class Translate_model {
    constructor() {
        this.appID = '20200710000516341'
        this.appSecreat = 'KM0M4NwOvhQHos_VndM3'
        // http api 翻译
        this.baidu_trans_words_path = 'http://api.fanyi.baidu.com/api/trans/vip/translate'
    }

    static new() {
        return new this()
    }

    make_option(body) {
        var {
            ori_lang,
            tar_lang,
            ori_ct,
        } = body
        // 组装百度翻译 需要传递的数据
        var q = ori_ct,
            from = ori_lang,
            to = tar_lang,
            appid = this.appID,
            salt = 'kevin',
            sign = md5(appid + q + salt + this.appSecreat);
        var options = {
            q,
            from,
            to,
            appid,
            salt,
            sign,
        }
        return {
            method: 'get',
            url: this.baidu_trans_words_path,
            params: options
        }
    }

    async action_trans_words(body) {
        var o = this.make_option(body)
        var result = await axios(o)
        return  result.data;
    }
    async action_read( {words} ) {
        var words = unescape(words)
        log(words)
        var path = `http://tts.baidu.com/text2audio?cuid=baiduid&lan=zh&ctp=5&pdt=211&tex=${words}`
        var result = await axios(path)
        return result.config.url
    }

}

module.exports = Translate_model.new()