(() => {

function startAnimations() {

	// SHELTER BOX //

	var svgObject = document.querySelector('#shelterID').contentDocument,
	
	// TIMELINE //

/*	shelter_line = svgObject.querySelector('#line_x5F_shelter'),
	shelter_title = svgObject.querySelector('#XMLID_51_'),
	shelter_content = svgObject.querySelector('#shelter_x5F_content'),
		
	tl = new TimelineMax ({});

		tl.from(shelter_line, 1, {
			x: -200,
            opacity: 0,
            delay: 30
		});
		tl.from(shelter_title, 1, {
			x: -100,
            opacity: 0,
        });
		tl.from(shelter_content, 2, {
			x: 500,
            opacity: 0,
            delay: 2
		});
	*/
	// SHELTER FENCE //

	imageFence = svgObject.querySelector("#fence");

	function animateFence() {
		TweenMax.to(imageFence, 1, {ease: "hop", scale:1.05});
	}

	function unAnimateFence() {
		TweenMax.to(imageFence, 1, {ease: "hop", scale:1.0});
	}

	imageFence.addEventListener("mouseover", animateFence);
	imageFence.addEventListener("mouseout", unAnimateFence);



}
		
	//event listeners
	
	window.addEventListener("load", startAnimations, false);
	
	
	})();