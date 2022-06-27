const {createProxyMiddleware} = require('http-proxy-middleware')
const proxyMap = require('../config/Proxy/main')

module.exports = function (app) {
    console.log({
        已经创建的代理规则: proxyMap
    })
    proxyMap.forEach(item => {
        if (item.noProxy) {
            app.use(item.key, (req, res, next) => {
                console.log({
                    请求地址是: req.params,
                    参数: req.query || ''
                })
                res.send('get it')
            })
            return
        }
        app.use(item.key, (req, res, next) => {
            console.log({
                请求地址是: req.params,
                参数: req.query || ''
            })
            next()
        }, createProxyMiddleware({
            target: item.target,
            changeOrigin: true
        }))
    })

}
