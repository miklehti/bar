'use strict';

angular.module('baariApp')
  .controller('EventCtrl', function ($scope, $http, $location, Auth, $state, $stateParams) {
    $scope.events = [];

    $scope.audience = "All";
    $scope.emaili = "";
    $scope.emaili = "";
    $scope.URLi = "";
    $scope.testName = "";
    $scope.hypothesis = "";
    $scope.KPIs = "";
    $scope.descriptioni = "";
    $scope.imageA ="";
    $scope.imageB ="";
     $scope.site="";
    $scope.audience="";


    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    console.log($scope.isAdmin());

    $scope.getEvents = function() {
       $http.get('/api/events').success(function(events) {
      $scope.events = events;
      console.log($scope.events);
    });
    };

    $scope.getEvents();

    $scope.clearForm = function(){
    $scope.audience = "All";
    $scope.emaili = "";
    $scope.URLi = "";
    $scope.testName = "";
    $scope.hypothesis = "";
    $scope.KPIs = "";
    $scope.descriptioni = "";
    $scope.imageA ="";
    $scope.imageB ="";
    $scope.audience="";
    $scope.site="";
    };

    $scope.go = function(event){
   //$location.path('/single');

   $state.go('single', {id:event._id});
    console.log(event._id);
    };
   
    $scope.addEvent = function() {
      if($scope.emaili === '' ||$scope.URLi===""||$scope.testName ==="") {
        return;
      }
      $http.post('/api/events', { 
        audience: $scope.audience,
        emaili: $scope.emaili,
        URLi: $scope.URLi,
        testName: $scope.testName,
        hypothesis: $scope.hypothesis,
        KPIs: $scope.KPIs,
        descriptioni: $scope.descriptioni,
        imageA: $scope.imageA,
        imageB: $scope.imageB,
        audience: $scope.audience,
        site: $scope.site,
        status: "Suggestion"
      });
      $scope.clearForm();
      $scope.getEvents();
       $location.path('/backlog');
    };

    $scope.deleteEvent = function(Event) {
      console.log(Event);
      $http.delete('/api/events/' + Event._id);
      $scope.getEvents();
    };
  });
