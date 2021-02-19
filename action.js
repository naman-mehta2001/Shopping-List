var button = document.getElementById("input");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItem = document.querySelectorAll("li");
var dlt = document.querySelectorAll(".delete")
//Make delete button
function delButton(parent) {
	var del = document.createElement("button");
	del.appendChild(document.createTextNode("Done!"));
	del.className = "delete";
	parent.appendChild(del);	
}
function addToggle() {
	this.classList.toggle("done");
}
//delete and line thru functionality ; specify [i] in all for loops!
function deleteMeAndAddingLineThru() {
	for (var i = 0; i < dlt.length; i++) {
		dlt[i].addEventListener("click", function() {
			this.parentNode.remove();
		})
		listItem[i].addEventListener("click", addToggle);
	}
}

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

button.addEventListener("click", addEntry);
input.addEventListener("keypress", function() {
	if ( event.keyCode === 13 ) {
	addEntry()}
});

