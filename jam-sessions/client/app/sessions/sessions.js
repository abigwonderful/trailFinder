angular.module('jam-sessions.sessions', [])
.controller('SessionsController', function($scope, Sessions) {
  $scope.data = {}

  // $scope.name = ''

  $scope.getSessions = function(data){
    Sessions.getSessions()
    .then(function(data){
      $scope.data = data;
      return data;
    })
  }

  $scope.signup = function(session, spot){
    spot.name = $scope.name;

    session.spots.forEach(function(val){
      if (val.instrument === spot.instrument){
        spot.name = $scope.name;
      }
    })
    Sessions.signup(session);

  }

  $scope.getSessions();
})
