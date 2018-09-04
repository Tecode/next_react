const routes = require('next-routes');

module.exports = routes()
.add('demo', '/demo/:id', 'demo')