const http = require('http') //to create server program, handles http request
const fs = require('fs')
const { url } = require('inspector')

const server = http.createServer(function(req, res){ //the form submission request will be cmg here
    if(req.url == '/'){
        res.writeHead(200, {'Content-Type': 'text/html'})
        fs.createReadStream('MongoDB\\02_13-10-2023_forms.html').pipe(res) 
    }
    else if(req.url == '/signup'){
        let rawdata = "";
        req.on('data', function(data){
            rawdata += data
        }) //event handling, 2types of events -> data event, end event
        // req.on('data') --> store data
        // req.on('end') --> process (display) data
        req.on('end', function(){
            let params = new URLSearchParams(rawdata)
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write("Name: " + params.get('name') + "<br>")
            res.write("Password: " + params.get('password'))
            res.end()
        }) //this event will be occured when the data is completely read
    }
    
})
server.listen('5000', function(){
    console.log('server is running at http://localhost:5000')
})

//req.url -> to get the url of the request placed --> localhost:5000/ ->default