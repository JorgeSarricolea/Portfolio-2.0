$(document).ready(function() {

        /* Navbar and Sections Toggle
    ----------------*/

    $(".nav-item:first").addClass("active");
    $(".nav-item:eq(6)").addClass("active");
    $(".section").hide();
    $(".section:first").show();

    $(".nav-item").click(function() {
        $(".nav-item").removeClass("active");
        $(this).addClass("active");
        $(".section").hide();

        var activeSection = $(this).attr("href");
        $(activeSection).show();
        return false;
    });

    $("nav-item dropdown").click(function() {
        $("nav-item dropdown").removeClass("active");
        $(this).addClass("active");

        var activeSection = $(this).attr("href");
        $(activeSection).show();
        return false;
    });


    /* Bars Menu Icon
    ----------------*/

    $(".bars-menu").click(function() {
        $(".line1-bars-menu").toggleClass("activeline1-bars-menu");
        $(".line2-bars-menu").toggleClass("activeline2-bars-menu");
        $(".line3-bars-menu").toggleClass("activeline3-bars-menu");
        $(".items-mobile").toggleClass("activeitems-mobile");
        $("#navbar").toggleClass("activenavbar");
    });

    /* Typing Effect
    ----------------*/

    var typingEffect = new Typed(".multiText", {
        strings : ["Web Developer", "UX/UI Designer", "Graphic Designer"],
        loop : true,
        typeSpeed : 100,
        backSpeed : 80,
        backDelay : 1500
    });

    var typingEffect2 = new Typed(".multiText2", {
        strings : ["I'm Web Developer and UI/UX Designer"],
        loop : false,
        typeSpeed : 50,
    });

    /* Buttons
    ----------------*/

    $(".btn-discord").click(function() {
        window.open($(this).attr("href"), "_blank");
    });

    $(".btn-hire").click(function() {
        window.open($(this).attr("href"), "_blank");
    });

    $(".btn-services").click(function() {
        $(".nav-item").removeClass("active");
        $(".section").hide();
        $("#services.section").show();
        $(".nav-item:eq(2)").addClass("active");
        $(".nav-item:eq(8)").addClass("active");
    });

    $('.container-group').click(function() {
        window.open($(this).attr('href'));
      });
      
});
