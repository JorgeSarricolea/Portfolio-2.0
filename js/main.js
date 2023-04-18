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

    $(".btn-wa").click(function() {
        window.open($(this).attr('href'));
    });

    $('.btn-jumwork').click(function() {
        window.open($(this).attr('href'));
    });

    $('.btn-calorie').click(function() {
        window.open($(this).attr('href'));
    });

    $('.btn-recipies').click(function() {
        window.open($(this).attr('href'));
    });

    $('.btn-joorge').click(function() {
        window.open($(this).attr('href'));
    });

    $('.btn-weatherapp').click(function() {
        window.open($(this).attr('href'));
    });

    $('.btn-spotifyclon').click(function() {
        window.open($(this).attr('href'));
    });

    // Download my CV

    $('.btn-cv').click(function() {
        window.location.href = 'assets/SarricoleaVeyroJorge_CV.pdf';
    });

    /* Interests Links
    ----------------*/

    $('#interests .container-group').click(function() {
        window.open($(this).attr('href'));
    });

    /* Web Development Information Toggle
    ----------------*/

    $("#web-development .btn-moreinfo").click(function() {
        $(this).toggleClass("disabled-objects");
        $(".container-group").hide();
        $("#web-development.container-group").show();
        $(".content").toggleClass("activecontent");
        $(".container-group").toggleClass("activecontainer-group");
    });

    $("#web-development .btn-back").click(function() {
        $(this).toggleClass("disabled-objects");
        $(".container-group").toggleClass("disabled-objects");
        $(".container-group").show();
        $(".content").toggleClass("activecontent");
        $(".container-group").toggleClass("activecontainer-group");
        $(".btn-moreinfo").removeClass("disabled-objects");
        $(this).show();
    });

    /* Programming Course Information Toggle
    ----------------*/

    $("#programming-course .btn-moreinfo").click(function() {
        $(this).toggleClass("disabled-objects");
        $(".container-group").hide();
        $("#programming-course.container-group").show();
        $(".content").toggleClass("activecontent");
        $(".container-group").toggleClass("activecontainer-group");
    });

    $("#programming-course .btn-back").click(function() {
        $(this).toggleClass("disabled-objects");
        $(".container-group").toggleClass("disabled-objects");
        $(".container-group").show();
        $(".content").toggleClass("activecontent");
        $(".container-group").toggleClass("activecontainer-group");
        $(".btn-moreinfo").removeClass("disabled-objects");
        $(this).show();
    });

    /* Finance Course Information Toggle
    ----------------*/

    $("#finance-course .btn-moreinfo").click(function() {
        $(this).toggleClass("disabled-objects");
        $(".container-group").hide();
        $("#finance-course.container-group").show();
        $(".content").toggleClass("activecontent");
        $(".container-group").toggleClass("activecontainer-group");
    });

    $("#finance-course .btn-back").click(function() {
        $(this).toggleClass("disabled-objects");
        $(".container-group").toggleClass("disabled-objects");
        $(".container-group").show();
        $(".content").toggleClass("activecontent");
        $(".container-group").toggleClass("activecontainer-group");
        $(".btn-moreinfo").removeClass("disabled-objects");
        $(this).show();
    });

    /* Send Email Function
    ----------------*/

    $(".btn-mail").click(function() {

        let emptyInputs = "Complete all the fields!";
        let emailError = "The email address is not valid!";
        let email = $('#email').val();

        //Valid if inputs aren't empty
        if ($('#name').val() != "" &&
            $('#subject').val() != "" &&
            $('#message').val() != "" &&
            email.includes('@')) {
                window.open(`mailto:jjorgesarricolea18@gmail.com?subject=${$('#subject').val()}&body=${$('#message').val()}`, "_blank");
                $(".empty-inputs").hide();
                $(".email-error").hide();
        //Invalid email error
        } else if (!email.includes('@')) {
            $(".email-error").html(emailError);
            $(".email-error").show();
            setTimeout(function() {
                $(".email-error").hide();
            }, 3000);
        } else {
        //Empty inputs error
            $(".empty-inputs").html(emptyInputs);
            $(".empty-inputs").show();
            setTimeout(function() {
                $(".empty-inputs").hide();
            }, 3000);
        }
    });
});