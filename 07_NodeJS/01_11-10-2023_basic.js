// node NodeJS\00_11-10-2023_basic.js
// since we're running it outside the browser, we can't use document object, alert, window
console.log("Hello world")

function sayHi() {
    console.log("Hi")
}

sayHi()

var a = 10;
var b = 10;
console.log("I got", (a + b))

// no predefined structure for code
// cls to clear (windows) terminal

function cube(n) {
    return n * n * n
}

console.log(cube(11))

// accessing external module
const calc = require('./01_11-10-2023_calculator.js')
// 'require' to include any module
console.log("Fact:", calc.factorial(9))

// built in
const fs = require('fs')
fs.readFile('./01_abc.txt', function (error, data) {
    if (error) {
        console.log(error)
    }
    // callback function
    // enables non blocking async comm
    // error - boolean val (true if issue)
    // data - stores content
    else {
        console.log("DEF:", data)
        console.log("STRING:" + data.toString())
    }
})