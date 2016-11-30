angular.module('triviaWorldApp')
.controller('ManageAccountController', ['$scope', '$http', '$location', function ($scope, $http, $location) {
    if (!$scope.isLoggedIn) {
        $location.path('/login');
        return
    }

    console.log('ManageAccountController');
}]);
  