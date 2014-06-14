var picoContactsApp = angular.module('PicoContacts', [ 'ngRoute' ]);

picoContactsApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
        controller: 'MainController',
        controllerAs: 'main',
        templateUrl: 'views/index.html'
    }).when('/about', {
        controller: 'AboutController',
        controllerAs: 'about',
        templateUrl: 'views/about.html'
    });
}]);

document.addEventListener('DOMComponentsLoaded', function(){
    // run brick code here...
});