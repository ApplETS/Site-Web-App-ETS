
var isTouchScreen = false;
//In case the device is a touchscreen
document.addEventListener('touchstart', function () {
    isTouchScreen = true;
})

/**
 * Fade in the first row
 */
$('#row1').toggle("slide",1500);





/**
 * Open up the menu bar when selected
 */
document.querySelector("#floatingToggle").addEventListener("click", function () {
    document.querySelector("#nav-toggler").classList.toggle("active");
    $('#navToggleContent').slideToggle()
    $('#navbar').toggleClass("back-color-black")
});

/**
 * Change the menu bar color when scrolling
 */
window.onscroll = function(){
    if(this.document.getElementById("main-content").getBoundingClientRect().y < 0){
        $('#navbar').addClass("back-color")  
    }else{
        $('#navbar').removeClass("back-color")
    }

    /**
     * If the device is mobile, wait until the user scrolls to fadein the rows (reduces lag...)
     */
    if(isTouchScreen){
        if(this.document.getElementById("row1").getBoundingClientRect().y < 0){
            $('#row2').show("slide",{direction:'right'},1500);
        }
    
        if(this.document.getElementById("row2").getBoundingClientRect().y < 0){
           $('#row3').show("slide",1500);
        }
    }

}

/**
 * If device isn't a mobile device, go ahead and fade in the other rows
 */
if(!isTouchScreen){
    $('#row2').show("slide",{direction:'right'},1500);
    $('#row3').show("slide",1500);
}





