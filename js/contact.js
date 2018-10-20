//Fade in effects
$('#member-title').toggle("fade",1500);
$('#partner-title').toggle("fade",1500);

/**
 * Open up the menu bar when selected
 */
document.querySelector("#floatingToggle").addEventListener("click", function () {


    document.querySelector("#nav-toggler").classList.toggle("active");
    $('#navToggleContent').slideToggle()
    $('#navbar').toggleClass("back-color-black")


});

/**
 * Open up the right form when selected
 */
$('#member-contact').on('click', function () {
    
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#form-container").offset().top-100
    }, 1000);
    setTimeout("showMemberForm()",500)
})

$('#partner-contact').on('click', function () {
    
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#form-container").offset().top-100
    }, 1000);
    setTimeout("showPartnerForm()",500)
})

function showMemberForm(){
    $('.partner-form-content').hide()
    $('.member-form-content').show("blind")
}
function showPartnerForm(){
    $('.member-form-content').hide()
    $('.partner-form-content').show("blind")
}

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
