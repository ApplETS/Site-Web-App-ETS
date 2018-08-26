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
            $('#projectHeart').css("width", "600vh")
            $('.fp-controlArrow').hide()

            
            
        }
        if(index.index==1 && nextIndex.index == 0 && direction ==="up"){
            $('#section1').css("background-color", "")
            $('#projectHeart').css("display", "")

            $('#projectHeart').css("width", "4vh")
            $('.project-slide').fadeToggle(500,"linear")

            $('#header').css('background-color', '')

            
        }
    },
    afterLoad : function(anchorLink, index){
        console.log(index)
        if(index.index == 1){
            $.fn.fullpage.setAutoScrolling(true)

            $('#section1').css("background-color", "#EC2B27")
            $('#projectHeart').css("display", "none")

            $('.project-slide').fadeToggle(500,"swing")
            $('.fp-controlArrow').fadeToggle(500,"swing")

            $('#androidETSMOBILE').css('height', '45vh')
            $('#play-store-link').css('width', '165px')

            $('#header').css('background-color', 'rgba(99, 10, 7, 0.73)')

        }
        if(index.index == 0){
            $('#projectHeart').toggleClass("heartbeat")
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


$('#ios-etsmobile-link').on("mouseover",function(){
    $('#iosETSMOBILE').css('height', '45vh')
    $('#app-store-link').css('width', '165px')
    $('#androidETSMOBILE').css('height', '35vh')
    $('#play-store-link').css('width', '100px')
})



