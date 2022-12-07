const path = require('path')

// console.log(path.sep);
// normalize file path
const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath)

// base file path
const base = path.basename(filePath)
console.log(base);

// absolute file path
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute);