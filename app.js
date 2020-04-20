var express=require('express')

var app=express()

app.get('/user',function (req,res) {
  res.header('Content-type', 'text/plain;charset=utf-8')
  res.end('查所有')
})
//拦截功能
app.param('id',function (req,res,next) {
  req.params.id=`你的学号是${req.params.id}`
  next()
})
app.param('name',function (req,res,next) {
  req.params.name=`你的姓名是${req.params.name}`
  next()
})
//表示id是占位符 必须有但是可以随机,路径参数
// /user/1/2  {id:1,name:2} params上req上 一一对应的
app.get('/user/:id/:name',function (req,res) {
  res.header('Content-type', 'text/plain;charset=utf-8')
   res.end(`${req.params.id} ${req.params.name}`)
})

app.listen(3000,function () {
  console.log('3000端口的服务器启动了！！！');
})