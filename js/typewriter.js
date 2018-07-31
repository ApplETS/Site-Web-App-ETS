/**
 * A typewriter that dynamically emulates the input of a user
 * @param {Int32Array} iterationSpeed The speed at which the text is typed
 * @param {Element} destinationElement The HTML element in which the inner text will be inserted
 * @param {String} inputText The text to type
 * @param {Bool} removeCursor Remove cursor at the end
 * @param {function} callback (Optional) The function to execute once the typing is done
 */
var Typewriter = function(iterationSpeed, destinationElement, inputText,cursorToRemove, callback){
    iterateTypewriter = function(iterationSpeed,destinationElement,callback) {
        return function(inputText,iTextPos){
            
            iArrLength = inputText.length
            
            iTextPos++
            
    
            
            destinationElement.innerText = inputText.substring(0, iTextPos);
            if (iTextPos == iArrLength) {
                if(cursorToRemove == true){
                    setTimeout("removeCursor()",1000)
                    if(callback != undefined){
                        callback()
                    }
                }else{
                    if(callback != undefined){
                        callback()
                    }
                }
                
                
                
                
            } else {
                
                setTimeout("iterateTypewriter(\"" + inputText.replace("\"", "") + "\"," + iTextPos  +  ")", iterationSpeed);
        
                
            }
            
        }

        
        
    }(iterationSpeed,destinationElement,callback)

    removeCursor = function(){
        destinationElement.classList.remove("typewriter")
    }
    
    setTimeout("iterateTypewriter(\"" + inputText.replace("\"", "") + "\"," + 0  +  ")", 1000);
}