//加载fs模块
const fs = require('fs')
//写入文件内容
fs.writeFile('./test.txt','hello node.js',(err)=>{
    if(err) console.log(err)
        else console.log('写入成功')
})

fs.readFile('./test.txt',(err,data)=>{
   if(err) console.log(err)
        else console.log(data.toString())
})
