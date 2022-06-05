const result = require('../model/blog_model.js')
const {
    log,
} = require('../lib/util');
const redis = require('../lib/redis_utils');
const {
    nextTick
} = require('process');

const BLOG_ALL_LEN = result.get_blogs_length();

const response_data = (res, s, ...args) => {
    var data = Object.assign({}, ...args, {
        s: s || 200
    })
    return res.send(data)

}


const response_err = function(res, status_port, msg = null) {
    var er = {
            code: 1,
            port: status_port,
            msg: msg || '服务器异常',
        }
        // assign 方法可以覆盖 第一个对象中出现的相同 属性值
    return res.send(er)
}

const current_token = (req) => {
    var token = req.body.token
    return token == null ? '' : token
}

// 没有token 这个blog all 接口就无法使用
const getBlogAllFunc = async(req, res) => {
    // check token
    var curr_token = current_token(req, res)
    if (curr_token != '') {
        // read data
        let data = await result.readBlogAll()
            // undata response err
        if (!data) {
            response_err(res, 500)
        }
        // 合并数据
        let d = Object.assign({}, {
                length: await BLOG_ALL_LEN
            }, data)
            // res.send(JSONData)
        response_data(res, 200, d)
    } else {
        response_err(res)
    }

}

//分页数据
const getLimitFunc = async(req, res) => {
        log('limit 逻辑函数')
        let body = req.params,
            length = 0;
        // 開始頁碼
        body.start == 0 ? 1 : body.start
        startPage = (body.start - 1) * 5;
        // 拿到数据库的总数的长度
        length = await BLOG_ALL_LEN;

        let data = await result.get_limit_blog(startPage, 5)
        if (data.length === 0) {
            response_err(res, 403, '参数有误')
        } else {
            var real_data = {
                data,
                length
            }
            redis.save(`blog_limit_${startPage}`, real_data)
            return res.status(200).send(real_data)
        }


    }
    // 其中一条blog
const getBlogOne = (req, res) => {

    log('我的函数')
    var parmasIndex = req.params.index;

    if (parmasIndex) {
        result.get_one_blog(parmasIndex).then(data => {
            redis.save(parmasIndex, data)
            res.status(200).json(data)
        }).catch(e => {
            response_err(res, 404, '服务器错误')
        })
    } else {
        response_err(res, 404, '服务器错误')
    }

}

const sendHtml = (path, res) => {
    var fs = require('fs');
    var blogHtml = fs.readFileSync(path, 'utf-8')
    res.header("Content-Type", "text/html")
    res.send(blogHtml);
}

const postMyBlog = (req, res) => {
    var body = req.body;

    var form = {
        blogTitle: body.title,
        blogBody: body.blogContent,
        blogAuthor: body.author,
        blogCatgory: body.catgory,
        blogCreateTime: body.date,
    }

    try {
        result.save(form).then(data => {
            var JSONData = Object.assign({}, {
                length: data.length
            }, {
                data
            })

            res.status(200).json(JSONData)
        }).catch(e => {
            response_err(res, 501, 'failed')
        })

    } catch (e) {

        response_err(res, 501, 'failed')
    }
}

const getBlogByTagName = async(req, res) => {
    let tagName = req.params.tag_param;

    if (tagName == '') {
        response_err(res, 403, '参数不合法')
    }

    try {
        let data = await result.select_by_tag(tagName);
        log('tag data', data)
        return res.status(200).json({
            code: 0,
            data
        })
    } catch (error) {
        response_err(res, 501, 'failed')
    }


}

// 所有 blog
const blog_all = {
        method: "get",
        path: "/blog/all",
        func: getBlogAllFunc,

    }
    // 分页的 blog  arrary  数据 池
const blog_limit = {
        method: "get",
        path: "/blog/limit/:start",
        func: getLimitFunc,
        another_func: async function(req, res, next) {

            let body = req.params
                // 開始頁碼
            body.start == 0 ? 1 : body.start
            startPage = (body.start - 1) * 5;
            var data = await redis.pick(`blog_limit_${startPage}`)
            if (data.string_type !== null) {
                res.send(data.object_type)
            } else {

                next()
            }
        },

    }
    // 单一的 blog
const blog_one = {
    method: "get",
    path: "/blog/one/:index",
    func: getBlogOne,
    another_func: async function(req, res, next) {
        log('已经缓存<======>走的中间件')
        var index = req.params.index
        var data = await redis.pick(index)
        if (data.string_type !== null) {
            res.send(data.object_type)
        } else {
            next()
        }
    }

}


const blog_write = {
    method: 'post',
    path: '/blogCommit',
    func: postMyBlog,

}

// 根据tag 搜索相关 blog 的信息；
const blog_tag_query = {
    method: 'get',
    path: '/blog/tag/:tag_param',
    func: getBlogByTagName,

}


const get_blog_mod = (req, res) => {
    const emoji = require('../utils/emoji')
    log('emoji', emoji)
    return res.json({
        msg: 'success',
        emoji,
        status: 200,
    })
}

const blog_mood = {
    method: 'get',
    path: '/blog/mood',
    func: get_blog_mod,
}



// 路由导出
module.exports = [
    blog_all,
    blog_limit,
    blog_one,
    blog_write,
    blog_tag_query,
    // 表情数据
    blog_mood,
]