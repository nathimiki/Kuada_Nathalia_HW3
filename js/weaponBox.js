(() => {

function startAnimations() {

	// WEAPON BOX //

	var svgObject = document.querySelector('#weaponID').contentDocument,
	
	// TIMELINE //

/*	weapon_line = svgObject.querySelector('#line_x5F_weapon'),
    weapon_title = svgObject.querySelector('#XMLID_49_'),
	weapon_content = svgObject.querySelector('#weapon_x5F_content'),
		
	tl = new TimelineMax ({});

		tl.from(weapon_line, 1, {
			x: -200,
            opacity: 0,
            delay: 6
		});
		tl.from(weapon_title, 1, {
			x: -100,
            opacity: 0,
        });
		tl.from(weapon_content, 2, {
			x: 500,
            opacity: 0,
            delay: 2
		});
*/		
		
	// HANDS ZOMBIES //	

	imageHand1 = svgObject.querySelector("#hand_x5F_1"),
	imageHand2 = svgObject.querySelector("#hand_x5F_2"); 
	
	TweenMax.to(imageHand1, 1, { x:50 , ease:Back.easeInOut });
	TweenMax.to(imageHand2, 1, { x:-50 , ease:Back.easeInOut });
	
}
	
	
	//event listeners
	
	window.addEventListener("load", startAnimations, false);
	
	
	})();