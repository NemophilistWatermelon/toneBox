const baseFilePath = '../controller'
const CONTROLLER = require('../controller/_main_')
console.log(CONTROLLER)
const routes = []

var len = Object.keys(CONTROLLER)
for (let i = 0; i < len.length; i++) {
    routes.push(CONTROLLER[len[i]])
}
console.log(routes, 4444444)
module.exports = routes