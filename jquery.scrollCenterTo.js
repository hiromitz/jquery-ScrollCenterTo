/**
 * Scroll Center To - Plugin for jQuery
 *
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Depends:
 *   jquery.js
 * 
 * Author: hiromitz ( http://github.com/hiromitz )
 * 
 */
;(function($){
  
  var el = ($.browser.webkit) ? 'body' : 'html',
  	  d = 600; // default duration
  
  $.fn.scrollCenterTo = function(dur, easing) {
    // scroll position must be one
    if(1 < $(this).length) return;
    
    d = dur || d;
    
    var w = $(window).height(),
        h = $(this).height(),
        t = $(this).position().top,
        s = t - (w / 2) + (h / 2);
    
    $(el).animate({scrollTop: s}, d, easing || "swing");
    
    return this;
    
  };
  
})(jQuery);
