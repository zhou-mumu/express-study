//引入express框架
const express = require('express');
//创建网站服务器
const app = express();

const home = require('./route/home.js');
const admin = require('./route/admin.js');

app.use('/home',home);
app.use('/admin',admin);
//端口监听
app.listen(3000);
