'use strict';

angular.module('workspaceApp')
  .controller('PortalCtrl', [ '$state', function ($state) {
    var ctrl = this;
    ctrl.menu = [
      {
        'title': 'Feed',
        'link': '/portal',
        'route': 'portal.feeds'
      },
      {
        'title': 'Following',
        'link': '/portal/following',
        'route': 'portal.following'
      }
    ];
    
    ctrl.isActive = function(route){
      return $state.is(route);
    }
  }]);
