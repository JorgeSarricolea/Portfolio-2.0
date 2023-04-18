$(document).ready(function() {

    /* Typing Effect
    ----------------*/

    var typingEffect = new Typed(".multiText", {
        strings : ["Web Developer", "UX/UI Designer", "Graphic Designer"],
        loop : true,
        typeSpeed : 100,
        backSpeed : 80,
        backDelay : 1500
    });



    /* Buttons of the projects
    ----------------*/

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