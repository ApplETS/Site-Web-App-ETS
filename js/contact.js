$('#member-title').hide();
$('#partner-title').hide();
$('.member-form-content').hide();

$('#member-title').toggle("fade",1500);
$('#partner-title').toggle("fade",1500);

$('#member-contact').on("mouseover",function(){
    $('#member-option-content').show("fade",500)
})

$('#member-contact').on("mouseleave",function(){
    $('#member-option-content').hide("fade",500)
})

document.querySelector("#floatingToggle").addEventListener("click", function () {


    document.querySelector("#nav-toggler").classList.toggle("active");
    $('#navToggleContent').slideToggle()
    $('#navbar').toggleClass("back-color-black")


});

$('#member-contact').on('click', function () {
    $('.member-form-content').show("blind")
})


window.onscroll = function(){
    if(this.document.getElementById("main-content").getBoundingClientRect().y < 0){
        $('#navbar').addClass("back-color")
    }else{
        $('#navbar').removeClass("back-color")
    }
}
