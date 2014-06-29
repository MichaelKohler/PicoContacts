var ConfigurationService = picoContactsApp.service('ConfigurationService', function() {
    this.save = function(key, value) {
        localStorage.setItem(key, value);
    };

    this.get = function(key) {
        return localStorage.getItem(key);
    }

    this.resetStorage = function() {
        localStorage.removeItem('picoContactsServer');
        localStorage.removeItem('picoContactsUsername');
        localStorage.removeItem('picoContactsMaster');
    };

    this.hasServerConfig = function() {
        return localStorage.getItem('picoContactsServer') !== null;
    };
});