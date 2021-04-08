var express = require('express');
var router = express.Router();
var cors = require('cors')
var app = express()
app.use(cors())

// 引入数据库配置文件
const db = require('./database')

// 获取数据库中的user表数据
app.get('/', (err, res) => {
  const sql = 'SELECT * FROM user';
  db.query(sql, (err, result) => {
      if(err){
          return;
      }
      // res：API传数据
      // result：返回的数据，需要转成JSON格式
      res.json({
        data: result,
        total: 4
      }); 
  }); 
}) 

// 获取数据库中的user表数据
app.get('/class', (err, res) => {
  const sql = 'SELECT * FROM class';
  db.query(sql, (err, result) => {
      if(err){
          return;
      }
      // res.json({
      //   data: result,
      //   total: 4
      // }); 
      res.render('class', {arr: result})
  }); 
}) 

module.exports = app;
