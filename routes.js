
const fs=require('fs')
const requestHandler=((req,res)=>{
    const url=req.url
    const method=req.method
    if(url==='/'){
        
        res.write('<html>')
        res.write("<head><title>Enter Message</title></head>")
       
        res.write("<body><form action='/message' method='POST'><input type='text' name='message'><button type='submit'>Send</button></form></body>")
        res.write('</html>')
        return res.end()
    
    
    }
    if(url==='/message' && method==='POST'){
    const body=[]
    req.on('data',(chunk)=>{
        console.log(chunk)
        body.push(chunk)
    })
    return req.on('end',()=>{
        const parseBody=Buffer.concat(body).toString()
        console.log(parseBody)
        const message=parseBody.split('=')[1]
        fs.writeFile('message.txt',message,(err)=>{
        res.statusCode=302
        res.setHeader('Location','/')
        return res.end()
        })
        
    })
    
    
    
    
    }
    
    if(url==='/home'){
    res.write('<html>')
    res.write('<html>')
    res.write("<head><title>Welcome to home page</title></head>")
    res.write('<body><h1>Welcome to home page</h1></body>')
    res.write('</html>')
    return res.end()
    }
    if(url==='/about'){
    res.write('<html>')
    res.write('<html>')
    res.write("<head><title>Welcome to about page</title></head>")
    res.write('<body><h1>Welcome to about page</h1></body>')
    res.write('</html>')
    return res.end()
    }
    if(url==='/node'){
    res.write('<html>')
    res.write('<html>')
    res.write("<head><title>Welcome to node page</title></head>")
    res.write('<body><h1>Welcome to node page</h1></body>')
    res.write('</html>')
    return res.end()
    }
    res.setHeader('Content-Type','text/html')
    res.write('<html>')
    res.write("<head><title>My first Page</title></head>")
    res.write('<body><h1>Hello from my node.js server</h1></body>')
    res.write('</html>')
    res.end()
})
// module.exports=requestHandler

// module.exports={
//     handler:requestHandler,
//     someText:"Some hard coded text"
// }


// exports.handler=requestHandler;
// exports.someText="Some coding"


module.exports.handler=requestHandler;
module.exports.someText="Some coding"