//引入express框架
const express = require('express');
const bodyParser = require('body-parser');
const { nextTick } = require('process');
//创建网站服务器
const app = express();

app.use(fn())

function fn() {
    return function(req,res,next) {
        console.log(req.method);
        next()
    }
}

app.get('/',(req,res) => {
    res.send('ok');
})

//端口监听
app.listen(3000);
console.log('服务器连接成功');
