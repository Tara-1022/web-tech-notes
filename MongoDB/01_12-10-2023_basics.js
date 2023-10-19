// const http = require('http') //to create server program, handles http request
// const server = http.createServer(function(req, res){
//     res.writeHead('200', {'Content-Type': 'text/html'})
//     res.write("<h1>Welcome to Node JS</h1>")
//     res.write("<p>This a paragraph</p>")
//     res.end()
// })
// server.listen('5000', function(){
//     console.log('server is running at localhost in port 5000')
// })

//url: http://localhost:5000
//google -> 192.168.10.1
//default browser -> http://192.168.10.1:8080
//localhost -> 127.0.0.1

const http = require('http') //to create server program, handles http request
const fs = require('fs')
const server = http.createServer(function(req, res){
    res.writeHead('200', {'Content-Type': 'text/html'})
    fs.createReadStream('sample2.html').pipe(res) 
})
server.listen('5000', function(){
    console.log('server is running at localhost in port 5000')
})