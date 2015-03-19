'use strict';
/* mikä on Auth, $location, $window?
$location => eli osoite. muutoksen URL tai muutokset $locationissa angularin heiniä
$window => viittaus selaimen window objectiin mutta paikallisesti => ei siihen globaalin objektiin
eli siihen joka on dom puun huipulla  
Auth => varmaan joku palvelu  tässä sovelluksessa...
*/
angular.module('baariApp')
  .controller('LoginCtrl', function ($scope, Auth, $location, $window) {
    $scope.user = {};
    $scope.errors = {};

    $scope.login = function(form) {
      $scope.submitted = true;

      if(form.$valid) {
        Auth.login({
          email: $scope.user.email,
          password: $scope.user.password
        })
        .then( function() {
          // Logged in, redirect to home
          $location.path('/');
        })
        .catch( function(err) {
          $scope.errors.other = err.message;
        });
      }
    };

    $scope.loginOauth = function(provider) {
      $window.location.href = '/auth/' + provider;
    };
  });
