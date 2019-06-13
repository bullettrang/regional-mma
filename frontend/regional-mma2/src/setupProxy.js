const proxy = require('../node_modules/http-proxy-middleware');
 
module.exports = function(app) {
    app.use(proxy(['/states/'], { target: 'http://localhost:5000' }));
};