$(document).ready(function(){
    // AOS plugin initialization
    AOS.init();   
    // Hero background image slight move on mousemove
    $('.hero').mousemove(function(el){
        var moveX = (el.pageX * 1 / 150);
        var moveY = (el.pageY * 1 / 150);
        $(this).css('background-position', moveX + "px " + moveY + "px");
    });
    // Fade out hero background image on scroll down
    $(window).scroll(function(){
        $(".hero").css("opacity", 1 - $(window).scrollTop() / ($('.hero').height() / 1.5));
    });
    
});
