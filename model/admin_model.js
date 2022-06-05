let {
    resultPromise,
    mysql
} = require('../lib/util')


class Admin {
    constructor() {
        this.table = 'kevinHomeadmin'
    }

    async selectAdminByForm(form) {
        var sqlPartten = `
                select
                    *
                from
                    ${this.table} 
                where 
                    usr = ?  and pwd = ?
            `
        var res = await resultPromise(sqlPartten, form)
        return res;
    }

}

module.exports = new Admin();