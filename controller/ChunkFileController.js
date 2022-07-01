/**
 * @desc: 切片上传
 */

const {
    resolve,
    extname,
} = require('path')
const {
    existsSync,
    writeFileSync,
    appendFileSync
} = require('fs')

const Port = require('../config/Port').port

const onUpload = (req, res) => {
    const fileName = req.body.fileName + extname(req.body.fileName)
    const curChunkSize = req.body.curChunkSize
    const fileSize = req.body.size
    const writeFilePath = resolve(__dirname, '../uploads/uploads', fileName)

    if (curChunkSize !== '0') {
        if (!existsSync(writeFilePath)) {
            res.send({
                msg: 'file does not exit',
                status: 'failed',
            })
            return
        }
        console.log(fileSize, curChunkSize)


        appendFileSync(writeFilePath, req.files.file.data)
        if (Number(curChunkSize) > Number(fileSize)) {
            console.log('进来了')
            res.send({
                msg: 'ok',
                url: `http://localhost:${Port}/uploads/` + fileName,
                status: 'ended'
            })
        } else {
            res.send({
                msg: 'ok',
                status: 'appended',
            })
        }
        return
    }

    writeFileSync(writeFilePath, req.files.file.data)
    res.send({
        msg: 'ok',
        status: 'received'
    })
}

const chunk_file = {
    path: '/upload/video',
    func: onUpload,
    method: 'post',
    noPrefix: true,
}

module.exports = [
    chunk_file
]
