angular.module('triviaWorldApp')
    .factory('reportService', ['$http', '$location', '$rootScope', '$q', function($http, $location, $rootScope, $q) {

        return {
            getHighScores: function() {
                var deferred = $q.defer();
                $http.get('/server/getHighScores/' + $rootScope.currentUser._id + '/')
                    .success(function(response){
                        deferred.resolve(response);
                    })
                    .error(function(err, status){
                        deferred.reject('');
                    });
                return deferred.promise;
            }
        };
    }]);