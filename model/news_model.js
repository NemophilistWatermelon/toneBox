let {
  resultPromise,
  mysql
} = require('../lib/util')


class News {
  constructor() {
    this.table = 'news'
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
        (imgurl, newscontent, create_time, topic, topicDes, markdown)
        VALUES 
          (?, ?, ?, ?, ?, ?)
            `
    var res = await resultPromise(sqlPartten, [form.imgUrl, form.newscontent, form.create_time, form.topic, form.topicDes, form.markdown])
    return res;
  }

  async update(form) {
    console.log('update', form)
    var sqlPartten = `
       UPDATE ${this.table} 
      SET
        imgurl = ?, 
        newscontent = ?,
        update_time = ?,
        topic = ?, 
        topicDes = ?,
        markdown = ?
      WHERE id = ?
            `
    var res = await resultPromise(sqlPartten, [form.imgurl, form.newscontent, form.update_time, form.topic, form.topicDes, form.markdown, form.id])
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