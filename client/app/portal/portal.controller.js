'use strict';

angular.module('workspaceApp')
  .controller('PortalCtrl', [ '$state', function ($state) {
    var ctrl = this;
    ctrl.menu = [
      {
        'title': 'Feed',
        'route': 'portal.feeds'
      },
      {
        'title': 'Following',
        'route': 'portal.following'
      },
      { 
        'title': 'My Polls',
        'route': 'portal.mypolls'
      }
    ];
    
    ctrl.isActive = function(route){
      return $state.is(route);
    }
  }]);
