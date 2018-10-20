//Fadein effect
$('#main-content').fadeToggle(1500, "swing")

/**
 * Open up the menu bar when selected
 */
document.querySelector("#floatingToggle").addEventListener("click", function () {
    document.querySelector("#nav-toggler").classList.toggle("active");
    $('#navToggleContent').slideToggle()
    $('#navbar').toggleClass("back-color-black")
});

/**
 * Change menu bar color when scrolling
 */
window.onscroll = function(){
    if(this.document.getElementById("main-content").getBoundingClientRect().y < 0){
        $('#navbar').addClass("back-color")
    }else{
        $('#navbar').removeClass("back-color")
    }
}