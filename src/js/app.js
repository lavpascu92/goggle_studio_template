$(document).ready(function () {
    // AOS(animate on scroll) plugin initialization
    AOS.init();
    // Hero background image slight move on mousemove
    var heroImg = $("#hero-img").get(0);
    var parallaxInstance = new Parallax(heroImg, {
        relativeInput: true,
        hoverOnly: true,
    });
    // Fade out hero background image on scroll down
    $(window).scroll(() => {
        $(".hero").css("opacity", 1 - $(window).scrollTop() / ($('.hero').height() / 1.5));
    });
    // Toggle is-active animation class on hamburger menu 
    $('.hamburger').on("click", () => {
        $('.hamburger').toggleClass("is-active");
    });
    // Toggle display fixed left nav menu on click hamburger
    $('.hamburger').on('click', () => {
        $('.fixed-left-nav').toggleClass('d-none');
    });

});