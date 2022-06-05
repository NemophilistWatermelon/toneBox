var mysql = require('mysql');
var keys = require('./key.js');
var connection;

var handleMysqlError = function() {
    connection = mysql.createPool({
        host: keys.local,
        user: keys.user,
        password: keys.pwd,
        database: keys.db,
        charset: 'utf8mb4',
    });

    connection.getConnection(function(err, con) {
        if (err) {
            handleMysqlError();
        } else {
            con.release();
        }
    })
}


handleMysqlError();

module.exports = connection;