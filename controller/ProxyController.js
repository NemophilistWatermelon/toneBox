/**
 * @desc: 处理跨域模块，这个模块如果开着那么其他模块的请求将收不到， 一般用于前端项目配置跨域处理
 */
const { createProxyMiddleware } = require('http-proxy-middleware')
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
