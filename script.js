const button = document.getElementById("button")
var buttonOn = true;

console.log(button)

button.style.position = "absolute"
button.style.top = "0"
button.style.left = "0"

function locationChange(){
    if(buttonOn) {
        button.style.top = ""
        button.style.left = ""
        button.style.bottom = "0"
        button.style.right = "0"
    } else {
        button.style.top = "0"
        button.style.left = "0"
        button.style.bottom = ""
        button.style.right = ""
    }
    
     buttonOn = !buttonOn
}
