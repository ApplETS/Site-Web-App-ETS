//Fade in effects
$('#member-title').toggle("fade",1500);
$('#partner-title').toggle("fade",1500);

/**
 * Open up the right form when selected
 */
$('#member-contact').on('click', function () {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#form-container").offset().top-100
    }, 1000);
    setTimeout("showMemberForm()", 500);
})

$('#partner-contact').on('click', function () {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#form-container").offset().top - 100
    }, 1000);
    setTimeout("showPartnerForm()", 500);
})

function showMemberForm() {
    window.open("https://formulaires.etsmtl.ca/ClubEtudiantAdhesion");
}
function showPartnerForm() {
    $('.member-form-content').hide();
    $('.partner-form-content').show("blind");
}

/**
 * Change menu bar color when scrolling
 */
window.onscroll = function(){
    if (this.document.getElementById("main-content").getBoundingClientRect().y < 0)
        $('#navbar').addClass("back-color");
    else
        $('#navbar').removeClass("back-color");
}