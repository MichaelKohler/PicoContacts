picoContactsApp.controller('AppController', function($scope, $location) {
    $scope.menu = document.querySelector('#globalMenuContainer');
    $scope.toggleMenu = function() {
        if ($scope.menu.classList.contains('menuHidden')) {
            $scope.menu.classList.remove('menuHidden');
            $scope.menu.classList.add('menuDisplayed');
        }
        else {
            $scope.menu.classList.remove('menuDisplayed');
            $scope.menu.classList.add('menuHidden');
        }
    };

    $scope.routeFromMenuTo = function(path) {
        // TODO: other way to collapse the menu after routing?
        $scope.menu.classList.remove('menuDisplayed');
        $scope.menu.classList.add('menuHidden');

        $location.path('/' + path);
    };
});