angular.module('trailStats', [
  'trailStats.trails',
  'trailStats.home',
  'trailStats.services',
  'ui.router'
])
.config(function($stateProvider, $urlRouterProvider) {
  //$urlRouterProvider.otherwise('/');
  $stateProvider
    .state('home',{
      templateUrl: 'app/home/home.html',
      url: '/',
      controller: 'HomeController'
    })
    .state('trails', {
      templateUrl: 'app/trails/trails.html',
      url: '/trails',
      controller: 'TrailsController'
    });

})
.controller('BaseController', function($scope,Trails){
 
})
.run(function(){
  console.log('up and running')
})
