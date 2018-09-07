$('#navButtons').hide()
$('#navTitle').toggle()
$('#nav-toggle').css('opacity', '0')

var y = Number(screen.height / 2) - Number($('#brandImage').position().top) - Number($('#brandImage').height())
document.getElementById("brandImage").style["transform"] = "translateY(" +  Math.round(y) + "px"+ ")"

$('#navTitle').fadeToggle(1000, "swing",function(){
    
    document.getElementById("brandImage").classList.add("brandImageTop")
    
    setTimeout("showNavButtons()",1000)
})

var showNavButtons = function(){
    $('#nav-toggle').css('opacity', '1')
    $('#navButtons').show("slow","swing",function(){
        $("#typewriter-container").toggleClass("typewriter")
        new Typewriter(90,document.getElementById("typewriter-container"),"Pour ceux qui partagent la passion du développement mobile.",false, null)
    })
}

document.querySelector("#floatingToggle").addEventListener("click", function () {


    document.querySelector("#nav-toggler").classList.toggle("active");
    $('#navToggleContent').slideToggle()
    $('#header').toggleClass("back-color")


});

