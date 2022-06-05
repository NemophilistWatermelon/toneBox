var log = console.log.bind(console)
const recordWord = {}
// 准备房间号
const room = function () {
  return new Set([6666, 8888, 9999, 9898])
}

// 存储用户 外键是 房间号
const User = []

const roomMap = new Map()

const Room = function(r) {
  this.roomId = r.roomId
  this.User = r.userinfo
  this.setRoomPush = function () {
    var id = this.roomId
    // create
    this.createRoomById(id, this.User)
  }

  this.createRoomById = function (id, User) {
    var log = console.log.bind(console)
    if (!roomMap.get(id)) {
      roomMap.set(id, new Map())
    }
    log(User, 'user')
    roomMap.get(id).set(User.chatNickName, User)
  }
}



const addRoom = function() {
  var [socket, user] = arguments
  var log = console.log.bind(console)
  log('addUser', user)
  user.chatUserId = new Date().getTime() + 'chat_qn'
  new Room(user).setRoomPush()
  socket.emit('notififyRoom', user)

}

/* 添加进入房间信息 */
var _addRoom = {
  socketType: 'on',
  socketFunc: addRoom,
  socketsBindKey: 'addRoom',
}




/* 当前房间信息 */
const roomInfo = function() {
  var [socket, id] = arguments
  var log = console.log.bind(console)
  var findRoom = roomMap.get(parseInt(id))
  var roomInfo = []
  if (findRoom) {
    findRoom.forEach(item => {
      roomInfo.push(item)
    })
  }
  var data = {
    roomId: id,
    roomInfo
  }
  socket.emit('sendRoomInfo', data)
  socket.broadcast.emit('sendRoomInfo', data)

}

var _roomInfo = {
  socketType: 'on',
  socketFunc: roomInfo,
  socketsBindKey: 'roomInfo',
}

const roomIds = function() {
  let [socket] = arguments
  var log = console.log.bind(console)
  var roomSet = Array.from(room())
  socket.emit('getRoomIds', roomSet)
}

var _roomIds = {
  socketType: 'on',
  socketFunc: roomIds,
  socketsBindKey: 'roomIds',
}


const roomChat = function () {
  let [socket, form] = arguments
  // 判断一下该房间号聊天内容是否初始化
  var roomWrods = recordWord[form.roomId] ? recordWord[form.roomId] : []
  form._createTime = new Date().getTime()
  roomWrods.push(form)
  recordWord[form.roomId] = roomWrods
  socket.emit('words', recordWord[form.roomId])
  socket.broadcast.emit('words', recordWord[form.roomId])
}

var _roomChat = {
  socketType: 'on',
  socketFunc: roomChat,
  socketsBindKey: 'sendWords',
}


const getWords = function () {
  let [socket, form] = arguments
  socket.emit('words', recordWord[form.roomId])
}

var _roomGetWords = {
  socketType: 'on',
  socketFunc: getWords,
  socketsBindKey: 'getWords',
}

module.exports = [
  _addRoom,
  _roomInfo,
  _roomIds,
  _roomChat,
  _roomGetWords
]
