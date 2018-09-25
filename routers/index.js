const routes = require('next-routes');

module.exports = routes()
.add('demo', '/demo/:id', 'demo')
.add('nestedRouter', '/nested_router', 'nestedRouter')
.add('link1', '/nested_router/link1', 'nestedRouter/link1')
.add('link2', '/nested_router/link2', 'nestedRouter/link2')
.add('netWork', '/netWork', 'netWork')
.add('structChart', '/struct_chart', 'structChart')