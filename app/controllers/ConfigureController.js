picoContactsApp.controller('ConfigureController', function($scope, $location) {
    $scope.config = {
        address: localStorage.getItem('picoContactsServer'),
        username: localStorage.getItem('picoContactsUsername'),
        master: localStorage.getItem('picoContactsMaster')
    };

    $scope.hasServerConfig = function() {
        return localStorage.getItem('picoContactsServer') !== null;
    };

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

    $scope.resetStorage = function() {
        localStorage.removeItem('picoContactsServer');
        localStorage.removeItem('picoContactsUsername');
        localStorage.removeItem('picoContactsMaster');
    };
});