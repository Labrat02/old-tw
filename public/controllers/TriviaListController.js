angular.module('triviaWorldApp')
.controller('TriviaListController', ['$scope', '$http', '$location', function ($scope, $http, $location) {
    if (!$scope.isLoggedIn) {
        $location.path('/login');
        return
    }
    
    $http.get('/server/triviaquestions').success(function(response){
        console.log('response: ' + JSON.stringify(response));
        $scope.triviaQuestions = response;
    });

    console.log('TriviaListController');

    $scope.edit = function(question){
        console.log(JSON.stringify(question));
        question.isEdit = true;
    }
}]);
