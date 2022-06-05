const {
    log
} = require('../lib/util')

const sendHtml = (path, res) => {
    var fs = require('fs');
    var blogHtml = fs.readFileSync(path, 'utf-8')
    res.header("Content-Type", "text/html")
    res.send(blogHtml);
}
const canvasPagefn = function(req, res) {
    var path = './views/app/draw/canvas.html';
    sendHtml(path, res)
}

// 读取各种 app path
const getCanvasPage = {
    path: '/page/canvas',
    method: 'get',
    func: canvasPagefn,

}

// 导出 app path
module.exports = [
    getCanvasPage,
]