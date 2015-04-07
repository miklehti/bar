'use strict';

angular.module('baariApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    },{
      'title': 'Olut',
      'link': '/'
    },
    {
      'title': 'Menu',
      'link': '/'
    },
    {
      'title': 'Tapahtumat',
      'link': '/'
    },
    {
      'title': 'Blog',
      'link': '/'
    }
     ];

     $scope.admin = [{
      'title': 'Hallinnoi käyttäjiä',
      'link': '/admin'
    },{
      'title': 'Lisää käyttäjä',
      'link': '/signup'
    }
     ];

     $scope.loggedIn = [{
      'title': 'Lisää tapahtuma',
      'link': '/event'
    }
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