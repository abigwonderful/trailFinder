angular.module('trailStats', [
  'trailStats.trails',
  'trailStats.services',
  'ui.router'
])
.config(function($stateProvider, $urlRouterProvider) {
  //$urlRouterProvider.otherwise('/');
  $stateProvider
    .state('trails', {
      templateUrl: 'app/trails/trails.html',
      url: '/',
      controller: 'TrailsController'
    });
})
.run(function(){
  console.log('up and running')
})
