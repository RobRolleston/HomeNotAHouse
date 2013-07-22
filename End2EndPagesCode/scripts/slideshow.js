//slideshow.js 
//creating a slide show for the background image using css animation

//the images to iterate through
$(document).ready(function() {
    $(function() {
        $("#container").loadBGImage();
        setInterval('$("#container").loadBGImage()', 5000); 
    });

    $.fn.loadBGImage = function() {
        var slides = ["FellsPoint/Fells Point - 1.jpg",
                      "FellsPoint/Fells Point - 2.jpg",
                      "FellsPoint/Fells Point - 3.jpg",
                      "FellsPoint/Fells Point - 4.jpg",
                      "FellsPoint/Fells Point - 5.jpg"
                     ];

        var slide = slides[Math.floor(Math.random() * slides.length)];

        return this.each(function() {
            var $obj = $(this);
            $obj.fadeOut(500,function() {
                $obj.css('background-image', 'url("../images/' + slide + '")')
                    .fadeIn(500);
            });
        });
    };

});
