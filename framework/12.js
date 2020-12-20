//引入express框架
const express = require('express');
const bodyParser = require('body-parser');
const { nextTick } = require('process');
//创建网站服务器
const app = express();

app.get('/index/:id',(req,res) => {
    res.send(req.params);
})

//端口监听
app.listen(3000);
console.log('服务器连接成功');
