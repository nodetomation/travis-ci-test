'use strict';

describe('travis test specs', function () {

  it('should pass', function () {
    expect(1).toBeDefined();
  });

  xit('should not pass', function () {
    expect().toBeDefined();
  });

});