angular.module('triviaWorldApp')
    .factory('quizService', ['$http', '$location', '$rootScope', '$q', function($http, $location, $rootScope, $q) {

        return {
            getNextQuestion: function() {
                var deferred = $q.defer();
                $http.get('/server/getNextQuestion/' + $rootScope.currentUser._id + '/')
                    .success(function(response){
                        //$location.path('/quiz/question/' + response);
                        deferred.resolve(response);
                    })
                    .error(function(err, status){
                        deferred.reject('');
                    });
                return deferred.promise;
            },
            submitAnswer: function(answer){
                var deferred = $q.defer();
                $http.post('/server/saveAnswer/' + $rootScope.currentUser._id + '/', answer)
                    .success(function(response){
                        //$location.path('/quiz/question/' + response);
                        deferred.resolve(response);
                    })
                    .error(function(err, status){
                        deferred.reject('');
                    });
                return deferred.promise;
            },
            getRandomQuestion: function(){},
            addQuestion: function(){},
            removeQuestion: function(){},
            updateQuestion: function(){}
        };
    }]);