$('#titleDiv').hide()
$('#titleDiv').fadeToggle(1500,"swing")

$('.project-slide').hide()

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
            $('#projectHeart').css("width", "600vh")
            $('.fp-controlArrow').hide()
            
            
        }
        if(index.index==1 && nextIndex.index == 0 && direction ==="up"){
            $('#section1').css("background-color", "")
            $('#projectHeart').css("display", "")

            $('#projectHeart').css("width", "4vh")
            $('.project-slide').fadeToggle(500,"linear")

            
        }
    },
    afterLoad : function(anchorLink, index){
        console.log(index)
        if(index.index == 1){
            $('#section1').css("background-color", "#DA3D31")
            $('#projectHeart').css("display", "none")

            $('.project-slide').fadeToggle(500,"swing")
            $('.fp-controlArrow').fadeToggle(500,"swing")
        }
        if(index.index == 0){
            $('#projectHeart').toggleClass("heartbeat")
        }
        
        
    }}

    

    
)



$('#projectHeart').on('click', function(){
    $.fn.fullpage.moveSectionDown()
    $('#projectHeart').css("width", "600vh")

})

document.querySelector( "#nav-toggle" ).addEventListener( "click", function() {
    this.classList.toggle( "active" );
});


