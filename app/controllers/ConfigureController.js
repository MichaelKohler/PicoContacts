picoContactsApp.controller('ConfigureController', function($scope, $location) {
    $scope.config = {};

    $scope.saveConfiguration = function() {
        localStorage.setItem('picoContactsServer', $scope.config.address);
        localStorage.setItem('picoContactsUsername', $scope.config.username);
        // TODO: save password??
        localStorage.setItem('picoContactsMaster', $scope.config.master);
        $scope.redirectToLocalContacts();
    };

    $scope.redirectToLocalContacts = function() {
        $location.path('/localContacts');
    };
});