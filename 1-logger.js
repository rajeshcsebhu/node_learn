const { EventEmitter } = require("events");

// (function (exports, require, module, __filename, __dirname){
class Logger extends EventEmitter{

    url = 'http://mylogger.io/log';
    log(message){
        // Send an HTTP Request
        console.log(message)
    }
    
}
// console.log();
console.log(__filename)
console.log(__dirname)
// module.exports.log = log;
module.exports = log
// module.exports.endPoint = url;
// we can write -> module.exports = log
// we can write -> exports.log = log
// we can't write -> exports = log, 'cause exports is a reference to module
// })