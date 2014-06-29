picoContactsApp.controller('LocalContactsController', function($scope, $location) {
    $scope.contacts = [];

    var allContacts = navigator.mozContacts.getAll({sortBy: "familyName", sortOrder: "descending"});
    allContacts.onsuccess = function(event) {
        var cursor = event.target;
        if (cursor.result) {
            $scope.contacts.push(cursor.result);
            cursor.continue();
        }
        $scope.$digest();
    };
    allContacts.onerror = function() {
        $scope.routeTo('/error');
        // TODO: somehow reload page to instantly show the error page?
    };
});