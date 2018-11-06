(() => {

function startAnimations() {

	// HEAD BOX //

	var svgObject = document.querySelector('#headID').contentDocument,	

	// TIMELINE //

/*	head_line = svgObject.querySelector('#head_x5F_line'),
	head_title = svgObject.querySelector('#XMLID_27_'),
	head_content = svgObject.querySelector('#head_x5F_content'),
		
	tl = new TimelineMax ({});

		tl.from(head_line, 1, {
			x: -200,
            opacity: 0,
            delay: 15
		});
		tl.from(head_title, 1, {
			x: -100,
            opacity: 0,
        });
		tl.from(head_content, 2, {
			x: 500,
            opacity: 0,
            delay: 2
		});
*/	
	// CIRCLES ZOMBIES //

	imageCircle1 = svgObject.querySelector("#circle_x5F_1"),
	imageCircle2 = svgObject.querySelector("#circle_x5F_2"); 
		
	function animateCircle() {
		TweenMax.to(imageCircle1, 1, {rotation: -180, transformOrigin: "50% 50%"});
		TweenMax.to(imageCircle2, 1, {rotation: -180, transformOrigin: "50% 50%"});
	}
		
	function unAnimateCircle() {
		TweenMax.to(imageCircle1, 1, {rotation: 0, transformOrigin: "50% 50%"});
		TweenMax.to(imageCircle2, 1, {rotation: 0, transformOrigin: "50% 50%"});
	}
		
	imageCircle1.addEventListener("mouseover", animateCircle);
	imageCircle1.addEventListener("mouseout", unAnimateCircle);
		
	imageCircle2.addEventListener("mouseover", animateCircle);
	imageCircle2.addEventListener("mouseout", unAnimateCircle);


}
		
	//event listeners
	
	window.addEventListener("load", startAnimations, false);
	
	
	})();