var express = require('express')
var path=require('path')
var app = express()
//res.json()  返回json的
//返回html的  res.sendFile()  返回文件的
//res.sendStatus()   返回状态码的
// res.send()   万能的
app.get('/', function (req, res) {
  res.sendFile('./index.html', {
    root: __dirname
  })
  res.sendFile(path.join(__dirname,',/index.html'))
  res.sendFile(__dirname + './index.html')
})

app.get('/status', function (req, res) {
  res.sendStatus(500)
})

app.use(function (req, res, next) {
  res.mysend = function (data) {
    if (typeof data === 'object') {
      res.setHeader('Content-type', 'text/plain;charset=utf8')
      res.end(JSON.stringify(data))
    }
    if (typeof data === 'string') {
      res.setHeader('Content-type', 'text/plain;charset=utf8')
      res.end(data)
    }
    if (typeof data === 'number') {
      res.statusCode = data
      res.end()
    }
  }
  next()
})

app.get('/send', function (req, res) {
  res.mysend()
})
app.listen(3000, function () {
  console.log('run...3000...');
})