const fs = require('fs')
    // 套路 node 因为 node启动 app.js use了router 所以 要站在app.js 的角度去寻找这个 emoji.json 文件
var data = fs.readFileSync(`${__dirname}/emoji.json`, 'utf-8')
module.exports = JSON.parse(data)