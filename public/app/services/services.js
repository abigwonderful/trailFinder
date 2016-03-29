angular.module('trailStats.services', [])

.factory('Trails', function ($http) {
  console.log('called the factory');
  // Your code here
  var getTrails = function(){
    return $http({
      method: 'GET',
      url: '/api/trails',
      params: {
        city : "Jackson",
        state : "Wyoming",
        type: '5'
      }
    })
    .then(function(resp){
      console.log(resp)
      return resp.data
    })

  }
  return {
    getTrails:getTrails
  };
});