const { log } = require("../lib/util")
const proModel = require("../model/pro_model")

const multer = require("multer")
const path = require("path")


var storage = multer.diskStorage({
  // 配置文件上传后存储的路径
  destination: function (req, file, cb) {
    // NodeJS的两个全局变量
    // console.log(__dirname);  //获取当前文件在服务器上的完整目录 
    // console.log(__filename); //获取当前文件在服务器上的完整路径 
    cb(null, path.join(__dirname, '../uploads/uploads'))
  },
  // 配置文件上传后存储的路径和文件名
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname))
  }
})
var upload = multer({ storage: storage })

const msgList = async (req, res) => {
  var form = req.body
  form.limitStart = (form.page - 1) * form.pageSize
  form.limitEnd = form.pageSize
  console.log('run', form)
  try {
    const result = await proModel.limitMsgList(form)
    const total = await proModel.msgTotal()
    res.json({
      total: total[0]['count(*)'],
      code: 20000,
      status: 'success',
      data: result
    })

  } catch (error) {
    res.json({
      code: 50000,
      error: error,
      status: 'fail'
    })
  }
}

const proController = {
  method: 'post',
  path: '/pro/list',
  func: msgList
}


const DeleteproControllerFunc = async (req, res) => {
  try {
    const result = await proModel.deleteMsg(req.body)
    console.log('run delete', req.body)
    res.json({
      code: 20000,
      status: 'success',
    })
  } catch (error) {
    res.json({
      code: 50000,
      error: error,
      status: 'fail'
    })
  }
}
const DeleteproController = {
  method: 'post',
  path: '/pro/delete',
  func: DeleteproControllerFunc
}


const saveproControllerFunc = async (req, res) => {
  try {
    req.body.create_time = new Date().getTime()
    console.log(req.file)
    var form = Object.assign({}, req.body)
    form.imgUrl = req.file.filename
    console.log('run save', form)
    const result = await proModel.save(form)
    res.json({
      code: 20000,
      status: 'success',
      data: req.body
    })
  } catch (error) {
    res.json({
      code: 50000,
      error: error,
      status: 'fail'
    })
  }
}
const saveproController = {
  method: 'post',
  path: '/pro/send',
  another_func: upload.single("imgUrl"),
  func: saveproControllerFunc
}


const saveproNoFileControllerFunc = async (req, res) => {
  try {
    req.body.create_time = new Date().getTime()
    var form = Object.assign({}, req.body)
    const result = await proModel.saveNoFile(form)
    res.json({
      code: 20000,
      status: 'success',
      data: req.body
    })
  } catch (error) {
    res.json({
      code: 50000,
      error: error,
      status: 'fail'
    })
  }
}
const saveproNoFileController = {
  method: 'post',
  path: '/pro/sendNoFile',
  func: saveproNoFileControllerFunc
}


const updateproControllerFunc = async (req, res) => {
  try {
    req.body.update_time = new Date().getTime()
    console.log(req.file)
    var form = Object.assign({}, req.body)
    form.imgurl = req.file.filename
    console.log(form)
    console.log('run update', form)
    const result = await proModel.update(form)
    res.json({
      code: 20000,
      status: 'success',
      data: req.body
    })
  } catch (error) {
    res.json({
      code: 50000,
      error: error,
      status: 'fail'
    })
  }
}
const updateproController = {
  method: 'post',
  path: '/pro/update',
  another_func: upload.single("imgUrl"),
  func: updateproControllerFunc
}


const updateNoFileproControllerFunc = async (req, res) => {
  try {
    req.body.update_time = String(new Date().getTime())
    var form = Object.assign({}, req.body)
    const result = await proModel.update(form)
    res.json({
      code: 20000,
      status: 'success',
      data: req.body
    })
  } catch (error) {
    res.json({
      code: 50000,
      error: error,
      status: 'fail'
    })
  }
}
const updateNoFileproController = {
  method: 'post',
  path: '/pro/updateNoFile',
  func: updateNoFileproControllerFunc
}



const detailproControllerFunc = async (req, res) => {
  try {
    const result = await proModel.detailById(req.body)
    console.log('run detailproControllerFunc', req.body)
    res.json({
      code: 20000,
      status: 'success',
      data: result
    })
  } catch (error) {
    res.json({
      code: 50000,
      error: error,
      status: 'fail'
    })
  }
}
const DetailsproController = {
  method: 'post',
  path: '/pro/detail',
  func: detailproControllerFunc
}


const detailAllproControllerFunc = async (req, res) => {
  try {
    const result = await proModel.detailAll()
    const total = await proModel.msgTotal()

    res.json({
      total: total[0]['count(*)'],
      code: 20000,
      status: 'success',
      data: result
    })
  } catch (error) {
    res.json({
      code: 50000,
      error: error,
      status: 'fail'
    })
  }
}
const DetailsAllproController = {
  method: 'post',
  path: '/pro/detailAll',
  func: detailAllproControllerFunc
}


// 上一篇下一篇


const roundproControllerFunc = async (req, res) => {
  try {
    const result = await proModel.detailAll()
    var rounds = []
    var id = Number(req.body.id)
    result.forEach((item, index) => {
      if (item.id === id) {
        var prev = result?.[index - 1] || '没有数据'
        var next = result?.[index + 1] || '没有数据'
        rounds.push(prev, next)
      }
    })
    res.json({
      code: 20000,
      status: 'success',
      data: rounds
    })
  } catch (error) {
    res.json({
      code: 50000,
      error: error,
      status: 'fail'
    })
  }
}
const roundproController = {
  method: 'post',
  path: '/pro/round',
  func: roundproControllerFunc
}


const findCatgoryControllerFunc = async (req, res) => {
  try {
    const result = await proModel.findCatgory(req.body)
    res.json({
      code: 20000,
      status: 'success',
      data: result,
      total: result.length
    })
  } catch (error) {
    res.json({
      code: 50000,
      error: error,
      status: 'fail'
    })
  }
}
const findCatgoryController = {
  method: 'post',
  path: '/pro/catgory',
  func: findCatgoryControllerFunc
}



module.exports = [
  proController,
  DeleteproController,
  saveproController,
  saveproNoFileController,
  DetailsproController,
  updateproController,
  updateNoFileproController,
  DetailsAllproController,
  roundproController,
  findCatgoryController
]


