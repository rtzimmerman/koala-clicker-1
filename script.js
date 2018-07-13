// 1. get the element we want (document.getElementById)
var koalaImg = document.getElementById('koala');
var countContainer = document.getElementById('click-count');

// 2. elVariableName.click syntax
//	or addEventListener syntax
window.onload = function(){
  koalaImg.addEventListener("click", displayCount);
}

// declare the counter variable
var clickCount = 0;

// click handler
function displayCount(event) {

	// track total clicks- increment the counter variable
	clickCount ++;

	// output click count to container in DOM
	countContainer.innerHTML = clickCount + " clicks!";
}