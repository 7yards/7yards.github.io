//The slideshow requires five things:
// 1) you name your slides with the naming format "slideshowX.png", where the X is the position the slide is in.
// 2) all "slideshowX.png" files must be in the slides folder
// 3) You need to set NUMBER_OF_SLIDES to the number of files in the prevously mentioned folder
// 4) You need to create a new img element for each slide, and point it to the file, like so:
// <div id="slideshow">
// 	  <img src="./html/img/slideshow/slideshow1.png"></img>
// 	  <img src="./html/img/slideshow/slideshow2.png"></img>
// 	  <img src="./html/img/slideshow/slideshow3.png"></img>
// </div>
// 5) Create new circles beneath the slideshow to match the number of images in the slideshow.
//    Make sure that the id of each circle is set as below
// <div style="text-align: center">
// 	 <div id="circle1" class="circle"></div>
// 	 <div id="circle2" class="circle"></div>
// 	 <div id="circle3" class="circle"></div>
// </div>

function myFunction() {

    console.log("onCLick");
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}



$(document).ready(function(){

// 	var boxes = $(".marque");
// var i=-1;
// boxes.hide();
// var box = setInterval(function(){
//    console.log("works");
//   i=i+1;
//   var rem = i%3;
//   boxes.eq(rem-1).hide();
//   boxes.eq(rem-2).hide();
//   boxes.eq(rem).fadeToggle("2000");
//
// },6000);


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
//
// $(document).ready(function(){ //wait until page is fully loaded
//
// 	$(window).scroll( function(){
//
// 			/* Check the location of each desired element */
// 			$('.hideme').each( function(i){
//
// 					var bottom_of_object = $(this).offset().top + $(this).outerHeight();
// 					var bottom_of_window = $(window).scrollTop() + $(window).height();
//
// 					/* If the object is completely visible in the window, fade it it */
// 					if( bottom_of_window > bottom_of_object ){
//
// 							$(this).animate({'opacity':'1'},2000);
//
// 					}
//
// 			});
//
// 	});
//
// 	//the slideshow code uses this to determine a few things. Make sure this is set correctly!
// 	const NUMBER_OF_SLIDES = 3;
//
// 	//get the width of the side-scrollable area in the 'sldieshow' div and divide by NUMBER_OF_SLIDES so that the
// 	//scrollLeft under setInterval knows by how much to scroll
// 	var slide_width = document.getElementById('slideshow').scrollWidth / NUMBER_OF_SLIDES;
//
// 	//used as a reference for what slide to switch to in the coming setInterval()
// 	var slide_number = 1;
//
// 	//sets which circle is highlighted depending on the integer fed into it
// 	var setCircle = function(input_circle){
//
// 		//set all circles to grey
// 		for(x=1;x <= NUMBER_OF_SLIDES; x++){
// 			$("#circle" + x).css({
// 				"background-color": "lightgrey"
// 			});
// 		}
//
// 		//set a circle to be brown, based on input_circle
// 		$("#circle" + input_circle).css({
// 			"background-color": "brown"
// 		});
// 	}
//
// 	//initialy setting the first circle to be brown, before the slideshow starts manipulating them
// 	setCircle(1);
//
// 	//every 4 seconds(excluding the 500ms slide effect), slide to the next image, and set the appropriate circle to be brown
// 	setInterval(function(){
// 		if (slide_number < NUMBER_OF_SLIDES){
// 			//move to next slide
// 			$("#slideshow").animate({
// 				scrollLeft: slide_width * slide_number
// 			},2500);
// 			slide_number++;
// 		}else{
// 			//go to the first slide
// 			$("#slideshow").animate({
// 				scrollLeft: 0
// 			},2500);
// 			slide_number = 1;
// 		}
// 		setCircle(slide_number);
//
// 	}, 6000);
// });
