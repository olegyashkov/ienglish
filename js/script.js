
$( document ).ready(function() {

    $(function() {
    $(".header_mobile").click(function(e) {
        e.preventDefault();
        $(this).toggleClass("active");
        if ($('.header_nav').hasClass('header_nav_active')) {
            $('.header_nav').removeClass('header_nav_active');
        }
        else {
            $('.header_nav').addClass('header_nav_active');
        }
        
    });
});




});