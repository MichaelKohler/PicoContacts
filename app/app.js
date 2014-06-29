var picoContactsApp = angular.module('PicoContacts', [ 'ngRoute' ]);

picoContactsApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/overview', {
        controller: 'IndexController',
        templateUrl: 'views/index.html'
    }).when('/about', {
        controller: 'AboutController',
        templateUrl: 'views/about.html'
    }).when('/configure', {
        controller: 'ConfigureController',
        templateUrl: 'views/configure.html'
    }).when('/success', {
        controller: 'SuccessController',
        templateUrl: 'views/info.html'
    }).when('/error', {
        controller: 'ErrorController',
        templateUrl: 'views/info.html'
    }).when('/localContacts', {
        controller: 'LocalContactsController',
        templateUrl: 'views/localContacts.html'
    }).otherwise({ redirectTo: '/overview' });
}]);