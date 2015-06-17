'use strict';

angular.module('workspaceApp')
  .factory('Choice', ['$resource', function ($resource) {
    return $resource('/api/polls/:id/choices/:choice_id/:isnew', {
      id: '@id',
      choice_id: '@choice_id'
    }, {
      put: {
        method: 'PUT'
      }
    })
  }]);
