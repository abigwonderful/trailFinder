'use strict';

angular.module('jam-sessions', [
    'jam-sessions.sesions',
    'jam-sessions.create',
    'ngRoute'
  ])
  .config(function($routeProvider, $httpProvider){

    $httpProvider.otherwise('/');

    $routeProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main.html',
        controller: 'MainCtrl'
      })

      .state('sessions', {
        url: '/sessions',
        templateUrl: 'app/sessions/sessions.html'
        controller: 'SessionsController'
      })

      .state('create', {
        url: '/create',
        templateUrl: 'app/sessions/sessions.html'
        controller: 'CreateController'
      })

    // .when('/', {
    //   templateUrl: 'app/sessions/sessions.html',
    //   controller: 'SessionsController'
    // })
    // .when('/sessions', {
    //   templateUrl: 'app/sessions/sessions.html',
    //   controller: 'SessionsController'
    // })
    // .when('/create', {
    //   templateUrl: 'app/create/create.html',
    //   controller: 'CreateController'
    // })

  })
