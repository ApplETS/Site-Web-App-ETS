/**
 * A typewriter that dynamically emulates the input of a user
 * @param {*} iterationSpeed The speed at which the text is typed
 * @param {*} destinationElement The HTML element in which the inner text will be inserted
 * @param {*} inputText The text to type
 * @param {*} callback (Optional) The function to execute once the typing is done
 */
var Typewriter = function(iterationSpeed, destinationElement, inputText,callback){
    iterateTypewriter = function(iterationSpeed,destinationElement,callback) {
        return function(inputText,iTextPos){
            
            iArrLength = inputText.length
            
            
    
            
            destinationElement.innerText = inputText.substring(0, iTextPos);
            if (iTextPos++ == iArrLength) {
    
                setTimeout(callback, 1000)
                
            } else {
                
                setTimeout("iterateTypewriter(\"" + inputText.replace("\"", "") + "\"," + iTextPos  +  ")", iterationSpeed);
        
                
            }
        }
        
    }(iterationSpeed,destinationElement,callback)
    
    setTimeout("iterateTypewriter(\"" + inputText.replace("\"", "") + "\"," + 0  +  ")", 1000);
}