
angular.module('trailStats.home', [
  'trailStats.services',
  'ngAnimate',
  'ngSanitize'
  ])

.controller('HomeController', function ($scope, $sce, Trails) {
  // Your code here
  $scope.data = {};
  $scope.trails ={};
  $scope.queried = false;
  $scope.expanded = false;
  $scope.trustHtml = function(elem) {
    return $sce.trustAsHtml(elem);
  };
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
        //console.log('trails', trails);
        $scope.trails = trails
        $scope.queried = true;
        $scope.totalTrails = $scope.trails.length;
        $scope.totalMiles = Object.keys($scope.trails).map(function(k){
          return +$scope.trails[k].length;
        }).reduce(function(a,b){ return a + b },0);
        var avg = (Object.keys($scope.trails).map(function(k){
          return +$scope.trails[k].rating;
        }).reduce(function(a,b){ return a + b },0))/$scope.totalTrails;
        $scope.avgRating = (Math.round( avg * 10 ) / 10) + '/5'; 
        
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
