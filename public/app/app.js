angular.module('trailStats', [
  'trailStats.trails',
  'trailStats.home',
  'trailStats.services',
  'ui.router',
  'ngMap'
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
.controller('BaseController', function(NgMap) {
  NgMap.getMap().then(function(map) {
    console.log(map.getCenter());
    console.log('markers', map.markers);
    console.log('shapes', map.shapes);
  });
})
.run(function(){
  console.log('up and running')
})
