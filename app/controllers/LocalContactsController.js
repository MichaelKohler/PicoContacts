picoContactsApp.controller('LocalContactsController', function($scope) {


    // for debugging purposes only
    $scope.resetStorage = function() {
        localStorage.removeItem('picoContactsServer');
        localStorage.removeItem('picoContactsUsername');
        localStorage.removeItem('picoContactsMaster');
    };
});