//Fadein effect
$('#main-content').fadeToggle(1500, "swing")

/**
 * Change menu bar color when scrolling
 */
window.onscroll = function(){
    if(this.document.getElementById("main-content").getBoundingClientRect().y < 0){
        $('#navbar').addClass("back-color")
    }else{
        $('#navbar').removeClass("back-color")
    }
}