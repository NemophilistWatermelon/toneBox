const {
    resolve,
    extname,
} = require('path')
const {
    existsSync,
    writeFileSync,
    appendFileSync
} = require('fs')
const onUpload = (req, res) => {
    const fileName = req.body.fileName + extname(req.body.fileName)
    const curChunkSize = req.body.curChunkSize
    const writeFilePath = resolve(__dirname, '../uploads/uploads', fileName)
    console.log({
        curChunkSize
    })
    if (curChunkSize !== '0') {
        if (!existsSync(writeFilePath)) {
            res.send({
                msg: 'file does not exit',
                status: 'failed',
            })
            return
        }
        appendFileSync(writeFilePath, req.files.file.data)
        res.send({
            msg: 'ok',
            status: 'appended'
        })
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
