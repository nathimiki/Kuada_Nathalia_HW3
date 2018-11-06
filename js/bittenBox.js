(() => {

function startAnimations() {

	// BITTEN BOX //

	var svgObject = document.querySelector('#bittenID').contentDocument,
	
	
	// TIMELINE //

/*	bitten_line = svgObject.querySelector('#line_x5F_bitten'),
	bitten_title = svgObject.querySelector('#XMLID_763_'),
	bitten_content = svgObject.querySelector('#bitten_x5F_content'),
		
	tl = new TimelineMax ({});

		tl.from(bitten_line, 1, {
			x: -200,
            opacity: 0,
            delay: 22
		});
		tl.from(bitten_title, 1, {
			x: -100,
            opacity: 0,
        });
		tl.from(bitten_content, 2, {
			x: 500,
            opacity: 0,
            delay: 2
		});
*/
   
	
	// SKULL MOUTH //

	imageSkull = svgObject.querySelector("#mouth"),
	skull = svgObject.querySelector("#skull");

	function animateSkull() {
		TweenMax.to(imageSkull, 1, {y: -5, transformOrigin: "50% 50%"});
	}

	function unAnimateSkull() {
		TweenMax.to(imageSkull, 1, {y: 5, transformOrigin: "50% 50%"});
	}

	skull.addEventListener("mouseover", animateSkull);
	skull.addEventListener("mouseout", unAnimateSkull);


}
		
	//event listeners
	
	window.addEventListener("load", startAnimations, false);
	
	
	})();