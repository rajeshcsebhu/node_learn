const path = require('path')
console.log(path.sep); // platform specific path separator


const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath);

const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute);

const parse = path.parse('test.txt')
console.log(parse);