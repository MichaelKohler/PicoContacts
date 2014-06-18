picoContactsApp.controller('IndexController', function($scope, $location) {
    $scope.routeToAbout = function() {
        $location.path('/about');
    };

    $scope.routeToConfiguration = function() {
        $location.path('/configure');
    };
});