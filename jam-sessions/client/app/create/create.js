angular.module('jam-sessions.create', [])
.controller('CreateController', function($scope) {

  $scope.name
  $scope.genre
  $scope.host
  $scope.location
  $scope.date
  $scope.instrument
  $scope.spots = [];

  $scope.addSpot = function(){
    window.promt("Something, something", "something 2");
  }

})
