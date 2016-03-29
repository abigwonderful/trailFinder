var express     = require('express');
var Path        = require('path');
var routes      = express.Router();
var requests    = require('./requests.js')

var assetFolder = Path.resolve(__dirname, '../client/');
routes.use(express.static(assetFolder));

routes.get('/api/example', function(req, res){
  res.send(['node', 'express', 'angular'])
})

if(process.env.NODE_ENV !== 'test') {

  routes.get('/*', function(req, res){
    res.sendFile( assetFolder + '/index.html' )
  })


  var app = express();

  app.use(require('body-parser').json());
  app.use('/', routes);

  var port = process.env.PORT || 1337;
  console.log("Server is listening on port", port);
  app.listen(port);
}

else {
  module.exports = routes;
}
