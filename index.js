const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    fs.createReadStream('./static/index.html')
    read.pipe(res)
})

server.listen(3000)
console.log(`Server on port ${3000}`)