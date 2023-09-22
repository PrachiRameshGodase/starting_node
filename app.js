const http=require('http')

const server=http.createServer((req,res)=>{
    // console.log(req.url,req.method,req.headers)
    const url=req.url
    if(url==='/'){
        res.write('<html>')
        res.write("<head><title>Enter Message</title></head>")
        res.write("<body><form action='/message' method='POST'><input type='text' name='message'><button type='submit'>Send</button></form></body>")
        res.write('</html>')
        return res.end()
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

server.listen(3000)