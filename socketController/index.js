const ChatSocketList = require('./ChatService')
const DisConnectList = require('./DisConnect')

const socketMap= [].concat(ChatSocketList, DisConnectList)
const regisSockets = function(socket, io) {
  socketMap.forEach(item => {
    socket[item.socketType](item.socketsBindKey, item.socketFunc.bind(socket, socket))
  })
}

module.exports = regisSockets
