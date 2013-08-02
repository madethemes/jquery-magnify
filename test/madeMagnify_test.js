(function($) {
  /*
    ======== A Handy Little QUnit Reference ========
    http://api.qunitjs.com/

    Test methods:
      module(name, {[setup][ ,teardown]})
      test(name, callback)
      expect(numberOfAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      throws(block, [expected], [message])
  */

  module('jQuery#madeMagnify', {
    // This will run before each test in this module.
    setup: function() {
      this.elems = $('#qunit-fixture').children();
    }
  });

  test('is chainable', function() {
    expect(1);
    // Not a bad test to run on collection methods.
    strictEqual(this.elems.madeMagnify(), this.elems, 'should be chainable');
  });

  test('Default Options', function() {
    equal($.madeMagnify.defaultOptions.lensWidth, 200);
    equal($.madeMagnify.defaultOptions.lensHeight, 200);         
  });

  test("Override Default Options", function() {
    $.madeMagnify.overrideOptions({
        lensWidth : 400,
        lensHeight : 300  
    });
    
    equal($.madeMagnify.options.lensWidth, 400);
    equal($.madeMagnify.options.lensHeight, 300);   
  });

  test("Calling Plugin Override Options", function() {
    $("#qunit-fixture").madeMagnify({
      lensWidth : 500
    });

    equal($.madeMagnify.options.lensWidth, 500);
    equal($.madeMagnify.options.lensHeight, 200);
  });


}(jQuery));
