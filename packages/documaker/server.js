const compression = require('compression')
const express = require('express')
const app = express()
const port = process.env.PORT || '9050'

app.use(compression())
app.use(express.static(__dirname))

app.get('*', (req, res) => {
    res.sendFile(`${__dirname}/index.html`)
})

app.listen(port)

console.log('Server running at port ' + port)
