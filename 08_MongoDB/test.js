console.log("Testing Nodejs")
// make http request to mongodb server & take responses
const http = require('http')
const fs = require('fs')
const mongoose = require('mongoose')
// npm install mongoose

mongoose.connect('mongodb://127.0.0.1:27017/Conways-Game-of-life')
    .then(function(){
        console.log('mongodb://127.0.0.1:27017/Conways-Game-of-life DB connected')
    })
const cell_schema = new mongoose.Schema({name:String, cells:Array})
const pattern_model = mongoose.model('patterns', cell_schema)


const server = http.createServer(function (request, response){
    if(request.url === '/'){
        console.log('fetching data..')
        response.writeHead('200', {'Content-Type':'text/html'} )
        pattern_model.find().then(function(data){
            console.log(data)
            data.forEach(item => {
            response.write(item.name + '<br>')
            item.cells.forEach(cell => {
                response.write(cell[0] + "." + cell[1])
            })
            })
        })
    }
    // response.writeHead('200', {'Content-Type':'text/html'} )
    // success, content type
    // response.write('hello')
    // response.end()
    // use url pattern to define what page is shown when
})

server.listen('8000', function(){
    console.log("server started at.. http://127.0.0.1:8000")
})