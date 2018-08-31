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

    })
}

document.querySelector( "#nav-toggle" ).addEventListener( "click", function() {
    this.classList.toggle( "active" );
});