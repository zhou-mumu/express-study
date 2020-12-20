//引入express框架
const express = require('express');
const path = require('path');
const artTemplate = require('art-template');
const app = express();

//1.告诉express框架使用什么模板引擎渲染什么后缀的模板文件
// art为模板引擎 require中为使用的模板引擎
app.engine('art',require('express-art-template'))

// 2.告诉express框架模板存放的位置是什么
// 前一个views是固定的，第二个是当前路径下面的views文件夹
app.set('views',path.join(__dirname,'views'))
// 3.告诉express框架模板的默认后缀是什么
app.set('view engine','art');

app.locals.users = [{
    name:'zhangshan',
    age:20
},{
    name:'lisi',
    age: 30
}]

app.get('/index',(req,res) => {
    //render帮助拼接模板路径，帮助拼接模板后缀，哪一个模板和哪一个数据进行拼接
    //   将拼接后的结果返回给客户端
    res.render('index', {
        msg: '首页'
    })
})

app.get('/list',(req,res) => {
    res.render('list', {
        msg: '列表页'
    })
})

//端口监听
app.listen(3000);
console.log('服务器连接成功');
