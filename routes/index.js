var express = require('express');
var router = express.Router();
const mysql=require("mysql")

var db = mysql.createConnection({
  host: "119.45.12.238",
  port: "3307",
  user: "root",
  password: "84529563f",
  database: "wenlx"
})

db.connect(function(err) {
  if (err) {
    console.log('err', err)
  }
})

//2.发送请求(查询)
db.query("SELECT * FROM user",function(err,data){
	if(err){
		console.log("数据库访问出错",err);
	}
})

// db.end(function(err) {
//   if (err) {
//     return
//   }
//   console.log('[connection end] succeed!')
// })
// db.destroy()
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
})

module.exports = router;
