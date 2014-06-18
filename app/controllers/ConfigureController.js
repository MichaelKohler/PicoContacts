picoContactsApp.controller('ConfigureController', function($scope) {
    $scope.config = {
        address: localStorage.getItem('picoContactsServer'),
        username: localStorage.getItem('picoContactsUsername'),
        master: localStorage.getItem('picoContactsMaster')
    };

    $scope.saveConfiguration = function() {
        localStorage.setItem('picoContactsServer', $scope.config.address);
        localStorage.setItem('picoContactsUsername', $scope.config.username);
        // TODO: save password??
        localStorage.setItem('picoContactsMaster', $scope.config.master);
        $scope.routeTo('/localContacts');
    };

    $scope.resetStorage = function() {
        localStorage.removeItem('picoContactsServer');
        localStorage.removeItem('picoContactsUsername');
        localStorage.removeItem('picoContactsMaster');
    };
});