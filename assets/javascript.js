$(document).ready(function () {
    //If using tablet or mobile, uses this function instead of hover to display project information
    //Downside: doesn't unfade.  Tried multiple ways to get the hover to work and this was the only way that did
    var windowSize = window.matchMedia("(max-width: 768px)");
    $(".overlay").on("click", function () {
        if (windowSize.matches) {
            $(this).css("opacity", 1);
        }
    });
})