const _ = require('lodash')

let ar = ['1', 2, 3, 7]
ar = ar.map((n) => n + 1)
console.log(ar)

console.log(_.join(ar, '~'))
