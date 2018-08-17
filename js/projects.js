$('#titleDiv').hide()
$('#titleDiv').fadeToggle(1500,"swing")

/*$(function() {
var iScrollPos = 0
    $(window).scroll(function() {
        var iCurScrollPos = $(this).scrollTop();
            if (iCurScrollPos > iScrollPos) {
                $('#projectHeart').css("width", "300vw")
            } else {
               if(iCurScrollPos === 0){
                $('#projectHeart').css("width", "4vh")
               }
            }
            iScrollPos = iCurScrollPos;
        
  
      
    });
  });*/

$('#fullpage').fullpage({
    onLeave: function(index,nextIndex,direction){
        if(index.index==0 && nextIndex.index == 1 && direction ==="down"){
            $('#projectHeart').toggleClass("heartbeat")
            $('#projectHeart').css("width", "500vh")
            
            
        }
        if(index.index==1 && nextIndex.index == 0 && direction ==="up"){
            
            $('#projectHeart').css("display", "")
            $('#slide2').css("background-color", "")
            $('#projectHeart').css("width", "4vh")
            
        }
    },
    afterLoad : function(anchorLink, index){
        if(index.index == 1){
            $('#projectHeart').css("display", "none")
            $('#slide2').css("background-color", "red")
        }
        if(index.index == 0){
            $('#projectHeart').toggleClass("heartbeat")
        }
        
        
    }}

    

    
)

$('#projectHeart').on('click', function(){
    $.fn.fullpage.moveSectionDown()
    $('#projectHeart').css("width", "500vh")

})

document.querySelector( "#nav-toggle" ).addEventListener( "click", function() {
    this.classList.toggle( "active" );
});


