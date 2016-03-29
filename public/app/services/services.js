angular.module('trailStats.services', ['ngSanitize'])

.factory('Trails', function ($http,$sce) {
  var type = 'biking';
  // Your code here
  var getTrails = function(params){
    return $http({
      method: 'GET',
      url: '/api/trails',
      params: params
    })
    .then(function(resp,$sce){
      var items = [];
      for (var i = 0; i < resp.data.length; i++) {
        var obj = {}
        var item = resp.data[i];
        obj.name = item.name;
        obj.unique_id = item.unique_id;
        obj.directions = item.directions;
        obj.lat = item.lat;
        obj.lon = item.lon;
        for (var j = 0; j < item.activities.length; j++) {
          if(item.activities[j].activity_type_id == params.type){
            obj.url = item.activities[j].url;
            obj.description = item.activities[j].description;
            obj.length = item.activities[j].length;
            obj.thumbnail = item.activities[j].thumbnail;
            obj.rating = item.activities[j].rating;
          }
    
        }
        items.push(obj)

      }
      console.log('newArray',items)
      return items
    })

  }
  var singleTrail = function(data){
    return $http({
      method: 'GET',
      url: '/api/trails',
      params: data
    })
    .then(function(resp){
      console.log(resp)
      return resp.data
    })
  }
  var typeHolder = function(passed){
    // if(passed && passed == 2){
    //   return true
    // }
    // else {
    //   return false; 
    // }
  }
  return {
    getTrails:getTrails,
    singleTrail: singleTrail,
    typeHolder: typeHolder
  };
});