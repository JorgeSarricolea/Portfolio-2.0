$(document).ready(function() {

    /* Fucntion to send the user to a new tab
    ----------------*/

    $("#primary-btn").click(function() {
        window.open($(this).attr("href"), "_blank");
    });

    /* Web Development Information Toggle
    ----------------*/

    $("#web-development .btn-moreinfo").click(function() {
        $(this).toggleClass("disabled-objects");
        $(".btn-moreinfo").hide();
        $(".container-group").hide();
        $("#web-development.container-group").show();
        $(".content").toggleClass("activecontent");
        $(".container-group").toggleClass("activecontainer-group");
    });

    $("#web-development .btn-back").click(function() {
        $(this).toggleClass("disabled-objects");
        $(".btn-moreinfo").show();
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
        $(".btn-moreinfo").hide();
        $(".container-group").hide();
        $("#programming-course.container-group").show();
        $(".content").toggleClass("activecontent");
        $(".container-group").toggleClass("activecontainer-group");
    });

    $("#programming-course .btn-back").click(function() {
        $(this).toggleClass("disabled-objects");
        $(".btn-moreinfo").show();
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
        $(".btn-moreinfo").hide();
        $(".container-group").hide();
        $("#finance-course.container-group").show();
        $(".content").toggleClass("activecontent");
        $(".container-group").toggleClass("activecontainer-group");
    });

    $("#finance-course .btn-back").click(function() {
        $(this).toggleClass("disabled-objects");
        $(".btn-moreinfo").show();
        $(".container-group").toggleClass("disabled-objects");
        $(".container-group").show();
        $(".content").toggleClass("activecontent");
        $(".container-group").toggleClass("activecontainer-group");
        $(".btn-moreinfo").removeClass("disabled-objects");
        $(this).show();
    });

    /* Programming Course Information Toggle
    ----------------*/

    $("#webpage-course .btn-moreinfo").click(function() {
        $(this).toggleClass("disabled-objects");
        $(".btn-moreinfo").hide();
        $(".container-group").hide();
        $("#webpage-course.container-group").show();
        $(".content").toggleClass("activecontent");
        $(".container-group").toggleClass("activecontainer-group");
    });

    $("#webpage-course .btn-back").click(function() {
        $(this).toggleClass("disabled-objects");
        $(".btn-moreinfo").show();
        $(".container-group").toggleClass("disabled-objects");
        $(".container-group").show();
        $(".content").toggleClass("activecontent");
        $(".container-group").toggleClass("activecontainer-group");
        $(".btn-moreinfo").removeClass("disabled-objects");
        $(this).show();
    });
});