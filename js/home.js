/**
 * Fade-in the title and buttons
 */
$('#navTitle').fadeToggle(1000, "swing", function () {
    showNavButtons();
})

/**
 * Fadein function
 */
let showNavButtons = function () {
    $('#nav-toggler').css('opacity','1')
    $('#navButtons').show("slow", "swing", function () {
        $('#link-buttons-container').css('opacity','1');
        $("#typewriter-container").toggleClass("typewriter");
        new Typewriter(70, document.getElementById("typewriter-container"), "App|ETS");
    })
}

/**
 * A typewriter that dynamically emulates the input of a user
 * @param {Int32Array} iterationSpeed The speed at which the text is typed
 * @param {Element} destinationElement The HTML element in which the inner text will be inserted
 * @param {String} inputText The text to type
 */
let Typewriter = function (iterationSpeed, destinationElement, inputText) {
  
    iterateTypewriter = function (iterationSpeed, destinationElement) {
        return function (inputText, iTextPos) {
            iArrLength = inputText.length;
            iTextPos++;

            destinationElement.innerText = inputText.substring(0, iTextPos);
            
            if (iTextPos != iArrLength)
                setTimeout("iterateTypewriter(\"" + inputText.replace("\"", "") + "\"," + iTextPos + ")", iterationSpeed);
        }
    }(iterationSpeed, destinationElement)

    removeCursor = function () {
        destinationElement.classList.remove("typewriter");
    }

    setTimeout("iterateTypewriter(\"" + inputText.replace("\"", "") + "\"," + 0 + ")", 1000);
}