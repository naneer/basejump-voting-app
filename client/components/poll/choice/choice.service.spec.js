'use strict';

describe('Service: choice', function () {

  // load the service's module
  beforeEach(module('workspaceApp'));

  // instantiate service
  var choice;
  beforeEach(inject(function (_choice_) {
    choice = _choice_;
  }));

  it('should do something', function () {
    expect(!!choice).toBe(true);
  });

});
