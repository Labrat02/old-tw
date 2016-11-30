angular.module('triviaWorldApp')
    .factory('userService', ['$http', '$location', '$rootScope', function($http, $location, $rootScope) {

        return {
            login: function(uname,pass) {
                $http.post('/server/login', {userName: uname, password: pass})
                    .success(function(response){
                        if (response) {
                            $rootScope.currentUser = response;
                            $location.path('/');
                            $rootScope.isLoggedIn = true;
                            
                            console.log('User: ' + $rootScope.currentUser.userName + ' logged in.');
                        } else {
                            //alert('Bad Login / Password');
                            
                            console.log('Invalid Login');
                        }
                    })
                    .error(function(err, status){
                        //alert('Bad Login / Password');
                        console.log('Invalid Login');
                    });
            },
            logout: function() {
                $rootScope.isLoggedIn = false;
            },
            isLoggedIn: function() {
                return currentUser !== null && typeof currentUser !== 'undefined';
            },
            currentUser: function() { 
                return $rootScope.currentUser; 
            },
            init: function(){
                $rootScope.isLoggedIn = this.isLoggedIn;
            }
        };
    }]);