/**
 * A typewriter that dynamically emulates the input of a user
 * @param {Int32Array} iterationSpeed The speed at which the text is typed
 * @param {Element} destinationElement The HTML element in which the inner text will be inserted
 * @param {String} inputText The text to type
 */
const Typewriter = function (iterationSpeed, destinationElement, inputText) {
  
    iterateTypewriter = function (iterationSpeed, destinationElement) {
        return function (inputText, iTextPos) {
            iArrLength = inputText.length;
            iTextPos++;

            destinationElement.innerText = inputText.substring(0, iTextPos);
            
            if (iTextPos != iArrLength)
                setTimeout("iterateTypewriter(\"" + inputText.replace("\"", "") + "\"," + iTextPos + ")", iterationSpeed);
        }
    }(iterationSpeed, destinationElement)

    setTimeout("iterateTypewriter(\"" + inputText.replace("\"", "") + "\"," + 0 + ")", 1000);
}

new Typewriter(70, document.getElementById("typewriter"), "App|ETS");