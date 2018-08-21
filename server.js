const express = require('express');
const next = require('next');
const port = parseInt(process.env.PORT, 10) || 6060;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const mobxReact = require('mobx-react');

mobxReact.useStaticRendering(true)
app.prepare()
  .then(() => {
    const server = express()

    // server.get('/', (req, res) => {
    //   return app.render(req, res, '/', req.query)
    // })

    // server.get('/b', (req, res) => {
    //   return app.render(req, res, '/a', req.query)
    // })

    // server.get('/posts/:id', (req, res) => {
    //   return app.render(req, res, '/posts', { id: req.params.id })
    // })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
  })