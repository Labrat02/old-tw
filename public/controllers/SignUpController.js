angular.module('triviaWorldApp')
.controller('SignUpController', ['$scope', '$http', 'userService', function ($scope, $http, userService) {
    console.log('SignUpController');

    $scope.loginForm = {
        userName:'',
        password:''
    };
    $scope.submitLogin = function(){
        userService.login($scope.loginForm.userName, $scope.loginForm.password)
        console.log('attempt login for ' + $scope.loginForm.userName);
    }
}]);
  