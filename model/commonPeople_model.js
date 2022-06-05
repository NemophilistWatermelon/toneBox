/**
 * 普通用户的注册管理
 * 
 * 
 */

let {
    resultPromise,
    mysql
} = require('../lib/util')
const { log } = require("../lib/util")



class Usr {
    constructor(tableName) {
        this.tableName = "t_usr"
    }
    static new() {
        return new this()
    }
    async insert() {}
    // 查询用户信息 通过id
    async find_by_id(id) {}
    // 更新用户信息
    async update_by_args(...agrs) {}
    // 查询用户信息 通过 唯一的用户名
    async find_by_usrname(username) {}

}

module.exports = Usr.new();