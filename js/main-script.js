/* responsive topnav */
function myFunction() {
	var x = document.getElementById("myTopnav");
	if (x.className === "topnav") {
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
}

/* About FAQ accordion */
window.onload= function() { /* makes this js run after the html is loaded */
	var acc = document.getElementsByClassName("accordion");
	var i;

	for (i = 0; i < acc.length; i++) {
		acc[i].addEventListener("click", function() {
			/* add and remove active class */
			this.classList.toggle("active");
			/* hide and show active panel */
			var panel = this.nextElementSibling;
			if (panel.style.maxHeight) {
				panel.style.maxHeight = null;
			} else {
				panel.style.maxHeight = panel.scrollHeight + "px";
			} 
		});
	}
}