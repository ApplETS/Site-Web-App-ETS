$('#row1').hide();
$('#row2').hide();
$('#row3').hide();
$('#intro-title').hide();
$('#intro-title').fadeToggle(1000,"swing");
$('#row1').toggle("slide",1500);
$('#row2').toggle("slide",{direction:'right'},1500);
$('#row3').toggle("slide",1500);

document.querySelector("#floatingToggle").addEventListener("click", function () {


    document.querySelector("#nav-toggler").classList.toggle("active");
    $('#navToggleContent').slideToggle()
    $('#navbar').toggleClass("back-color-black")


});

window.onscroll = function(){
    if(this.document.getElementById("main-content").getBoundingClientRect().y < 0){
        $('#navbar').addClass("back-color")
    }else{
        $('#navbar').removeClass("back-color")
    }
}

