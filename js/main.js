$('#navButtons').hide()
new Typewriter(150,document.getElementById("navTitle"), "App|ETS", false, function(){
    setTimeout("showNavButtons()", 400)

})

var showNavButtons = function(){
    $('#navTitle').removeClass("typewriter")
    $('#navButtons').show("slow","swing",function(){
        
    })
}