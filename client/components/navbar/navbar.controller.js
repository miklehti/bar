'use strict';

angular.module('baariApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    },{
      'title': 'Idea?',
      'link': '/event'
    },
    {
      'title': 'Backlog',
      'link': '/backlog'
    }
     ];

     $scope.admin = [{
      'title': 'Administration',
      'link': '/admin'
    },{
      'title': 'Add Users',
      'link': '/signup'
    }
     ];

     $scope.loggedIn = [
     ];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });