let {
    resultPromise,
    mysql
} = require('../lib/util')
const log = console.log.bind('console')

// 定义 music 数据接口
const music = function() {
    this.tableName = 'music'
}
var p = music.prototype

p.findMusic = async function(id) {
    var table = this.tableName
    var sql = `
        SELECT 
            *
        From
            ${table}
        WHERE 
            id = ?

        `
    var result = await resultPromise(sql, [id])
    return result;
}