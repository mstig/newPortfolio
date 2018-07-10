$(document).ready(function () {
  
    //This is used primarily for mobile since they cannot hover the card/project objects
    //Adds class to darken the opacity of overlays on click
    //Will remove class and fade other active overlays if new one is selected
    $(".overlay").on("click", function() {
        $(".overlay").removeClass("clickOpacity");
        $(this).addClass("clickOpacity");
    });
    
})