$('#titleDiv').hide()
$('#titleDiv').fadeToggle(1500,"swing")

$(function() {

    $(window).scroll(function() {
        if($(this).scrollTop() > 0){
            var mass = Number(1 + Math.round(0.1*$(this).scrollTop() / 5 ) *5);
  
            $('#projectHeart').css({'transform': 'translate3d(-50%,-50%,0) scale(' + mass + ')'});
            console.log($('#projectHeart').css('transform'), window.innerWidth,window.innerHeight)
        }else{
            $('#projectHeart').css({'transform': 'translate3d(-50%,-50%,0) scale(1)'});
        }
  
      
    });
  });

