//引入express框架
const express = require('express');
//创建网站服务器
const app = express();

//网站公告
// app.use((req,res,next) => {
//     res.send('当前网站正在维护...');
// })

app.use('/admin',(req,res,next) => {
    //设置登录状态
    let isLogin = true;
    if(isLogin) {
        //让请求继续向下执行
        next();
    }else {
        res.send('您还没有登录，不能访问admin这个页面');
    }
})

app.get('/admin',(req,res) => {
    res.send('您已经登录，可以访问当前页面');
})

app.use((req,res,next) => {
    res.status(404);
    res.send('当前访问页面不存在');
})

//监听端口
app.listen(3000);
console.log('网站服务器启动成功');