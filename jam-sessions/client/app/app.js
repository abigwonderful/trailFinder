angular.module('jam-sessions', [
    'jam-sessions.services',
    'jam-sessions.sessions',
    'jam-sessions.create',
    'ngRoute'
  ])
  .config(function($routeProvider, $httpProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'SessionsController'
      })
      .when('/main', {
        templateUrl: 'app/main/main.html',
        controller: 'SessionsController'
      })
      .when('/sessions', {
        templateUrl: 'app/sessions/sessions.html',
        controller: 'SessionsController'
      })
      .when('/create', {
        templateUrl: 'app/create/create.html',
        controller: 'CreateController'
      })
  })
