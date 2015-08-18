'use strict';

angular.module('baariApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('event', {
        url: '/event',
        templateUrl: 'app/event/event.html',
        controller: 'EventCtrl'
      })
	.state('backlog', {
        url: '/backlog',
        templateUrl: 'app/event/backlog.html',
        controller: 'EventCtrl'
      })
	.state('single', {
        url: '/single',
        templateUrl: 'app/event/singleEvent.html',
        controller: 'singleEventCtrl',
        params: {'id':null}
      })
	
      ;
  });

