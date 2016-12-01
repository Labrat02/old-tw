var triviaWorldApp = angular.module('triviaWorldApp', ['ngResource', 'ngRoute'])
    .config(function($routeProvider, $locationProvider){

        $routeProvider.when('/', {
            templateUrl: 'views/home/index.html',
            controller: "HomeController"
        })
        .when('/manage', {
            templateUrl: 'views/manage/index.html',
            controller: "ManageAccountController"
        })
        .when('/login', {
            templateUrl: 'views/account/login.html',
            controller: "SignUpController"
        })
        .when('/signup', {
            templateUrl: 'views/account/signup.html',
            controller: "SignUpController"
        })
        .when('/quiz', {
            templateUrl: 'views/quiz/index.html',
            controller: "QuizController"
        })
        .when('/highscores', {
            templateUrl: 'views/stats/highscores.html',
            controller: "StatsController"
        })
        .otherwise({
            redirectTo: '/login'
        });

        //$locationProvider.html5Mode(true);
        // $locationProvider.html5Mode({
        //     enabled: true,
        //     requireBase: false
        // });
    })
    .run(function ($rootScope, $location) {
         $location.path('/');

         $rootScope.isLoggedIn = false;
    
    });