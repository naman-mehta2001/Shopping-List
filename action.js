var button = document.getElementById("input");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}
function addElement(){
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        li.appendChild(document.createElement("button"))
        ul.appendChild(li);
        input.value="";
}
function onClicking(){
    if(inputLength()>0){
        addElement();
    }
}
function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		addElement();
	}
}
button.addEventListener("click",onClicking);
input.addEventListener("keypress", addListAfterKeypress);