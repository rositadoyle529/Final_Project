 // JS drop down (hamburger) menu to get to different sections of the website
$(document).ready(function() {
    $(this).on('click', '#menu-button', function(event) {
        event.preventDefault();
        $(this).toggleClass('visible');
    })
});

// JS when an image is clicked the information about that illness through flipping appears;

	$("#lastditch").flip();
	$("#tryagain").flip();
	$("#bitime").flip();
