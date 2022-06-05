const md5 = require('md5')
const adminRes = require('../model/admin_model.js');
const fs = require('fs');


const {
    log
} = require('../lib/util')

const sendHtml = (path, res) => {
    var fs = require('fs');
    var blogHtml = fs.readFileSync(path, 'utf-8')

    res.header("Content-Type", "text/html").status(200).send(blogHtml);
}
const cheackUsername = async(form) => {
    try {
        var data = await adminRes.selectAdminByForm(form);
        return data;
    } catch (error) {
        res.status(500).send(1)
    }
}

// token 创建规则
const createToken = () => md5(Math.random() + new Date().getTime())

// 每次获取加载登录页面的token
const acount_session_data = []

const checkToken = (token) => {
    var length = acount_session_data.length;
    for (let i = 0; i < length; i++) {
        const t = acount_session_data[i];
        if (token === t) {
            // 如果验证成功 则 清除数组中的相同token
            acount_session_data.pop(t)
            return 1
        }
        return 0
    }
}

const writeLog = (req, content) => {
    var { method, url, headers, body } = req
    log(method, url, headers['user-agent'], body)
    var logPath = './log/route_log.txt'

    // 套路  先读 ==> 再写
    var memory = fs.readFileSync(logPath);
    var data = {
        method,
        url,
        headers,
    }
    data = JSON.stringify(data, null, 2)
        // 写入文件
    fs.writeFileSync(logPath, memory + "\n\r" + data, 'utf-8')
}

const redirect = (res, path) => {
    return res.redirect(path)
}

const adminPageToken = [];
const postUsrLoginData = async function(req, res) {
    var body = req.body;
    var form = {
        token: body.safeNum,
        usr: body.username,
        pwd: body.password,
    }

    var data = await cheackUsername([form.usr, form.pwd], res)

    if (data.length == 0) {
        return res.status(200).json({
            "msg": '登录失败',
            code: "1"
        })
    } else {
        adminPageToken.length = 0;
        var autorToken = createToken()
        adminPageToken.push({
            autorToken,
            usr: form.usr,
        })
        var data = {
            code: "0",
            path: "/api/admin",
            usr: form.usr,
            token: autorToken,
        }
        res.json(data)
    }
}

// render 登录页面获取
const getPage = (req, res) => {
    res.render('admin/login.html')
}


const getAdminIndex = (req, res) => {
    var token = req.query.t
    let length = adminPageToken.length
    if (token === undefined || length == 0) {
        return res.redirect('/api/login')
    }

    try {
        for (let i = 0; i < length; i++) {
            const t = adminPageToken[i];
            if (token === t.autorToken) {
                token = t
            } else {
                log('no matched')
                adminPageToken.lenght = 0
                return res.redirect('/api/login')
            }
        }

        // writeLog(req, JSON.stringify({
        //     "msg": `request token ${token}`
        // }));

        // 登录成功分发token
        res.render('admin/index.html', {
            token
        })

    } catch (error) {
        log(error)
    }


}


// path
const getAdminPage = {
    method: "get",
    path: '/login',
    func: getPage,

}
const adminLoginPost = {
    method: "post",
    path: '/usr/login',
    func: postUsrLoginData,

}
const adminPage = {
    method: "get",
    path: '/admin',
    func: getAdminIndex,

}

// export routes path
module.exports = [
    getAdminPage,
    adminLoginPost,
    adminPage,
]