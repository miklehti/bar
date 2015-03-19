'use strict';

angular.module('baariApp')
  .controller('EventCtrl', function ($scope, $http) {
    $scope.events = [];

    $http.get('/api/events').success(function(events) {
      $scope.events = events;
    });

    $scope.addEvent = function() {
      if($scope.newEvent === '') {
        return;
      }
      $http.post('/api/events', { 
        name: $scope.newEvent,
        info: $scope.newInfo 
      });
      $scope.newEvent = '';
      $http.get('/api/events').success(function(events) {
      $scope.events = events;
    });
    };

    $scope.deleteEvent = function(Event) {
      console.log(Event);
      $http.delete('/api/events/' + Event._id);
      $http.get('/api/events').success(function(events) {
      $scope.events = events;
    });
    };
  });
