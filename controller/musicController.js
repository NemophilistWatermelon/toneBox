const result = require('../model/music_model.js')
const basePath = '/v1/music'
const { log } = require('../lib/util')


// path -> func
const findMusicById = (req, res) => {
    log(req)
}

// path_Object
const findMusic = {
    path: `${basePath}/:id`,
    method: "get",
    func: findMusicById,

}

module.exports = [
    // 查找音乐 通过ID
    findMusic,
]