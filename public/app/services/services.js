angular.module('trailStats.services', [])

.factory('Trails', function ($http) {
  var type = 'biking';
  // Your code here
  var getTrails = function(params){
    return $http({
      method: 'GET',
      url: '/api/trails',
      params: params
    })
    .then(function(resp){
      console.log(resp)
      return resp.data
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