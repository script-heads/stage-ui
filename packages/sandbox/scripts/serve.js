const fs = require('fs')
const http = require('http')
const express = require('express')
const FormData = require('form-data')
const bodyParser = require('body-parser')
const formData = require('express-form-data')
const WebSocket = require('ws')
const axios = require('axios')
const { SERVICE_PORTS, DIST_DIR, PORT, HOST } = require('./config')
const app = express()
const server = http.createServer(app)
const sockets = []

exports.serve = async () => {
  const ws = new WebSocket.Server({ host: HOST, port: 23456 })

  ws.on('connection', (socket) => {
    sockets.push(socket)
  })

  app.use(express.static(DIST_DIR))
  app.use(bodyParser.json({ limit: '50mb', extended: true }))
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))
  app.use(formData.parse())
  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept, token, auth-token')
    next()
  })

  app.all('/api/*', async (req, res) => {
    try {
      let data = req.body
      if (req.files) {
        data = new FormData()
        contentType = 'multipart/form-data'
        Object.keys(req.files).map((key) => {
          if (!Array.isArray(req.files[key])) {
            req.files[key] = [req.files[key]]
          }
          req.files[key].forEach((file) => {
            data.append(key, fs.createReadStream(file.path))
          })
        })
        Object.keys(req.body).map((key) => {
          data.append(key, req.body[key])
        })
      }
      let url = req.url.slice(5)
      let path = url.split('/')
      let proxyPath = path[0]
      let serviceName = path[1]
      let isSecure = proxyPath !== 'localhost'

      if (proxyPath === 'localhost') {
        url = url.replace('localhost', `0.0.0.0:${SERVICE_PORTS[serviceName]}`)
      }

      const result = await axios({
        method: req.method,
        url: `${isSecure ? 'https' : 'http'}://${url}`,
        data,
        headers: Object.assign(
          {
            token: req.headers.token || '',
            'auth-token': req.headers['auth-token'] || '',
          },
          data.getHeaders ? data.getHeaders() : {},
        ),
      })

      res.writeHead(200, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify(result.data))
    } catch (error) {
      res.writeHead(200, { 'Content-Type': 'application/json' })
      res.end(
        JSON.stringify({
          error: error.message,
        }),
      )
    }
  })
  app.get('*', async (req, res) => {
    res.sendFile(DIST_DIR + '/index.html')
  })

  server.on('listening', () => {
    console.log(`📎\x1b[34m http://${server.address().address}:${server.address().port}/`)
  })
  server.listen(PORT, HOST)

  return (error, result) => {
    sockets.forEach((socket) => {
      socket.send('Reload')
    })
  }
}
