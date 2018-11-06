(() => {

function startAnimations() {

	// PAIRS BOX //

	var svgObject = document.querySelector('#pairsID').contentDocument,
	
	
	// TIMELINE //

/*	pairs_line = svgObject.querySelector('#line_x5F_pairs'),
	pairs_title = svgObject.querySelector('#XMLID_111_'),
	pairs_content = svgObject.querySelector('#pairs_x5F_content'),
		
	tl = new TimelineMax ({});

		tl.from(pairs_line, 1, {
			x: -200,
            opacity: 0,
            delay: 54
		});
		tl.from(pairs_title, 1, {
			x: -100,
            opacity: 0,
        });
		tl.from(pairs_content, 2, {
			x: 500,
            opacity: 0,
            delay: 2
		});

*/	
	// SIGN ZOMBIE ZONE //

	imageSign = svgObject.querySelector("#zombie_x5F_sign");

	function animateSign() {
		TweenMax.to(imageSign, 1, {ease: "hop", scale:1.5, rotation:30 });
	}

	function unAnimateSign() {
		TweenMax.to(imageSign, 1, { ease: "hop", scale:1, rotation:0 });
	}

	imageSign.addEventListener("mouseover", animateSign);
	imageSign.addEventListener("mouseout", unAnimateSign); 




	// ZOMBIES //

	imageZombie = svgObject.querySelector("#zombie_x5F_6");

	function animateZombie() {
			TweenMax.to(imageZombie, 1, {ease:SteppedEase.config(4), scale:1.05});
	}
	
	function unAnimateZombie() {
			TweenMax.to(imageZombie, 1, { ease:SteppedEase.config(4), scale:1.0});
	}
	
	imageZombie.addEventListener("mouseover", animateZombie);
	imageZombie.addEventListener("mouseout", unAnimateZombie); 



	imageZombie2 = svgObject.querySelector("#zombie_x5F_5");

	function animateZombie2() {
			TweenMax.to(imageZombie2, 1, { ease:SteppedEase.config(4), x:-6 });
	}
	
	function unAnimateZombie2() {
			TweenMax.to(imageZombie2, 1, { ease:SteppedEase.config(4), x:3 });
	}
	
	imageZombie2.addEventListener("mouseover", animateZombie2);
	imageZombie2.addEventListener("mouseout", unAnimateZombie2); 



	imageZombie3 = svgObject.querySelector("#zombie_x5F_4");

	function animateZombie3() {
			TweenMax.to(imageZombie3, 1, { ease:SteppedEase.config(4), y:-10 });
	}
	
	function unAnimateZombie3() {
			TweenMax.to(imageZombie3, 1, { ease:SteppedEase.config(4), y:0 });
	}
	
	imageZombie3.addEventListener("mouseover", animateZombie3);
	imageZombie3.addEventListener("mouseout", unAnimateZombie3); 



	imageZombie4 = svgObject.querySelector("#zombie_x5F_3");

	function animateZombie4() {
			TweenMax.to(imageZombie4, 1, { ease:SteppedEase.config(4), rotation:-10 });
	}
	
	function unAnimateZombie4() {
			TweenMax.to(imageZombie4, 1, { ease:SteppedEase.config(4), rotation:0 });
	}
	
	imageZombie4.addEventListener("mouseover", animateZombie4);
	imageZombie4.addEventListener("mouseout", unAnimateZombie4); 



}
		
	//event listeners
	
	window.addEventListener("load", startAnimations, false);
	
	
	})();