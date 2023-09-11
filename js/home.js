/**
 * Initialise parallax (for the android picture)
 */
$('#parallax-content').parallax({
    imageSrc: 'images/droidcon.webp',
    speed:0.1,
    positionY:"top"
});

/**
 * Fade-in the title and buttons
 */
$('#navTitle').fadeToggle(1000, "swing", function () {
    document.getElementById("brandImage").classList.add("brandImageTop")
    showNavButtons()
})

/**
 * Fadein function
 */
var showNavButtons = function () {
    $('#nav-toggler').css('opacity','1')
    $('#navButtons').show("slow", "swing", function () {
        $('#link-buttons-container').css('opacity','1')
        $("#typewriter-container").toggleClass("typewriter")
        $('.navbar').css("background-color", "#00000080")
        new Typewriter(70, document.getElementById("typewriter-container"), "Pour ceux qui partagent la passion du développement mobile.", false, null)
    })
}

/**
 * Open up the menu bar when selected
 */
document.querySelector("#floatingToggle").addEventListener("click", function () {
    document.querySelector("#nav-toggler").classList.toggle("active");
    $('#navToggleContent').slideToggle()
    $('#navbar').toggleClass("back-color")
});

/**
 * For the android section, fade in objects when they are in the right position
 */
window.onscroll = function () {
    if(this.document.getElementById("blog").getBoundingClientRect().y < 0){
        $('.navbar').css('background-color','rgba(0, 0, 0, 0.9)')
    }else{
        $('.navbar').css('background-color','rgba(0, 0, 0, 0.5)')
    }
    if(document.getElementById("club-description").getBoundingClientRect().y + document.getElementById("club-description").getBoundingClientRect().height/2 < 3 * window.innerHeight / 4){
        $('#club-description').css("opacity","1")
    }else{
        $('#club-description').css("opacity","0")
    }
    if(document.getElementById("club-description").getBoundingClientRect().y + document.getElementById("club-description").getBoundingClientRect().height/2 < 1 * window.innerHeight / 4){
        $('#club-description').css("opacity","0")
    }

    if(document.getElementById("club-mission").getBoundingClientRect().y + document.getElementById("club-mission").getBoundingClientRect().height/2 < 3 * window.innerHeight / 4){
        $('#club-mission').css("opacity","1")
    }else{
        $('#club-mission').css("opacity","0")
    }
    if(document.getElementById("club-mission").getBoundingClientRect().y + document.getElementById("club-mission").getBoundingClientRect().height/2 < 1 * window.innerHeight / 4){
        $('#club-mission').css("opacity","0")
    }

    if(document.getElementById("club-objectives").getBoundingClientRect().y < 3 * window.innerHeight / 4){
        $('#club-objectives').css("opacity","1")
    }else{
        $('#club-objectives').css("opacity","0")
    }
    if(document.getElementById("club-objectives").getBoundingClientRect().y < 1 * window.innerHeight / 4){
        $('#club-objectives').css("opacity","0")
    }
}

/**
 * Shortcuts links
 */
$('#go-to-description-button').on('click',function(){
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#parallax-content").offset().top
    }, 1000);
})

$('#go-to-blog-button').on('click',function(){
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#blog").offset().top
    }, 1000);
})

