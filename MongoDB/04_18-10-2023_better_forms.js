const http = require('http')
const fs = require('fs')
const { URLSearchParams } = require('url')

const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/test_db').then(function () {
    console.log('database connected')
})

const schema = new mongoose.Schema({ name: String, reg: String })
const model = mongoose.model('test', schema)


const server = http.createServer(function (req, res) {
    if (req.url == '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        fs.createReadStream('MongoDB\\02_13-10-2023_forms.html').pipe(res)
    }
    else if (req.url == '/signup' && req.method=='POST') {
        let rawdata = ""
        req.on('data', function (data) {
            rawdata += data
        })

        req.on('end', function () {
            let params = new URLSearchParams(rawdata)
            res.writeHead(200, { 'Content-Type': 'text/html' })
            model.create({
                name: params.get('name'),
                reg: params.get('reg')
            })
            res.write('Data saved')
            res.end()
        })
    }
})

server.listen('5000', function(){
    console.log('server is running at http://localhost:5000')
})