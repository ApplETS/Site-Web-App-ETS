/**
 * Fade-in the title and buttons
 */
$('#navTitle').fadeToggle(1000, "swing", function () {
    showNavButtons()
})

/**
 * Fadein function
 */
let showNavButtons = function () {
    $('#nav-toggler').css('opacity','1')
    $('#navButtons').show("slow", "swing", function () {
        $('#link-buttons-container').css('opacity','1')
        $("#typewriter-container").toggleClass("typewriter")
        new Typewriter(70, document.getElementById("typewriter-container"), "App|ETS", false, null)
    })
}
