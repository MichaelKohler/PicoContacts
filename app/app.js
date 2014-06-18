var picoContactsApp = angular.module('PicoContacts', [ 'ngRoute' ]);

picoContactsApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
        controller: 'IndexController',
        templateUrl: 'views/index.html'
    }).when('/about', {
        controller: 'AboutController',
        templateUrl: 'views/about.html'
    }).when('/configure', {
        controller: 'ConfigureController',
        templateUrl: 'views/configure.html'
    }).when('/localContacts', {
        controller: 'LocalContactsController',
        templateUrl: 'views/localContacts.html'
    });
}]);