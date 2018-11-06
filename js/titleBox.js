(() => {

	function startAnimations() {
	
		// TITLE //
	
		var svgObject = document.querySelector('#titleID').contentDocument,
		
		// TIMELINE //
	
		manual = svgObject.querySelector('#XMLID_12_'),
		strip = svgObject.querySelector('#strip_x5F_blood'),
		title = svgObject.querySelector('#XMLID_8_'),
			
		tl = new TimelineMax ({});
	
	
			tl.from(manual, 1, {
				y: -100,
				opacity: 0
			});
			tl.from(strip, 1, {
				x: -100,
				opacity: 0
			});
			tl.from(title, 1, {
				x: -100,
				opacity: 0
			});
			
			
		// HANDS ZOMBIES //	
	
		imageHand1 = svgObject.querySelector("#hand_x5F_1"),
		imageHand2 = svgObject.querySelector("#hand_x5F_2"); 
		
		TweenMax.to(imageHand1, 1, { x:50 , ease:Back.easeInOut });
		TweenMax.to(imageHand2, 1, { x:-50 , ease:Back.easeInOut });
		
	}
		
		
		//event listeners
		
		window.addEventListener("load", startAnimations, false);
		
		
		})();