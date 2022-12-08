// npm - global command, comes with node.
// npm --version to check the version of the npm installed

// local dependency - use it only in this particular project
// npm i <package name> to install

// global dependency - use it in any project
// npm install -g <package name>

const _ = require('lodash')

const items = [1, [2, [3, [4, [5]]]]]
const newitem = _.flattenDeep(items)
console.log(newitem)
console.log('Hello world with nodemon')