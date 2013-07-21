/*! Made Magnify - v0.1.0 - 2013-07-21
* https://github.com/madethemes/jquery-magnify
* Copyright (c) 2013 Made Themes; Licensed MIT */
(function($) {

  // Collection method.
  $.fn.madeMagnify = function() {
    return this.each(function(i) {
       // Do something awesome to each selected element.
       $(this).html('awesome' + i);
    });
  };

  // Static method.
  $.madeMagnify = function(options) {
    // Override default options with passed-in options.
    options = $.extend({}, $.madeMagnify.options, options);
    // Return something awesome.
    return 'awesome' + options.punctuation;
  };

  // Static method default options.
  $.madeMagnify.options = {
    punctuation: '.'
  };

  // Custom selector.
  $.expr[':'].madeMagnify = function(elem) {
    // Is this element awesome?
    return $(elem).text().indexOf('awesome') !== -1;
  };

}(jQuery));
