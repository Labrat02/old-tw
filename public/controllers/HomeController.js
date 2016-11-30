angular.module('triviaWorldApp')
.controller('HomeController', ['$scope', '$http', '$location', function ($scope, $http, $location) {
    if (!$scope.isLoggedIn ){
        $location.path('/login');
        return
    }
    console.log('HomeController');
}]);
  