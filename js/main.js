$(document).ready(function() {

        /* Fucntion to send the user to a new tab
    ----------------*/

    $("#primary-btn").click(function() {
        window.open($(this).attr("href"), "_blank");
    });

    $("#secondary-btn").click(function() {
        window.open($(this).attr("href"), "_blank");
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
});