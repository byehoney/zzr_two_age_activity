$(function(){
	function isNoPro(){
		var d = new Date(Number($("#currentTime").val()));
        var hours=d.getHours();
        if(hours>=23&&hours<=24){
        	return true;
        }
        return false;
	}
	isNoPro();

    
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: "auto",
	    spaceBetween: 30,
	    centeredSlides: !0,
	    watchSlidesProgress: !0,
	    onProgress: function(a) {
	        var b, c, d;
	        for (b = 0; b < a.slides.length; b++) c = a.slides[b],
	        d = c.progress,
	        scale = 1 - Math.min(Math.abs(.2 * d), 1),
	        es = c.style,
	        es.opacity = 1 - Math.min(Math.abs(d / 2), 1),
	        es.webkitTransform = es.MsTransform = es.msTransform = es.MozTransform = es.OTransform = es.transform = "translate3d(0px,0," + -Math.abs(150 * d) + "px)"
	    },
	    onSetTransition: function(a, b) {
	        for (var c = 0; c < a.slides.length; c++) es = a.slides[c].style,
	        es.webkitTransitionDuration = es.MsTransitionDuration = es.msTransitionDuration = es.MozTransitionDuration = es.OTransitionDuration = es.transitionDuration = b + "ms"
	    }
    });
    
})