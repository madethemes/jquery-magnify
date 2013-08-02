/*
 * madeMagnify
 * https://github.com/madethemes/jquery-magnify
 *
 * Copyright (c) 2013 Made Themes
 * Licensed under the MIT license.
 */

(function($) {

  var madeMagnify = $.madeMagnify = {};

  madeMagnify.defaultOptions = {
    lensWidth : 200,
    lensHeight : 200    
  };

  madeMagnify.options = null;

  madeMagnify.overrideOptions = function(options) {
    madeMagnify.options = $.extend(
       {},
       madeMagnify.defaultOptions,           
       options);
  };

  // Collection method.
  $.fn.madeMagnify = function(options){
    madeMagnify.overrideOptions(options);                    
    return this;
  };

}(jQuery));