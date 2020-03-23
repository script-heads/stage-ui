const compression = require('compression')
const express = require('express')
const path = require('path')
const app = express()
const port = process.env.port || '3000'
const static = path.resolve(`${__dirname}/../../build/documaker/`)

app.use(compression())
app.use(express.static(static))

app.get('*', (req, res) => {
    res.sendFile(`${static}/index.html`)
})

app.listen(port)

console.log('Server running at port ' + port)
