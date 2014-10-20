(function($){
  $(function() {
    // var path = convertToCubicBezier($('path')[0]);
    // console.log(path);
    // var conv = convertToAbsolute($('path')[0]);
    var path = convertToCubicBezier($('path')[0]);
    console.log(path);

    

    TweenMax.to($('.blip'),20,{bezier:{type:'cubic',values:path}});
  })
})(jQuery);
