$(document).ready(function() {

    /* Function to animate the lines of the mobile menu
    ----------------*/

    $(".bars-menu").click(function() {
        $(".line1-bars-menu").toggleClass("activeline1-bars-menu");
        $(".line2-bars-menu").toggleClass("activeline2-bars-menu");
        $(".line3-bars-menu").toggleClass("activeline3-bars-menu");
        $(".items-mobile").toggleClass("activeitems-mobile");
        $("#navbar").toggleClass("activenavbar");
    });
});