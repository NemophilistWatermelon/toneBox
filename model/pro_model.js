let {
  resultPromise,
  mysql
} = require('../lib/util')


class News {
  constructor() {
    this.table = 'pro'
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
    console.log(form)
    var sqlPartten = `
        INSERT INTO
          ${this.table} 
        (imgurl, procontent, create_time, proName, markdown, proCatgory)
        VALUES 
          (?, ?, ?, ?, ?, ?)
            `
    var res = await resultPromise(sqlPartten, [form.imgUrl, form.procontent, form.create_time, form.proName, form.markdown, form.proCatgory])
    return res;
  }

  async findCatgory(form) {

    var sqlPartten = `
       SELECT 
        *
       FROM
          ${this.table}
      WHERE proCatgory = ?
       `
    var res = await resultPromise(sqlPartten, [form.proCatgory])
    return res;
  }

  async update(form) {
    console.log('update', form)
    var sqlPartten = `
       UPDATE ${this.table} 
      SET
        imgurl = ?, 
        procontent = ?,
        update_time = ?,
        proName = ?, 
        markdown = ?,
        proCatgory = ?
      WHERE id = ?
            `
    var res = await resultPromise(sqlPartten, [form.imgurl, form.procontent, form.update_time, form.proName, form.markdown, form.proCatgory, form.id])
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

  async saveNoFile(form) {
    var sqlPartten = `
        INSERT INTO
          ${this.table} 
        (procontent, create_time, proName, markdown, proCatgory)
        VALUES 
          (?, ?, ?, ?, ?)
            `
    var res = await resultPromise(sqlPartten, [form.procontent, form.create_time, form.proName, form.markdown, form.proCatgory])
  }

  async detailById(form) {
    var sqlPartten = `
                select *  
                from ${this.table}
                where id = ?
            `
    var res = await resultPromise(sqlPartten, [form.id])
    return res;
  }


  async detailAll() {
    var sqlPartten = `
                select *  
                from ${this.table}
            `
    var res = await resultPromise(sqlPartten)
    return res;
  }

}

module.exports = new News();