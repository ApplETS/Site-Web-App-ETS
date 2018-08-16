$('#titleDiv').hide()
$('#titleDiv').fadeToggle(1500,"swing")

$(function() {

    $(window).scroll(function() {
        if($(this).scrollTop() > 0 ){
            if($(this).scrollTop() % 10 === 0){
                var mass = Number(1 + 0.2*$(this).scrollTop());
  
                $('#projectHeart').css({'transform': 'translate3d(-50%,-50%,0) scale(' + mass + ')'});
                console.log($('#projectHeart').css('transform'), window.innerWidth,window.innerHeight)
            }
           
        }else{
            $('#projectHeart').css({'transform': 'scale(1) translate3d(-50%,-50%,0)'});
        }
  
      
    });
  });

