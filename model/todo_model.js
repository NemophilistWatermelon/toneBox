let { resultPromise, mysql, log } = require('../lib/util')
const stringRandom = require('string-random');

/*
    todoApi：
        - 登录

        - 注册
            1, qq number
            2, user pwd
        - addTodo
            1, 返回 添加 结果
        - updateTodo
            1, 返回 更新 结果
        - deleteTodo
            1, 返回 删除 结果
        - selectTodo
            1, 翻页效果 可缓存
            2，Redis [难]

        var todo = {
            p: task: d: 待办 ：前端传递值,
            p: c_t: d: 创建时间：后端设定,
            p: u_t: d: 未设置时 与 c_t 保持一致 ：后端设定,
            p: id: d: 数据库存储id 自增 ：后端设定,
            p: todoId: d:作为之后 CRUD 的必须传递字段,
            p: catgory: d:前端设定 分类， 板块功能,
        }

*/

class Todo {
    constructor() {
        this.tableName = 'todo'
    }

    static new() {
        return new this
    }

    async selectTodo(limitNum) {
        var table = this.tableName
        var sql = `
            SELECT
                todo_id, task, c_t, u_t, catgory
            FROM
                ${table}
            LIMIT
                ?,5
        `
        let res = await resultPromise(sql, [limitNum]);
        return res;
    }
    async selectTodoByTodoId(todo_id) {
        var sql = `
            SELECT
                task, c_t, u_t, catgory, down
            FROM
                ${this.tableName}
            WHERE
                todo_id = ?
        `
        let res = await resultPromise(sql, [todo_id]);
        return res;
    }
    async addTodo(todo) {
        let table = this.tableName
        log(todo)
        let { task, c_t, u_t, catgory } = todo
        let randmom = stringRandom(16, { numbers: true }) + new Date().getTime()
        let sql = `
            INSERT INTO
                ${table}
                (todo_id, task, c_t, u_t, catgory)
             VALUES
                (?, ?, ?, ?, ?)
        `
        log('-----sql----', sql)
        let res = await resultPromise(sql, [randmom, task, c_t, u_t, catgory]);
        return res;
    }

}


module.exports = Todo.new()
