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

            $('.go-back-arrow').removeClass('show-flex')
            
        }
    },
    afterLoad : function(anchorLink, index){ 
        if(index.index == 1){

            $.fn.fullpage.setAutoScrolling(true)
            fullpage_api.setAllowScrolling(false)

            $('#section1').css("background-color", "rgb(206, 32, 28)")
            $('#projectHeart').css("display", "none")

            $('.project-slide').fadeToggle(500,"swing")
            $('.fp-controlArrow').fadeToggle(500,"swing")

            $('#androidETSMOBILE').css('height', '55vh')
            $('#play-store-link').css('width', '165px')
            $('#iosETSMOBILE').css('height', '35vh')
            $('#app-store-link').css('width', '100px')

            $('#header').css('background-color', 'rgba(99, 10, 7, 0.73)')

            $('#app-layer-1').css('transform', '')
            $('#app-layer-3').css('transform', '')

            $('.go-back-arrow').addClass('show-flex')

        }
        if(index.index == 0){
            fullpage_api.setAllowScrolling(true)
            $('#projectHeart').toggleClass("heartbeat")
        
            setTimeout("separateAppLayers()",750)

        }
        
        
    },
    onSlideLeave: function(section,origin,destination,direction){
        switch(destination.index){
            case 0:
                document.getElementById("slideTitle").innerHTML = "ETS Mobile"
                break;
            case 1:
                document.getElementById("slideTitle").innerHTML = "ETS Map"
                break;
            case 2:
                document.getElementById("slideTitle").innerHTML = "API"
                break;
        }
    }}

    

    
)

document.addEventListener('touchstart', function(){
    $('#arrow-prev').addClass("is-touch")
    $('#arrow-next').addClass("is-touch")
})

fullpage_api.setAllowScrolling(true);

$('.go-back-arrow').on('click', function(){
    fullpage_api.moveSectionUp()
})

$('#arrow-prev').on('click', function(){
    fullpage_api.moveSlideLeft()
    $('#slideTitle').click()
})

$('#arrow-next').on('click', function(){
    fullpage_api.moveSlideRight()
})

$('#desktopGithubLink').on('click',function(){
    $('.modal-background').css("visibility", "visible")
    $('.modal-background').css("background-color", "#0000004d")
})

$('#projectHeart').on('click', function(){
    $.fn.fullpage.moveSectionDown()
    $('#projectHeart').css("width", "600vh")

})

document.querySelector( "#floatingToggle" ).addEventListener( "click", function() {
    if($('.go-back-arrow').css("top") != ""){
        $('.go-back-arrow').css("top", document.getElementsByClassName("go-back-arrow")[0].getBoundingClientRect().y)
    }else{
        $('.go-back-arrow').css("top", "")
    }
    
    document.querySelector("#nav-toggler").classList.toggle( "active" );
    $('#navToggleContent').slideToggle()
});

$('#android-etsmobile-link').on("mouseover",function(){
    $('#androidETSMOBILE').css('height', '55vh')
    $('#play-store-link').css('width', '165px')
    $('#iosETSMOBILE').css('height', '35vh')
    $('#app-store-link').css('width', '100px')
})

$('#android-etsmobile-link').on("click",function(){
    $('#androidETSMOBILE').css('height', '55vh')
    $('#play-store-link').css('width', '165px')
    $('#iosETSMOBILE').css('height', '35vh')
    $('#app-store-link').css('width', '100px')
})


$('#ios-etsmobile-link').on("mouseover",function(){
    $('#iosETSMOBILE').css('height', '55vh')
    $('#app-store-link').css('width', '165px')
    $('#androidETSMOBILE').css('height', '35vh')
    $('#play-store-link').css('width', '100px')
})

$('#ios-etsmobile-link').on("click",function(){
    $('#iosETSMOBILE').css('height', '55vh')
    $('#app-store-link').css('width', '165px')
    $('#androidETSMOBILE').css('height', '35vh')
    $('#play-store-link').css('width', '100px')
})

function separateAppLayers(){
    $('#app-layer-1').css('transform', 'translate(100px,50px)')
    $('#app-layer-3').css('transform', 'translate(-100px,-50px)')
}



