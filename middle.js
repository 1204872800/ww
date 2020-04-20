function app() {}

app.middlrewre=[]
//每次调用use方法，都会将方法存到数组中,默认调用数组第一项,将next方法传递给数组中的函数
//调用此函数会继续执数组的下一项
app.use=function (cd) {
  app.middlrewre.push(cd)
}

app.use(function (req,res,next) {
  console.log('1');
  next()
})

app.use(function (req,res,next) {
  console.log('2');
  next()
})

app.use(function (req,res,next) {
  console.log('3');
  next()
})

let index=0 
function next() {
  app.middlrewre[index++](null,null,next)
}

next()

