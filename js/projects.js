$('#titleDiv').hide()
$('#titleDiv').fadeToggle(1500,"swing")

$(function() {

    $(window).scroll(function() {
  
      var mass = Number(5 + 0.1*$(this).scrollTop()) + 'vh';
  
      $('#projectHeart').css({'font-size': mass, 'line-height': mass});
    });
  });

