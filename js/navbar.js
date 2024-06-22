/**
 * Open up the menu bar when selected
 */
document.querySelector("#nav-toggle-container").addEventListener("click", function () {
    $("#nav-toggler").toggleClass("active");
    $('#navToggleContent').slideToggle();
	$('#navbar').toggleClass("back-color-black");
});
