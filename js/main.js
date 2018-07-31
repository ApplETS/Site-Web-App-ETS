$('#navButtons').hide()
$('#navTitle').toggle()

$('#navTitle').fadeToggle(1400, "swing",function(){
    showNavButtons()
})



var showNavButtons = function(){
    $('#navButtons').show("slow","swing",function(){
        
    })
}

document.querySelector( "#nav-toggle" ).addEventListener( "click", function() {
    this.classList.toggle( "active" );
  });