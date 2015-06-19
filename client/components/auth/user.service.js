'use strict';

angular.module('workspaceApp')
  .factory('User', ['$resource', function ($resource) {
    return $resource('/api/users/:id/:controller/:follow_id', {
      id: '@_id',
      follow_id: '@follow_id'
    },
    {
      changePassword: {
        method: 'PUT',
        params: {
          controller:'password'
        }
      },
      get: {
        method: 'GET',
        params: {
          id:'me'
        }
      },
      following: {
        method: 'GET', 
        isArray: true,
        params: {
          controller: 'follows'
        }
      },
      follow: {
        method: 'POST',
        params: {
          controller: 'follows'
        }
      },
      unfollow: {
        method: 'DELETE',
        params: {
          controller: 'follows'
        }
      }
	  });
  }]);
