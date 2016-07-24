var app = angular.module('app', ['angular.filter', 'ngRoute']);

// // Routing
app.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'templates/homepage.html',
    controller: 'mainCtrl'
  })
  .when('/:num', {
    templateUrl: 'templates/details.html',
    controller: 'detailsCtrl'
  })
  .otherwise({
    redirectTo: '/'
  });
});