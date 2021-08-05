// function sayHello(name){
//     console.log('Hello', name) // console - global object
// }
// sayHello('Rajesh');
// console.log(window)
/*
global objects/functions
setTimeout()
clrarTimeout()

setInterval()
clearInterval()
*/
// valid - global functions
// global.setTimeout(sayHello, 1000, 'Rajesh')
// globalThis.setTimeout(sayHello, 2000, 'Rajesh')
// setTimeout(sayHello, 3000, 'Rajesh')
// console.log(global.setTimeout)
// console.log(module)
   
    // const log = require('./logger');
    // console.log(logger);
    // logger = 1;
    // logger.log('Hello')
    // log('Hello')
    // const path = require('path');
    // console.log(path.parse(__filename))
    // const os = require('os')
    // console.log(os.platform())
    // var totalMemory = os.totalmem();
    // var freeMemory = os.freemem();
    // console.log(`Total memory: ${totalMemory}`)
    // console.log(`Free memory: ${os.freemem()}`)
    const EventEmitter = require('events')
    const emitter = new EventEmitter()
    // Register an event listener
    emitter.on('messageLogged', (event) =>
        console.log('message logged', event)
    )
    // Raise an event
    emitter.emit('messageLogged', { id: 1, url: 'url'})
    
    const http = require('http')
    const server = http.createServer((req, res)=>
    {
        if ( req.url == '/')
        {
            res.write('hello World');
            res.end();
        }
        if(req.url == 'api/courses')
        {
            res.write(JSON.stringify([1, 2, 3]))
            res.end();
        }
    });
    // server.on('connection', (socket) =>
    // {
    //     console.log('New Connection')
    // })
    server.listen(3000)
    console.log('Listening on port 3000...')