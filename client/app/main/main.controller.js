'use strict';

angular.module('baariApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.awesomeThings = [];

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });

    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { 
        name: $scope.newThing,
        info: $scope.newInfo 
      });
      $scope.newThing = '';
      $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });
    };

    $scope.deleteThing = function(thing) {
      console.log(thing);
      $http.delete('/api/things/' + thing._id);
      $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });
    };
  });
