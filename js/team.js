$('#row1').hide();
$('#row2').hide();
$('#row3').hide()
$('#row1').toggle("slide",1500);
$('#row2').toggle("slide",{direction:'right'},1500);
$('#row3').toggle("slide",1500);

document.querySelector("#floatingToggle").addEventListener("click", function () {


    document.querySelector("#nav-toggler").classList.toggle("active");
    $('#navToggleContent').slideToggle()
    $('#navbar').toggleClass("back-color")


});