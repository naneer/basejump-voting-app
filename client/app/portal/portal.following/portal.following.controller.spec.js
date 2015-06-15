'use strict';

describe('Controller: PortalFollowingCtrl', function () {

  // load the controller's module
  beforeEach(module('workspaceApp'));

  var PortalFollowingCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PortalFollowingCtrl = $controller('PortalFollowingCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
