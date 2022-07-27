const express = require('express');

const router = express.Router();
const ROUTES_REGIS = require('./routes_regis')
const log = console.log.bind(console)
var defalutPath = '/api'

var __regis_route = function (router, route) {
    if (route.another_func != undefined) {
        return router[route.method](defalutPath + route.path, route.another_func, route.func)
    } else if(route.noPrefix) {
        return router[route.method](route.path, route.func)
    } else {
        return router[route.method](defalutPath + route.path, route.func)
    }
}
var regis_router = (router, routes) => {
    var length = routes.length;
    for (let i = 0; i < length; i++) {
        // 注册中间件 是否都有中间件函数
        var route = routes[i]
        __regis_route(router, route)
    }
}
const Routes = ROUTES_REGIS

const __main = (router, routes) => {
    var length = routes.length;
    for (let i = 0; i < length; i++) {
        const rs = routes[i];
        regis_router(router, rs)
    }
    console.log(router)
}
__main(router, Routes)

// 注册路由 老的写法，但是思路清晰
/*
const blogRoutes = require('../controller/blogController');
regis(router, blogRoutes)

const appRoutes = require('../controller/applicationController');
regis(router, appRoutes)

const adminRoutes = require('../controller/adminController');
regis(router, adminRoutes)

const captureRoute = require('../controller/capture');
regis(router, captureRoute)
 */

module.exports = router;
