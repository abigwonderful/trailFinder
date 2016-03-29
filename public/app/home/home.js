
angular.module('trailStats.home', ['trailStats.services'])

.controller('HomeController', function ($scope, Trails) {
  // Your code here
  $scope.data = {};
  $scope.trails ={};
  $scope.queried = false;
  $scope.expanded = false;
  // $scope.bg = 'biking';

  $scope.getTrails = function(){
    $scope.data.city = $scope.trailCity;
    $scope.data.state = $scope.trailState;
    $scope.data.type = $scope.trailType;
    $scope.expanded = false;
    // $scope.bg = Trails.typeHolder($scope.data.type);
    // alert($scope.bg)

    Trails.getTrails($scope.data)
      .then(function(trails){
       console.log('trails', trails);
        $scope.trails = trails
        $scope.queried = true;
      }).catch(function(err){
        console.log(err);
      })
  };
  $scope.expand = function(id){
    var data = {
      unique_id: id
    }
    
    Trails.singleTrail(data)
    .then(function(trail){
      $scope.trails = trail
      $scope.queried = true;
      $scope.expanded = true;
    })
    //Trails.getSingle($scope.data)

  }

  //$scope.getTrails();
});
