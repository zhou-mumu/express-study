//引入express框架
const express = require('express');
const path = require('path');
const app = express();
//创建网站服务器

//实现静态资源访问功能
app.use(express.static(path.join(__dirname,'route')))

//端口监听
app.listen(3000);
console.log('服务器连接成功');
