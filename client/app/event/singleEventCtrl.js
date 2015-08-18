'use strict';

angular.module('baariApp')
  .controller('singleEventCtrl', function ($scope, $http, $location, Auth, $stateParams) {

    $scope.single = "";
    $scope.id = $stateParams.id;
   $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
   
   $scope.getEvent = function() {
    var haettava = 'api/events/' + $scope.id;
     console.log('täällä');
    console.log(haettava);
       $http.get(haettava).success(function(single) {
      $scope.single = single;
     console.log($scope.single);
    });
    };

     $scope.getEvent();

$scope.cancelEvent = function() {
  $location.path('/backlog');
}

$scope.saveEvent = function() {
  var haettava = 'api/events/' + $scope.id;
 $http.put(haettava, $scope.single).success(function(single) {
      $scope.single = single;
     console.log($scope.single);
    });
}
$scope.deleteEvent = function() {
  var haettava = 'api/events/' + $scope.id;
 $http.delete(haettava).success(function(single) {
      $scope.single = "";
      $location.path('/backlog');
    });
}

  });
