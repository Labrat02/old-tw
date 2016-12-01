
angular.module('triviaWorldApp')
.controller('StatsController', ['$scope', '$http', 'reportService', function ($scope, $http, reportService) {
    console.log('StatsController');

        reportService.getHighScores().then(function(data){
            $scope.reports = JSON.stringify(data);
        });

}]);
  