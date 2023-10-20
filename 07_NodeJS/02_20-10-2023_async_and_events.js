// Non-blocking asynchronous communication

// single thread manages multiple tasks
// event loop: endless loop that waits for tasks, executes & sleeps till revived (by request)
// executes tasks from event queue one at a time; FIFO
// allows us to use callbacks and promises
// may not execute in order of calling
console.log('task 1')

setTimeout(
    function () {
        console.log('task 2')
    }
    , 4000)

console.log('task 3')

setTimeout(
    function () {
        console.log('task 4')
    }
    , 3000)
// shorter timeout first
console.log('task 5')
// task 3 does not wait for task 2 before execution; task 2 has been pushed to the event loop
// makes it fast for a single threaded app

const fs = require('fs')
// readFileSync - synchronous blocking call
// readFile - async non-blocking call

console.log('\nprogram starts')
var data = fs.readFileSync('./01_abc.txt')
console.log(data.toString())
console.log('program ends\n')

console.log('\nprogram starts')
fs.readFile('./01_abc.txt', function (err, data) {
    console.log(data.toString() + " asynchronously")
}) // returns undefined
console.log('program ends\n')
// sync code causes application to become inefficient


// Event-driven programming
// Event emitters -> create events onto event queue -> event loop takes event & runs event handler (usually callback function)
// observer - object that tracks an event
// EventEmitter class used to bind events & listeners
// emit() - trigger an event
//  on() - add a callback function; executed when event triggered
const events = require('events')

const emitter = new events.EventEmitter()

emitter.on('database', function(){
    console.log('database is ready')
    // task
})
emitter.on('read', function(){
    console.log('read event triggered')
    console.log(fs.readFileSync('./01_abc.txt').toString()) // can also do async here
    console.log('read complete\n')
})
emitter.emit('read')
emitter.emit('database')
// exception handling - use the err argument
// err may be followed by any number of args
fs.readFile('./01_abc.txt', function (err, data) {
    if (err) throw err;
    console.log(data.toString() + " for no reason. Repeatedly")
})