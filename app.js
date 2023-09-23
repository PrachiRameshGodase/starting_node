
const express=require('express')
const bodyparser=require('body-parser')
const app=express()

app.use(bodyparser.urlencoded({extended:false}))
app.use('/app-product',(req,res,next)=>{
 res.send("<form action='/product' method='POST'><input type='text'name='title'><button type='submit'>Add Product</button></form>")
    
})

app.post('/product',(req,res,next)=>{
    console.log(JSON.stringify(req.body)); 
    res.redirect('/')
})
app.use('/',(req,res,next)=>{
  res.send('<h1>Hello from express!</h1>')
    
})


app.listen(3000)