(() => {

function startAnimations() {

	// SHELTER BOX //

	var svgObject = document.querySelector('#heroID').contentDocument,	

	// TIMELINE //

/*	hero_line = svgObject.querySelector('#line_x5F_hero'),
	hero_title = svgObject.querySelector('#XMLID_2438_'),
	hero_content = svgObject.querySelector('#hero_x5F_content'),
		
	tl = new TimelineMax ({});

		tl.from(hero_line, 1, {
			x: -200,
            opacity: 0,
            delay: 46
		});
		tl.from(hero_title, 1, {
			x: -100,
            opacity: 0,
        });
		tl.from(hero_content, 2, {
			x: 500,
            opacity: 0,
            delay: 2
		});
*/	
	// HERO BALLON //

	imageCape = svgObject.querySelector("#ballon");

	function animateCape() {
		TweenMax.to(imageCape, 1, {ease: "hop", scale:1.05});
	}

	function unAnimateCape() {
		TweenMax.to(imageCape, 1, {ease: "hop", scale:1.0});
	}

	imageCape.addEventListener("mouseover", animateCape);
	imageCape.addEventListener("mouseout", unAnimateCape); 



}
		
	//event listeners
	
	window.addEventListener("load", startAnimations, false);
	
	
	})();