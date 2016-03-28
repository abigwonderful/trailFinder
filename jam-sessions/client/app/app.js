'use strict';

angular.module('jam-sessions', [
    'jam-sessions.sessions',
    'jam-sessions.create',
    // 'ngRoute'
    'ui.router'
  ])
  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('/', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'SessionsController'
      })

      .state('main', {
        url: '/main',
        templateUrl: 'app/main/main.html',
        controller: 'SessionsController'
      })

      .state('sessions', {
        url: '/sessions',
        templateUrl: 'app/sessions/sessions.html',
        controller: 'SessionsController'
      })

      .state('create', {
        url: '/create',
        templateUrl: 'app/create/create.html',
        controller: 'CreateController'
      })

    // .when('/', {
    //   templateUrl: 'app/main/main.html',
    //   controller: 'SessionsController'
    // })
    // .when('/main', {
    //   templateUrl: 'app/main/main.html',
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
