picoContactsApp.controller('LocalContactsController', function($scope) {
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
        console.warn("Something went terribly wrong! :(");
    };
});