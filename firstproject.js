function simpleMessage() {
	alert("This is just an alert box");
}
//settimeout is in milliseconds
setTimeout(simpleMessage,5000);
var myImage = document.getElementById("pictureOne");

var imageArray = ["images/ladera resort.jpg","images/IMG_3148.jpg","images/IMG_3150.jpg","images/IMG_3152.jpg", "images/IMG_3155.jpg", "images/IMG_3156.jpg", "images/IMG_3157.jpg", "images/IMG_3177.jpg", "images/IMG_3190.jpg","images/IMG_3198.jpg"];

var imageIndex = 0;

function changeImage() {
	myImage.setAttribute("src", imageArray[imageIndex]);
	imageIndex++;
	if (imageIndex >= imageIndex.length) {
		imageIndex = 0;
	}
}
setInterval(changeImage, 2000);

var main = function() {
	$('.dropdown-toggle').click(function){
		$('dropdown-menu').toggle();
	});
}

$(document).ready(main);
