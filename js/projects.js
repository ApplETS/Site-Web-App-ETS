//First load actions
$('#titleDiv').hide()
$('.project-slide').hide()

showTitle()


function showTitle(){
    $('#titleDiv').fadeToggle(1000, "swing")
    $('.scroll-down-zone').css("opacity","1")
}



//Initialize fullpage with event functions
$('#fullpage').fullpage({
    licenseKey: "BCE59474-1B6147ED-BFCF5E52-0AE9FEC4",
    setAllowScrolling:true,
    autoScrolling: true,
    scrollOverflow: true,
    onLeave: function (index, nextIndex, direction) {
        if (index.index == 0 && nextIndex.index == 1 && direction === "down") {
            $('.scroll-down-zone').css("opacity", "0")
            $('#projectHeart').toggleClass("heartbeat")
            $('#projectHeart').css("width", "400vh")
            $('#projectHeart').css("margin-top", "100vh")
            $('.fp-controlArrow').hide()



        }
        if (index.index == 1 && nextIndex.index == 0 && direction === "up") {
            $('#section1').css("background-color", "")
            $('#projectHeart').css("display", "")

            $('#projectHeart').css("width", "4vh")
            $('#projectHeart').css("margin-top", "3.5vh")
            $('.project-slide').fadeToggle(500, "linear")

            $('#header').css('background-color', '')

            $('.go-back-arrow').removeClass('show-flex')
            $('#titleDiv').show()
            $('.scroll-down-zone').css("opacity","1")

        }
    },
    afterLoad: function (anchorLink, index) {
        if (index.index == 1) {

            $.fn.fullpage.setAutoScrolling(true)
            fullpage_api.setAllowScrolling(false)

            $('#section1').css("background-color", "rgb(206, 32, 28)")
            $('#projectHeart').css("display", "none")

            $('.project-slide').fadeToggle(500, "swing")
            $('.fp-controlArrow').fadeToggle(500, "swing")

            $('#androidETSMOBILE').css('height', '55vh')
            $('#play-store-link').css('width', '165px')
            $('#iosETSMOBILE').css('height', '35vh')
            $('#app-store-link').css('width', '100px')

            $('#header').css('background-color', 'rgba(60, 2, 2, 0.44)')

            $('#app-layer-1').css('transform', '')
            $('#app-layer-3').css('transform', '')

            $('.go-back-arrow').addClass('show-flex')

            $('#titleDiv').hide()
        }
        if (index.index == 0) {
            fullpage_api.setAllowScrolling(true)
            $('#projectHeart').toggleClass("heartbeat")

            setTimeout("separateAppLayers()", 750)

            

        }


    },
    onSlideLeave: function (section, origin, destination, direction) {
        switch (destination.index) {
            case 0:
                document.getElementById("slideTitle").innerHTML = "ÉTSMobile "
                break;
            case 1:
                document.getElementById("slideTitle").innerHTML = "ÉTSMap "
                break;
            case 2:
                document.getElementById("slideTitle").innerHTML = "API"
                break;
        }
    }
}




)

//In case the device is a touchscreen
document.addEventListener('touchstart', function () {
    $('#arrow-prev').addClass("is-touch")
    $('#arrow-next').addClass("is-touch")
})

//Event listeners
$('.go-back-arrow').on('click', function () {
    fullpage_api.moveSectionUp()
})

$('#arrow-prev').on('click', function () {
    fullpage_api.moveSlideLeft()
    $('#slideTitle').click()
})

$('#arrow-next').on('click', function () {
    fullpage_api.moveSlideRight()
})

$('.modal-close').on('click', function () {
    $('.modal-background').css("visibility", "hidden")
    $('.modal-background').css("background-color", "rgba(0,0,0,0)")
    $('.modal-platform').css("visibility", "hidden")
    $('.modal-platform').css("opacity", "0")


})


$('#desktopGithubLinkETSMOBILE').on('click', function () {
    $('.modal-background').css("visibility", "visible")
    $('.modal-background').css("background-color", "#0000004d")
    $('.modal-platform').css("visibility", "visible")
    $('.modal-platform').css("opacity", "1")

})

$('#mobileGithubLink').on('click', function () {
    $('.modal-background').css("visibility", "visible")
    $('.modal-background').css("background-color", "#0000004d")
    $('.modal-platform').css("visibility", "visible")
    $('.modal-platform').css("opacity", "1")

})

$('#projectHeart').on('click', function () {
    $.fn.fullpage.moveSectionDown()
    $('#projectHeart').css("width", "600vh")

})

document.querySelector("#floatingToggle").addEventListener("click", function () {
    if ($('.go-back-arrow').css("top") != "") {
        $('.go-back-arrow').css("top", document.getElementsByClassName("go-back-arrow")[0].getBoundingClientRect().y)
    } else {
        $('.go-back-arrow').css("top", "")
    }

    document.querySelector("#nav-toggler").classList.toggle("active");
    $('#navToggleContent').slideToggle()
    if ($('.fp-section.active')[0].id == "section0") {
        $('#header').toggleClass("back-color")
    } else {
        $('#header').toggleClass("back-color-red")
        $('#header').removeClass("back-color")
    }


});

$('#android-etsmobile-link').on("mouseover", function () {
    $('#androidETSMOBILE').css('height', '55vh')
    $('#play-store-link').css('width', '165px')
    $('#iosETSMOBILE').css('height', '35vh')
    $('#app-store-link').css('width', '100px')
})

$('#android-etsmobile-link').on("click", function () {
    $('#androidETSMOBILE').css('height', '55vh')
    $('#play-store-link').css('width', '165px')
    $('#iosETSMOBILE').css('height', '35vh')
    $('#app-store-link').css('width', '100px')
})


$('#ios-etsmobile-link').on("mouseover", function () {
    $('#iosETSMOBILE').css('height', '55vh')
    $('#app-store-link').css('width', '165px')
    $('#androidETSMOBILE').css('height', '35vh')
    $('#play-store-link').css('width', '100px')
})

$('#ios-etsmobile-link').on("click", function () {
    $('#iosETSMOBILE').css('height', '55vh')
    $('#app-store-link').css('width', '165px')
    $('#androidETSMOBILE').css('height', '35vh')
    $('#play-store-link').css('width', '100px')
})


//Split the app layers
function separateAppLayers() {
    $('#app-layer-1').css('transform', 'translate(3vh,2vh)')
    $('#app-layer-3').css('transform', 'translate(-3vh,-2vh)')
}



