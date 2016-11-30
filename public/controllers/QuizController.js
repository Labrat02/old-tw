angular.module('triviaWorldApp')
    .controller('QuizController', ['$scope', '$http', '$location', 'quizService', function ($scope, $http, $location, quizService) {
        if (!$scope.isLoggedIn) {
            $location.path('/login');
            return
        }
        
        $scope.formData = {
            questionId: null,
            answer:null
        };

        quizService.getNextQuestion().then(function(data){
            if (!data) {
                $scope.currentQuestion = null;
                $scope.remainingQuestions = 0;
            } else {
                $scope.currentQuestion = data.question;
                $scope.remainingQuestions = data.matches;
                $scope.formData.questionId = $scope.currentQuestion._id;
            }
        });



        $scope.submitAnswer = function(){
            debugger;
            quizService.submitAnswer($scope.formData).then(function(data){
                //$scope.currentUser.answers = data;

                console.log(data);

                $location.path('/quiz/');
            }); 
        }
        console.log('QuizController');
    }]);
  