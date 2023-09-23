const express=require('express')

const router=express.Router()
router.get('/app-product',(req,res,next)=>{
    res.send("<form action='/admin/app-product' method='POST'><input type='text'name='title'><button type='submit'>Add Product</button></form>")
       
   })
   
router.post('/app-product',(req,res,next)=>{
       console.log(JSON.stringify(req.body)); 
       res.redirect('/')
   })
module.exports=router