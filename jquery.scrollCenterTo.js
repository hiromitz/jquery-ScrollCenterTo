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
  $.fn.scrollCenterTo = function(op) {
  	
	op = $.extend({
		dur: 600,
		easing: "swing"
	}, op);
	
    // scroll position must be one
    if(1 < $(this).length) return;
    
    var w = $(window).height(),
        h = $(this).height(),
        t = $(this).offset().top,
        s = t - (w / 2) + (h / 2);
    
    $('html,body').animate({scrollTop: s}, op.dur, op.easing);
    
    return this;
  };
  
})(jQuery);
