const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Welcome to our home page')
        res.end()
    } else if (req.url === '/about') {
        res.write('This is my shot history')
        res.end()
    } else {
        res.write(`
        <h1>Oops!!</h1>
        <p>We can't seem to find the pare you are looking for</p>
        <a href="/">Back to home</a>`)
        res.end()
    }

})

server.listen(5000)
