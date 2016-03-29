angular.module('trailStats.trails', ['trailStats.services'])

.controller('TrailsController', function ($scope, Trails) {
  // Your code here
  $scope.data = {};

  $scope.getTrails = function(){

    Trails.getTrails()
      .then(function(trails){
       console.log('trails', trails);
        $scope.data.trails = trails
      }).catch(function(err){
        console.log(err);
      })
  };

  $scope.getTrails();
});
