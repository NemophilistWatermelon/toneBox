const disconnect = msg => {
  var log = console.log.bind(console)
  log(msg, '断开连接??')
}

var o = {
  socketType: 'on',
  socketFunc: disconnect,
  socketsBindKey: 'disconnect',
}

module.exports = [
  o
]
