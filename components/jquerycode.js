
jQuery.noConflict();

$(document).ready(function() {
	console.log( "ready!" );
	$( "#my_button" ).click(function() {
        alert('test');
        return false;
    });
});