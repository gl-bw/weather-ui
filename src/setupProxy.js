const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/api', { target: 'http://microservices-api.35.239.64.228.nip.io', changeOrigin: true }));
};