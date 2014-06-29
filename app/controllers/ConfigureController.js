picoContactsApp.controller('ConfigureController', function($scope, ConfigurationService) {
    $scope.config = {
        address: ConfigurationService.get('picoContactsServer'),
        username: ConfigurationService.get('picoContactsUsername'),
        master: ConfigurationService.get('picoContactsMaster')
    };

    $scope.saveConfiguration = function() {
        ConfigurationService.save('picoContactsServer', $scope.config.address);
        ConfigurationService.save('picoContactsUsername', $scope.config.username);
        // TODO: save password??
        ConfigurationService.save('picoContactsMaster', $scope.config.master);
        $scope.routeTo('/localContacts');
    };

    $scope.resetStorage = ConfigurationService.resetStorage;
});