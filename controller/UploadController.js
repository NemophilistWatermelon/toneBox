// 通用的上传文件模块

const multer = require("multer")
const path = require('path')
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
  const UPLOAD_CONFIG = require('../config/upload')

  /**
   * 通用单张上传图片接口
   * @param {Request http} req 
   * @param {Response http} res 
   * 
   * @return {imgurl} 返回上传之后的路径
   */
  const saveproControllerFunc = async (req, res) => { 
    try {
      req.body.create_time = new Date().getTime()
      res.json({
        code: 20000,
        status: 'success',
        data: {
            create_time: req.body.create_time,
            url: UPLOAD_CONFIG.upload_path + req.file.filename
        }
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
    path: '/selfUpload',
    another_func: upload.single("file"),
    func: saveproControllerFunc
  }
  


  module.exports = [
    saveproController
  ]