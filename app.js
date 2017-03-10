angular.module("app", ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: "views/home.html",
      controller: 'ctrl'
    })
    .state('listings', {
      url: '/listings',
      templateUrl: "views/listings.html",
      controller: 'lsCtrl'
    })
    $urlRouterProvider
           .otherwise('/');
});
