/*! Made Magnify - v0.1.0 - 2013-08-05
* https://github.com/madethemes/jquery-magnify
* Copyright (c) 2013 Made Themes; Licensed MIT */
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

  madeMagnify.validateElement = function(element) {

    if ($(element).attr('src')) {

      var image_object = new Image();
      image_object.src = $(element).attr("src");
      
      var native_width = image_object.width,
          native_height = image_object.height;

      if (native_width > 0 && native_height > 0) {
        return true;
      }
      else {
        return false;
      }

    } else {
      return false;
    }

  };

  madeMagnify.buildHtml = function(element) {

    var attrWidth = $(element).attr('width'),
        attrHeight = $(element).attr('height'),
        attrSrc = $(element).attr('src');

    return $(element)
    .wrap('<div class="made-magnify-wrap" style="position:relative; width:'+ attrWidth +'px; height:'+ attrHeight +'px;"></div>')
    .after('<div class="made-magnify-large" style="position:absolute; width:'+ madeMagnify.options.lensWidth +'px; height:'+ madeMagnify.options.lensHeight +'px; background: url('+ attrSrc +') no-repeat;"></div>');

  };

  madeMagnify.setLensPosition = function(element) {
    $(element).mousemove(function(e){
      var magnify_offset = $(element).offset(),
          mx = e.pageX - magnify_offset.left,
          my = e.pageY - magnify_offset.top,
          elemLens = $(this).siblings('.made-magnify-large');

      var image_object = new Image();
      image_object.src = $(element).attr("src");
      
      var native_width = image_object.width,
          native_height = image_object.height;

        if(mx < $(this).width() && my < $(this).height() && mx > 0 && my > 0)
        {
          $(elemLens).fadeIn(100);
        }
        else
        {
          $(elemLens).fadeOut(100);
        }
        if($(elemLens).is(":visible"))
        {
          //The background position of .large will be changed according to the position
          //of the mouse over the .small image. So we will get the ratio of the pixel
          //under the mouse pointer with respect to the image and use that to position the 
          //large image inside the magnifying glass
          var rx = Math.round(mx/$(element).width()*native_width - $(elemLens).width()/2)*-1;
          var ry = Math.round(my/$(element).height()*native_height - $(elemLens).height()/2)*-1;
          var bgp = rx + "px " + ry + "px";
          
          //Time to move the magnifying glass with the mouse
          var px = mx - $(elemLens).width()/2;
          var py = my - $(elemLens).height()/2;
          //Now the glass moves with the mouse
          //The logic is to deduct half of the glass's width and height from the 
          //mouse coordinates to place it with its center at the mouse coordinates
          
          //If you hover on the image now, you should see the magnifying glass in action
          $(elemLens).css({left: px, top: py, backgroundPosition: bgp});
        }
      });
  };

  // Collection method.
  $.fn.madeMagnify = function(options){

    return this.each(function(){   

      if (madeMagnify.validateElement(this)) {

        madeMagnify.overrideOptions(options);

        madeMagnify.buildHtml(this);

        madeMagnify.setLensPosition(this);

      }         
       
    });
  };

}(jQuery));