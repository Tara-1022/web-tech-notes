const fs = require('fs')

// let data = fs.readFileSync('text.txt')
// console.log(data.toString())
let data = "Karunya University"
// fs.writeFile('text2.txt', "Welcome to CSE\n", function(err){
//     if (err) throw err
//     console.log('Data Saved')
// })

// fs.appendFile('text2.txt', data, function(err){
//     if (err) throw err
//     console.log('Data Saved')
// })

// fs.unlink('text.txt', function(err){
//         if (err) throw err
//         console.log('File deleted')
// })

// fs.rename('text2.txt', 'text.txt', function(err){
//             if (err) throw err
//             console.log('renamed')
//     })
    
fs.readdir('C:\\Users\\DELL\\Documents\\Web Tech', function(err, files){
    if(err) throw err
    files.forEach(function(file){
        console.log(file)
    })
}) //mkdir