'use strict';

describe('travis test specs', function () {

  console.log('it should be executed - 1');

  it('should pass', function () {
    console.log('it should be executed - 2');
    expect(1).toBeDefined();
  });

  xit('should not pass', function () {
    expect().toBeDefined();
  });

});