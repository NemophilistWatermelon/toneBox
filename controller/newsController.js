const { log } = require("../lib/util")
const NewsModel = require("../model/news_model")

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
    const result = await NewsModel.limitMsgList(form)
    const total = await NewsModel.msgTotal()
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

const newsController = {
  method: 'post',
  path: '/news/list',
  func: msgList
}


const DeleteNewsControllerFunc = async (req, res) => {
  try {
    const result = await NewsModel.deleteMsg(req.body)
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
const DeleteNewsController = {
  method: 'post',
  path: '/news/delete',
  func: DeleteNewsControllerFunc
}


const savenewsControllerFunc = async (req, res) => {
  try {
    req.body.create_time = new Date().getTime()
    console.log(req.file)
    var form = Object.assign({}, req.body)
    form.imgUrl = req.file.filename
    console.log('run save', req.body)
    const result = await NewsModel.save(form)
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
const savenewsController = {
  method: 'post',
  path: '/news/send',
  another_func: upload.single("imgUrl"),
  func: savenewsControllerFunc
}

const updatenewsControllerFunc = async (req, res) => {
  try {
    req.body.update_time = new Date().getTime()
    console.log(req.file)
    var form = Object.assign({}, req.body)
    form.imgurl = req.file.filename
    console.log(form)
    console.log('run update', form)
    const result = await NewsModel.update(form)
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
const updatenewsController = {
  method: 'post',
  path: '/news/update',
  another_func: upload.single("imgUrl"),
  func: updatenewsControllerFunc
}


const updateNoFilenewsControllerFunc = async (req, res) => {
  try {
    req.body.update_time = String(new Date().getTime())
    var form = Object.assign({}, req.body)
    const result = await NewsModel.update(form)
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
const updateNoFilenewsController = {
  method: 'post',
  path: '/news/updateNoFile',
  func: updateNoFilenewsControllerFunc
}



const detailNewsControllerFunc = async (req, res) => {
  try {
    const result = await NewsModel.detailById(req.body)
    console.log('run detailNewsControllerFunc', req.body)
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
const DetailsNewsController = {
  method: 'post',
  path: '/news/detail',
  func: detailNewsControllerFunc
}


const detailAllNewsControllerFunc = async (req, res) => {
  try {
    const result = await NewsModel.detailAll()
    const total = await NewsModel.msgTotal()

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
const DetailsAllNewsController = {
  method: 'post',
  path: '/news/detailAll',
  func: detailAllNewsControllerFunc
}


// 上一篇下一篇


const roundNewsControllerFunc = async (req, res) => {
  try {
    const result = await NewsModel.detailAll()
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
const roundNewsController = {
  method: 'post',
  path: '/news/round',
  func: roundNewsControllerFunc
}


module.exports = [
  newsController,
  DeleteNewsController,
  savenewsController,
  DetailsNewsController,
  updatenewsController,
  updateNoFilenewsController,
  DetailsAllNewsController,
  roundNewsController
]


