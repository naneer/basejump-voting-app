'use strict';

angular.module('workspaceApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('polls.new', {
        url: '/new',
        templateUrl: 'app/polls/polls.new/polls.new.html',
        controller: 'PollsNewCtrl'
      });
  });