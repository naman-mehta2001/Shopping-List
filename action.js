var button = document.getElementById("input");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItem = document.querySelectorAll("li");
var dlt = document.querySelectorAll(".delete");
var mdone = document.querySelectorAll(".done");

//Make delete button
function delButton(parent) {
	var del = document.createElement("button");
	del.appendChild(document.createTextNode("Done!"));
	del.className = "delete";
	parent.appendChild(del);	
}

//delete and line thru functionality ; specify [i] in all for loops!
function deleteMeAndAddingLineThru() {
	for (var i = 0; i < dlt.length; i++) {
		dlt[i].addEventListener("click",addToggle)
	}
}

//functionality of line-through and dynamic rearrangement of crossed items
function addToggle() {
	this.parentNode.classList.toggle("done");
	var mdone = document.querySelectorAll(".done");
	var mdonelen = mdone.length;
	for(var j=0; j<mdonelen; j++){
		ul.appendChild(mdone[j]);
	}
}

//entry of a new item using the event listeners
function addEntry() {
	if (input.value.length > 0 ) {
		var newItem = document.createElement("li");
		newItem.appendChild(document.createTextNode(input.value));
		ul.appendChild(newItem);	
		//adding button element in newItem which itself is in ul
		delButton(newItem);
		//now we recognize newly added elements if any
		dlt = document.querySelectorAll(".delete");
		listItem = document.querySelectorAll("li");
		deleteMeAndAddingLineThru();
			input.value="";	}
}
function afterKeypress(event){
	if ( event.keyCode === 13 ) {
		addEntry()
	}
}
button.addEventListener("click", addEntry);
input.addEventListener("keypress", afterKeypress);

