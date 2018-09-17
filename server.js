const express = require('express');
const next = require('next');
const routes = require('./routers');
const port = parseInt(process.env.PORT, 10) || 6060;
const app = next({ dev: process.env.NODE_ENV !== 'production' })
const handler = routes.getRequestHandler(app)
const mobxReact = require('mobx-react');

mobxReact.useStaticRendering(true)

app.prepare()
  .then(() => {
    const server = express()
    server.get('*', (req, res) => {
      return handler(req, res)
    })

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
  })