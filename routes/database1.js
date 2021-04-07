// database.js
// 连接Mysql

var mysql = require('mysql');
// 数据库连接配置
var pool = mysql.createPool({
  host: 'localhost',    // 数据库的地址
  user: 'root',         // 数据库用户名
  password: '123456',     // 数据库密码
  database: 'express'   // 数据库名称   
})
console.log(pool._allConnections.length)
// 对数据库进行增删改查操作的基础
function query(sql, callback) {
  pool.getConnection((err, connection) => {
    connection.query(sql, (err, rows) => {
      callback(err, rows)
      connection.release()
    })
  })
}

exports.query = query