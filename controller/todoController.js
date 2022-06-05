// 查询API
const todoModel = require('../model/todo_model.js')
const {
    log,
    curresntUser,
} = require('../lib/util')
var user = {

    }
    // todo 首页
var todo_index = async(req, res) => {
    log('*******  in')
    var u = curresntUser(req, u)
    if (u) {
        res.render('todo/todo.html')
    } else {
        res.redirect('/api/todo/login')
    }
}


// 添加 todo
var todo_add = async(req, res) => {
    var form = req.body
    todoModel.addTodo(form)
    return res.json({
        data: form,
        status: 200
    })
}

// 查询 todo
var todo_select = async(req, res) => {
    var result = await todoModel.selectTodo(0)
    log(result)
    return res.json({
        data: result,
        status: 200,
    })
}
var washData = function(data) {
        data.c_t = new Date(Number(data.c_t)).toLocaleString()
        data.u_t = new Date(Number(data.u_t)).toLocaleString()
        return data
    }
    // todo 详情页
var todo_detail = async(req, res) => {
    var todo_id = req.params.todo_id
    var r = await todoModel.selectTodoByTodoId(todo_id)
    var html = 'todo/todo_detail.html'
    var result = washData(r[0])
    return res.render(html, {
        result: result
    })
}


// todo login get
var todo_login = (req, res) => {
        var type = req.method
        if (type == 'get') {
            var loginPath = 'todo/login.html'
            return res.render(loginPath)
        } else if (type == 'post') {
            var form = req.body.data
                //  todo login register
        }

    }
    // todo register post
var todo_register = (req, res) => {


    }
    // map
const index = {
    method: 'get',
    path: '/todo/index',
    func: todo_index,

}


const add = {
    method: 'post',
    path: '/todo/add',
    func: todo_add,

}
const select = {
    method: 'get',
    path: '/todos',
    func: todo_select,

}

const detail = {
    method: 'get',
    path: '/todo/detail/:todo_id',
    func: todo_detail,

}

const loginByGet = {
    method: 'get',
    path: '/todo/login',
    func: todo_login,

}

const loginByPost = {
    method: 'post',
    path: '/todo/detail/:todo_id',
    func: todo_login,

}

const registerByGet = {
    method: 'get',
    path: '/todo/regis',
    func: todo_register,

}

const registerByPost = {
    method: 'post',
    path: '/todo/regis',
    func: todo_register,

}

module.exports = [
    index,
    add,
    select,
    detail,
    loginByGet,
    loginByPost,
    registerByGet,
    registerByPost,

]