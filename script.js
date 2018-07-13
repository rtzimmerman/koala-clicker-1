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

	// display count in browser tab
	document.title = `${clickCount} Koala${clickCount > 1 ? 's' : ''} - Koala Clicker`

	// create a visual indicator at 10 and 20 clicks
	clickCount == 10 || clickCount == 20 ? rotateImage() : undefined;
}

function rotateImage(){
	console.log('Wow!');
	koalaImg.setAttribute('class', 'achievement-unlocked');
}