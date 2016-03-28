var express = require('express'),
var Path = require('path');
var routes = express.Router();

var assetFolder = Path.resolve(__dirname, '../client/');
rouetes.use(express.static(assetFolder));

routes.get('/api/*', function(req, res){
  res.send(['node', 'express', 'angular'])
})

if(process.env.NODE_ENV !== test) {
  routes.get('/*', function(req, res){
    res.sendFile( assetFolder + '/index.html' )
  })
}

var app = express();

app.use(require('body-parser').json());

app.use('/', routes);

var port = process.env.PORT || 1337;
app.list(port);

else {
  module.exports = routes;
}
