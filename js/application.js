
$(document).ready(function() {

    $(".menu-icon").click(function() {
        $(".menu").addClass("is-active");
    });

    $(".close-menu").click(function() {
        $(".menu").removeClass("is-active");
    });
    
    $(".dropdown").click(function() {
        $(this).toggleClass("is-active");
    });

 	$(function() {
        $(".show-hide").click(function() {
          $(this).parent().find(".hidden-code").toggleClass("is-visible");
        });
    });

});
