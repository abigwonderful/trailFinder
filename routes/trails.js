var creds = require('../creds.json');
var express = require('express');
var axios = require('axios');
var bodyParser = require('body-parser');

var router = express.Router();
var key = creds.key;

router.use(bodyParser.json()); // support json encoded bodies
router.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

/* GET trails. */
router.get('/', function(req, res, next) {

  var city = req.query.city;
  var state = req.query.state;
  var type = req.query.type;
  console.log(city,state,type)
  axios({
    method: 'get',
    url: 'https://trailapi-trailapi.p.mashape.com/?q[city_cont]=' + city + '&q[state_cont]=' + state + '&q[activities_activity_type_id_eq]=' + type,
    headers: {'X-Mashape-Key': key}
  })
  .then(function(allTrails){
    //console.log('we got the data',allTrails)
    res.json(allTrails.data.places);
  })
});


module.exports = router;



