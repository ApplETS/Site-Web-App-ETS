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
    autoScrolling:true,
    scrollOverflow:true,
    onLeave: function(index,nextIndex,direction){
        if(index.index==0 && nextIndex.index == 1 && direction ==="down"){
            $('#projectHeart').toggleClass("heartbeat")
            $('#projectHeart').css("width", "400vh")
            $('#projectHeart').css("margin-top", "100vh")
            $('.fp-controlArrow').hide()

            
            
        }
        if(index.index==1 && nextIndex.index == 0 && direction ==="up"){
            $('#section1').css("background-color", "")
            $('#projectHeart').css("display", "")

            $('#projectHeart').css("width", "4vh")
            $('#projectHeart').css("margin-top", "3.5vh")
            $('.project-slide').fadeToggle(500,"linear")

            $('#header').css('background-color', '')

            
        }
    },
    afterLoad : function(anchorLink, index){
        console.log(index)
        if(index.index == 1){
            $.fn.fullpage.setAutoScrolling(true)

            $('#section1').css("background-color", "rgb(206, 32, 28)")
            $('#projectHeart').css("display", "none")

            $('.project-slide').fadeToggle(500,"swing")
            $('.fp-controlArrow').fadeToggle(500,"swing")

            $('#androidETSMOBILE').css('height', '45vh')
            $('#play-store-link').css('width', '165px')
            $('#iosETSMOBILE').css('height', '35vh')
    $('#app-store-link').css('width', '100px')

            $('#header').css('background-color', 'rgba(99, 10, 7, 0.73)')

            $('#app-layer-1').css('transform', '')
            $('#app-layer-3').css('transform', '')

        }
        if(index.index == 0){
            $('#projectHeart').toggleClass("heartbeat")
        
            setTimeout("separateAppLayers()",750)

        }
        
        
    },
    afterSlideLoad: function(section,origin,destination,direction){
        console.log(section,origin,destination,direction)
    }}

    

    
)

fullpage_api.setAllowScrolling(true);



$('#projectHeart').on('click', function(){
    $.fn.fullpage.moveSectionDown()
    $('#projectHeart').css("width", "600vh")

})

document.querySelector( "#nav-toggle" ).addEventListener( "click", function() {
    this.classList.toggle( "active" );
});

$('#android-etsmobile-link').on("mouseover",function(){
    $('#androidETSMOBILE').css('height', '45vh')
    $('#play-store-link').css('width', '165px')
    $('#iosETSMOBILE').css('height', '35vh')
    $('#app-store-link').css('width', '100px')
})

$('#android-etsmobile-link').on("click",function(){
    $('#androidETSMOBILE').css('height', '45vh')
    $('#play-store-link').css('width', '165px')
    $('#iosETSMOBILE').css('height', '35vh')
    $('#app-store-link').css('width', '100px')
})


$('#ios-etsmobile-link').on("mouseover",function(){
    $('#iosETSMOBILE').css('height', '45vh')
    $('#app-store-link').css('width', '165px')
    $('#androidETSMOBILE').css('height', '35vh')
    $('#play-store-link').css('width', '100px')
})

$('#ios-etsmobile-link').on("click",function(){
    $('#iosETSMOBILE').css('height', '45vh')
    $('#app-store-link').css('width', '165px')
    $('#androidETSMOBILE').css('height', '35vh')
    $('#play-store-link').css('width', '100px')
})

function separateAppLayers(){
    $('#app-layer-1').css('transform', 'translate(100px,50px)')
    $('#app-layer-3').css('transform', 'translate(-100px,-50px)')
}



