;(function($){
  
  var p = $('html').scrollTop(),
      el = ($('html').scrollTop(p + 1) && (p + 1) == $('html').scrollTop()) ? 'html' : 'body', // for firefox | webkit
      d = 600; // default duration
  
  $('html').scrollTop(p);
  
  $.fn.scrollCenterTo = function(dur) {
    // scroll position must be one
    if(1 < $(this).length) return;
    
    d = dur || d;
    
    var w = $(window).height(),
        h = $(this).height(),
        t = $(this).position().top,
        s = t - (w / 2) + (h / 2);
    
    $(el).animate({scrollTop: s}, d, "swing");
    
    return this;
    
  };
  
  
})(jQuery);
