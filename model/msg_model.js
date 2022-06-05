let {
  resultPromise,
  mysql
} = require('../lib/util')


class Msg {
  constructor() {
    this.table = 'msg'
  }

  async limitMsgList(form) {
    var sqlPartten = `
               select
                    *
                from
                    ${this.table}
                Order By
                  create_time DESC
                limit 
                  ?, ?
                
            `
    var res = await resultPromise(sqlPartten, [
      form.limitStart,
      form.limitEnd
    ])
    return res;
  }

  async msgTotal() {
    var sqlPartten = `
                select
                    count(*)
                from
                    ${this.table} 
            `
    var res = await resultPromise(sqlPartten)
    return res;
  }

  async save(form) {
    var sqlPartten = `
        INSERT INTO
          ${this.table} 
        (name, phone, content, email, create_time)
        VALUES 
          (?, ?, ?, ?, ?)
            `
    var res = await resultPromise(sqlPartten, [form.name, form.content, form.email, form.phone, form.create_time])
    return res;
  }

  async deleteMsg(form) {
    var sqlPartten = `
                delete 
                from ${this.table}
                where id = ?
            `
    var res = await resultPromise(sqlPartten, [form.id])
    return res;
  }
}

module.exports = new Msg();