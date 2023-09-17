const http=require('http')
const fs=require('fs')

const server=http.createServer((req,res)=>{
    const url=req.url
    const method=req.method
    if(url==='/'){
      
        res.write("<html>")
        res.write('<head><title>Enter Message</title><?head>')
        res.write(`<body>${data}</body>`)
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>')
        res.write("</html>")
       return res.end()
    }
    if(url==='/message' && method==='POST'){
        const body=[]
        req.on('data',(chunk)=>{
            body.push(chunk)
        })
        req.on('end',()=>{
            const parsebody=Buffer.concat(body).toString()
            const message=parsebody.split('=')[1]
            fs.writeFile('message.txt',message, err=> {
                // if (err) {
                //     console.error(err);
                //     res.statusCode = 500; // Internal Server Error
                //     return res.end();
                //   }
                res.statusCode=302
        res.setHeader('Location','/')
        return res.end()
            })
            
        })
    //  return
        
    }
    res.setHeader("Content-type",'text/html')
    res.write("<html>")
    res.write('<head><title>My First Paper</title></head>')
    res.write('<body><h1>Hello from my NOde.js Server</h1></body>')
    res.write("</html>")
    res.end()
})
server.listen(3000)