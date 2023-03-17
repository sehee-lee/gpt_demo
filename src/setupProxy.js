const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/search',
        createProxyMiddleware({
            target: 'http://localhost:3100/',
            changeOrigin: true
        })
    );
};