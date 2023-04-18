$(document).ready(function() {

    /* Fucntion to send the user to a new tab
    ----------------*/

    $("#primary-btn").click(function() {
        window.open($(this).attr("href"), "_blank");
    });

    /* Typing Effect
    ----------------*/

    var typingEffect2 = new Typed(".multiText2", {
        strings : ["I'm Web Developer and UI/UX Designer"],
        loop : false,
        typeSpeed : 50,
    });

    /* Interests Links
    ----------------*/

    //Send the user to a link in a new tab
    $('#interests .container-group').click(function() {
        window.open($(this).attr('href'));
    });
});