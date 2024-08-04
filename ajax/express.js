// 1、先引入
//2、创建对象
//3、创建路由规则 request对请求报文封装、response是对响应报文封装
const express = require('express');
const { request } = require('http');
const app = express();
app.get('/',(request,response)=>{
    response.send('hello express');
});


//启动服务 
app.listen(8000,()=>{
    console.log("服务已经启动")
})