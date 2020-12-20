//引入express框架
const express = require('express');
const bodyParser = require('body-parser');
//创建网站服务器
const app = express();
//拦截所有的请求
//extended:false 方法内部使用querystring 模块处理请求参数的格式
//extended:true 方法内部使用第三方模块qs处理请求参数的格式
app.use(bodyParser.urlencoded({extended: false}))

app.post('/add',(req,res) => {
    res.send(req.body);
})

//端口监听
app.listen(3000);
console.log('服务器连接成功');
