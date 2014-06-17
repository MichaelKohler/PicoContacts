picoContactsApp.controller('MainController', function($scope, $location) {
    var serverAddress = localStorage.getItem('picoContactsServer');
    var username = localStorage.getItem('picoContactsUsername');
    if (serverAddress && username) {
        $location.path('/localContacts');
    }

    $scope.routeToAbout = function() {
        $location.path('/about');
    };

    $scope.routeToConfiguration = function() {
        $location.path('/configure');
    };
});