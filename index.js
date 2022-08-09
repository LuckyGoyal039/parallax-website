var initial = 1;
function colorchange() {
	let x = document.querySelectorAll("#cam, #golf, #war, #water, #camera, #boy");
	let i;
	if (initial) {
		initial = 0;
	}
	else {
		initial = 1;
	}
	if (initial) {
		for (i = 0; i < x.length; i++) {
			x[i].style.filter = "grayscale(0%)";
			x[i].style.opacity = 0.7;
		}
		document.getElementById("thumbicon").style.filter = "grayscale(0%)";
	}
	else {
		for (i = 0; i < x.length; i++) {
			x[i].style.filter = "grayscale(100%)";
			x[i].style.opacity = 1.0;
		}
		document.getElementById("thumbicon").style.filter = "grayscale(100%)";
	}

}