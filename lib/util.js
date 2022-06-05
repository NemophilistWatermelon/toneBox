const mysql = require('../config/mysql');
const resultPromise = (sql, params) => {
    if (!params) {
        return new Promise((resolve, reject) => {
            mysql.query(sql, (err, data) => {
                if (err) {
                    console.log(sql + '查询失败:' + err)
                    reject(err)
                } else {
                    resolve(data)
                }
            })
        });
    } else {
        return new Promise((resolve, reject) => {
            mysql.query(sql, params, (err, data) => {
                if (err) {
                    console.log(sql + '查询失败:' + err)
                    reject(err)
                } else {
                    resolve(data)
                }
            })
        });
    }
}
const log = console.log.bind(console)



const curresntUser = function (request, u = null) {
    log('*******', request.session)
    return request.session[u] !== undefined

}
module.exports = {
    resultPromise,
    mysql,
    log,
    curresntUser,
}