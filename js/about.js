$(document).ready(function() {

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

    var typingEffect2 = new Typed(".multiText2", {
        strings : ["I'm Web Developer and UI/UX Designer"],
        loop : false,
        typeSpeed : 50,
    });

    /* Buttons
    ----------------*/

    //Opens Discord in a new tab
    $(".btn-discord").click(function() {
        window.open($(this).attr("href"), "_blank");
    });

    /* Interests Links
    ----------------*/

    //Send the user to a link in a new tab
    $('#interests .container-group').click(function() {
        window.open($(this).attr('href'));
    });
});