// database.js
// 连接Mysql

var mysql = require('mysql');
// 数据库连接配置
var pool = mysql.createPool({
  host: '119.45.12.238',    // 数据库的地址
  port: '3307',
  user: 'root',         // 数据库用户名
  password: '84529563f',     // 数据库密码
  database: 'wenlx'   // 数据库名称   
})
console.log(pool._allConnections.length) //0
// 对数据库进行增删改查操作的基础
function query(sql, callback) {
  pool.getConnection((err, connection) => {
    console.log(pool._allConnections.length) //1
    connection.query(sql, (err, rows) => {
      callback(err, rows)
      connection.release()
    })
  })
  console.log(pool._allConnections.length) //1
}

exports.query = query