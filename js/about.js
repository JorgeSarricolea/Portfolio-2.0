$(document).ready(function() {

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