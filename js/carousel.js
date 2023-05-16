$(document).ready(function () {
    // Functions for carousel images
    //-----------------------------------
    var carousel = $('#carousel');
    var images = carousel.find('img');
    var prevButton = $('#prev');
    var nextButton = $('#next');
    var currentIndex = 0;
    var timer;

    // Function to show an image
    function showImage(index) {
        images.eq(currentIndex).hide();
        currentIndex = index;
        images.eq(currentIndex).show();
    }

    // Function to show previous image
    function prevImage() {
        var newIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(newIndex);
    }

    // Function to show next image
    function nextImage() {
        var newIndex = (currentIndex + 1) % images.length;
        showImage(newIndex);
    }

    // Function to change the image after 2 seconds
    function startTimer() {
        timer = setInterval(function () {
            nextImage();
        }, 3000);
    }

    // Function to stop timer
    function stopTimer() {
        clearInterval(timer);
    }

    // Listener to the "back" button
    prevButton.on('click', function () {
        stopTimer();
        prevImage();
        startTimer();
    });

    // Listener to the "next" button
    nextButton.on('click', function () {
        stopTimer();
        nextImage();
        startTimer();
    });

    // Start te funtion when page is loaded
    startTimer();
});