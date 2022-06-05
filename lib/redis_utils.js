const redis = require('../config/redis_config')
const {
    log
} = require('./util')

// const redis_pick = (key) => {
//     var promise_func = function(resovle, reject) {
//         redis.get(key, (err, data) => {
//             if (err) {
//                 reject(err)
//             } else {
//                 resovle({
//                     string_type: data,
//                     object_type: JSON.parse(data)
//                 })
//             }
//         })
//     }
//     return new Promise(promise_func)
// }



// const redis_save = (key, val) => {
//     var val = JSON.stringify(val)
//     redis.setnx(key, val)
// }

class Redis {
    constructor(redis) {
        this.redis = redis
    }
    save(key, val) {
        var val = JSON.stringify(val)
        this.redis.setnx(key, val)
    }
    pick(key) {
        var promise_func = function(resovle, reject) {
            redis.get(key, (err, data) => {
                if (err) {
                    reject(err)
                } else {
                    resovle({
                        string_type: data,
                        object_type: JSON.parse(data)
                    })
                }
            })
        }
        return new Promise(promise_func)
    }
}

module.exports = new Redis(redis)
