const { log } = require("../lib/util");


let {
    resultPromise,
    mysql
} = require('../lib/util')
class Message {
    constructor(tableName) {
        this.tableName = "t_msg";
    }
    static new() {
        return new this();
    }
    // 写入留言
    async leaved_msg(option) {}
    // 查询留言
    async find_msg(topic_id) {}
    // 回复留言
    async reply_msg() {}
}




module.exports = Message.new();