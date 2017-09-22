function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav container-flex") {
        x.className = "topnav responsive";
        console.log("if");
    } else {
        x.className = "topnav container-flex";
          console.log("else");
    }
}

$(document).ready(function(){

	var slideIndex = 0;

	showSlides();

	function showSlides() {
	    var i;
	    var slides = document.getElementsByClassName("mySlides");
	    for (i = 0; i < slides.length; i++) {
	       slides[i].style.display = "none";
	    }
	    slideIndex++;
	    if (slideIndex> slides.length) {slideIndex = 1}
	    slides[slideIndex-1].style.display = "block";
	    setTimeout(showSlides, 4000); // Change image every 2 seconds
	}
});
