var express = require('express');
var Path    = require('path');
var routes  = express.Router();

var assetFolder = Path.resolve(__dirname, '../client/');
routes.use(express.static(assetFolder));

var sessions = [
  {
    name: "Rock Band",
    genre: "Classic Rock",
    host: "Alice",
    spots: [
      {
        name: "Bob",
        instrument: "Guitar"
      },
      {
        name: "Alice",
        instrument: "Piano"
      },
      {
        name: "",
        instrument: "Drummer"
      }, {
        name: "",
        instrument: "Vocals"
      }
    ]
  },
  {
    name: "Brass Quintet",
    genre: "Classical",
    host: "Rico",
    spots: [
      {
        name: "",
        instrument: "Trumpet 1"
      },
      {
        name: "",
        instrument: "Trumpet 2"
      },
      {
        name: "",
        instrument: "French Horn"
      },
      {
        name: "Rico",
        instrument: "Trombone"
      },
      {
        name: "",
        instrument: "Tuba"
      }
    ]
  }
];

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
  app.listen(port);
}

else {
  module.exports = routes;
}
