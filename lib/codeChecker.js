const capture = require('svg-captcha')

const captureFunc = (req, res) => {
    var codeConfig = {
            size: 4, // 验证码长度
            ignoreChars: '0o1i', // 验证码字符中排除 0o1i
            noise: 9, // 干扰线条的数量
            height: 44,
            color: true
        }
        // json => text str | data svg
    var captcha = capture.create(codeConfig);
    // 返回 json 内容

    var captuer = {
        t: captcha.text,
        data: captcha.data
    }
    res.status(200).json({
        data: captuer.data
    })
}

const getCaptureRoute = {
    path: '/capture',
    method: 'get',
    func: captureFunc,

}

module.exports = [
    getCaptureRoute
]