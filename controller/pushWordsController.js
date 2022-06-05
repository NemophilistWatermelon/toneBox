const { log } = require("../lib/util")
const MsgModel = require("../model/msg_model")

const msgList = async (req, res) => {
    var form = req.body
    form.limitStart = (form.page - 1) * form.pageSize
    form.limitEnd = form.pageSize
    try {
        const result = await MsgModel.limitMsgList(form)
        const total = await MsgModel.msgTotal()
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

const wordsController = {
    method: 'post',
    path: '/msg/list',
    func: msgList
}


const DeleteWordsControllerFunc = async (req, res) => {
    try {
        const result = await MsgModel.deleteMsg(req.body)
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
const DeleteWordsController = {
    method: 'post',
    path: '/msg/delete',
    func: DeleteWordsControllerFunc
}


const saveWordsControllerFunc = async (req, res) => {
    try {
        req.body.create_time = new Date().getTime()
        console.log(req.body)
        const result = await MsgModel.save(req.body)
        console.log('run save', req.body)
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
const saveWordsController = {
    method: 'post',
    path: '/msg/save',
    func: saveWordsControllerFunc
}



module.exports = [
    wordsController,
    DeleteWordsController,
    saveWordsController,
]

