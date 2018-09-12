$('#navButtons').hide()
$('#navTitle').toggle()
$('#nav-toggle').css('opacity', '0')
$('#parallax-content').parallax({
    imageSrc: '../images/test.jpg',
    speed:0.1,
    positionY:"top"
});



var y = Number(screen.height / 2) - Number($('#brandImage').position().top) - Number($('#brandImage').height())
document.getElementById("brandImage").style["transform"] = "translateY(" + Math.round(y) + "px" + ")"

$('#navTitle').fadeToggle(1000, "swing", function () {

    document.getElementById("brandImage").classList.add("brandImageTop")

    setTimeout("showNavButtons()", 1000)
})

var showNavButtons = function () {
    $('#nav-toggle').css('opacity', '1')
    $('#navButtons').show("slow", "swing", function () {
        $("#typewriter-container").toggleClass("typewriter")
        new Typewriter(90, document.getElementById("typewriter-container"), "Pour ceux qui partagent la passion du développement mobile.", false, null)
    })
}

document.querySelector("#floatingToggle").addEventListener("click", function () {


    document.querySelector("#nav-toggler").classList.toggle("active");
    $('#navToggleContent').slideToggle()
    $('#header').toggleClass("back-color")


});

window.onscroll = function () {



    if (window.scrollY < 600) {
        $('#club-description').css('opacity', '0')
        $('#motto').css('opacity', '1')
    } else {
        if (window.scrollY < 1400) {
            $('#club-description').css('opacity', '1')
            $('#motto').css('opacity', '0')
            $('#background-image').css('opacity', '1')
            $('#club-mission').css('opacity', '0')
        } else {
            if (window.scrollY < 2300) {
                $('#club-description').css('opacity', '0')
                $('#club-mission').css('opacity', '1')
                $('#club-objectives').css('opacity', '0')
            } else {
                $('#club-mission').css('opacity', '0')
                $('#club-objectives').css('opacity', '1')
            }

        }

    }
}
