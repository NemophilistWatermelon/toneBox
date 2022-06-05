'use strict'

let {
    resultPromise,
    mysql
} = require('../lib/util')
const log = console.log.bind('console')

class Blog {
    constructor(tableName) {
        this.tableName = "t_blog";
    }
    static new() {
        return new this();
    }
    // 读取所有blog
    async readBlogAll(tableName) {
            let sql = `
                    SELECT
                        blogTitle, blogBody, blogCreateTime, blogAuthor, blogCatgory
                    From
                        ${this.tableName}
                    Order By
                        blogCreateTime DESC
                `
            let res = await resultPromise(sql)

            return res;
        }
        // 读取blog总数
    async get_blogs_length() {
            var sql = `
                    SELECT
                        count(*) as length
                    From
                        ${this.tableName}`;

            var res = await resultPromise(sql)

            return res[0].length;
        }
        // 分页读取blog
    async get_limit_blog(limitNum, getNum) {
            let sql = `
                    SELECT
                        id, blogTitle, blogBody,blogCreateTime, blogAuthor, blogCatgory
                    From
                        ${this.tableName}
                    Order By
                        id desc
                    Limit
                        ?, ${getNum}`;

            let res = await resultPromise(sql, [limitNum]);

            return res;

        }
        // 读取某一条数据
    async get_one_blog(index) {
        let sql = `SELECT
                        blogTitle, blogBody, blogCreateTime, blogAuthor blogCatgory
                   From
                        ${this.tableName}
                   WHERE id = ?
                    `

        let res = await resultPromise(sql, [index]);
        return res;
    }

    async save(form) {

            let blogTitle = form.blogTitle,
                blogBody = mysql.escape(form.blogBody),
                blogAuthor = form.blogAuthor,
                blogCreateTime = form.blogCreateTime,
                blogCatgory = form.blogCatgory;
            // ('${blogTitle}',"${blogBody}",'${blogAuthor}','${blogCreateTime}', '${blogCatgory}')
            let sql = `
                    INSERT INTO
                        ${this.tableName}
                        (blogTitle,blogBody,blogAuthor,blogCreateTime,blogCatgory)
                    VALUES
                        (?, ?, ?, ?, ?)
                 `

            let res = await resultPromise(sql, [blogTitle, blogBody, blogAuthor, blogCreateTime, blogCatgory])

            return res;
        }
        // 根据tag 进行数据查询 模糊统配
    async select_by_tag(blogCatgoryNum) {
        let sql = `
                    SELECT
                        blogCatgory, blogCreateTime, blogTitle, id
                    From
                        ${this.tableName}
                    WHERE
                        blogCatgory
                            like ?`;

        let res = await resultPromise(sql, [`%${blogCatgoryNum}%`])

        return res;
    }
}
module.exports = Blog.new();