const os =  require('os')


const {freemem , totalmem} = os
const total = parseInt(totalmem() / 1024 / 1024)
const mem = parseInt(freemem() / 1024 / 1024)

console.log(`${parseInt(freemem() / 1024 / 1024)}`, totalmem());