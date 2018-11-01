(() => {




	// TIMELINE //

	let manual = document.querySelector('#XMLID_12_'),
	strip = document.querySelector('#strip_x5F_blood'),
	title = document.querySelector('#XMLID_8_'),
	weapon = document.querySelector('#weapon'),
	weapon_line = document.querySelector('#line_x5F_weapon'),
	weapon_title = document.querySelector('#XMLID_49_'),
	head = document.querySelector('#head'),
	head_line = document.querySelector('#head_x5F_line'),
	head_title = document.querySelector('#XMLID_727_'),
	bitten = document.querySelector('#bitten'),
	bitten_line = document.querySelector('#line_x5F_bitten'),
	bitten_title = document.querySelector('#XMLID_716_'),
	shelter = document.querySelector('#shelter'),
	shelter_line = document.querySelector('#line_x5F_shelter'),
	shelter_title = document.querySelector('#XMLID_693_'),
	supermarket = document.querySelector('#supermarket'),
	supermarket_line = document.querySelector('#line_x5F_supermarket'),
	supermarket_title = document.querySelector('#XMLID_669_'),
	hero = document.querySelector('#hero_2_'),
	hero_line = document.querySelector('#line_x5F_hero'),
	hero_title = document.querySelector('#XMLID_676_'),
	pairs = document.querySelector('#pairs'),
	pairs_line = document.querySelector('#line_x5F_pairs'),
	pairs_title = document.querySelector('#XMLID_742_'),
	goodLuck = document.querySelector('#XMLID_5_'),  
	tryNot = document.querySelector('#XMLID_1102_'), 
	tl = new TimelineMax ({});

	function timeline(){
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
		tl.from(weapon, 2, {
			x: 500,
			opacity: 0
		});
		tl.from(weapon_line, 1, {
			x: -200,
			opacity: 0
		});
		tl.from(weapon_title, 1, {
			x: -100,
			opacity: 0
		});
		tl.from(head, 2, {
			x: 500,
			opacity: 0
		});
		tl.from(head_line, 1, {
			x: -200,
			opacity: 0
		});
		tl.from(head_title, 1, {
			x: -100,
			opacity: 0
		});
		tl.from(bitten, 2, {
			x: 500,
			opacity: 0
		});
		tl.from(bitten_line, 1, {
			x: -200,
			opacity: 0
		});
		tl.from(bitten_title, 1, {
			x: -100,
			opacity: 0
		});
		tl.from(shelter, 2, {
			x: 500,
			opacity: 0
		});
		tl.from(shelter_line, 1, {
			x: -200,
			opacity: 0
		});
		tl.from(shelter_title, 1, {
			x: -100,
			opacity: 0
		});
		tl.from(supermarket, 2, {
			x: 500,
			opacity: 0
		});
		tl.from(supermarket_line, 1, {
			x: -200,
			opacity: 0
		});
		tl.from(supermarket_title, 1, {
			x: -100,
			opacity: 0
		});
		tl.from(hero, 2, {
			x: 500,
			opacity: 0
		});
		tl.from(hero_line, 1, {
			x: -200,
			opacity: 0
		});
		tl.from(hero_title, 1, {
			x: -100,
			opacity: 0
		});
		tl.from(pairs, 2, {
			x: 500,
			opacity: 0
		}); 
		tl.from(pairs_line, 1, {
			x: -200,
			opacity: 0
		});
		tl.from(pairs_title, 1, {
			x: -100,
			opacity: 0
		});
		tl.from(goodLuck, 3, {
			x: -200,
			opacity: 0
		}); 
		tl.from(tryNot, 3, {
			x: 500,
			opacity: 0
		}); 
	}
	
	window.addEventListener("load", timeline);




	// 1. EVERYTHING CAN BE A WEAPON! //	

	let weaponContent0 = document.querySelector("#weapon_x5F_content");

	function animateWeaponContent() {
		TweenMax.to(weaponContent0, 1, {opacity:0});
	}

	window.addEventListener("load", animateWeaponContent);



	let weaponContent = document.querySelector("#weapon_x5F_content");

	function animateWeapon() {

		TweenMax.to(weaponContent, 1, {opacity:100});
	}

		weapon.addEventListener("click", animateWeapon);




	// 2. HIT THE HEAD! //	

	let headContent0 = document.querySelector("#head_x5F_content");

	function animateHeadContent() {
			
		TweenMax.to(headContent0, 1, {opacity:0});
	}
	
		window.addEventListener("load", animateHeadContent);
	
	
	
	let headContent = document.querySelector("#head_x5F_content");
	
	function animateHead() {
			
		TweenMax.to(headContent, 1, {opacity:100});
	}
	
		head.addEventListener("click", animateHead);

	


	// 3. DON’T BE BITTEN! //	

	let bittenContent0 = document.querySelector("#bitten_x5F_content");

	function animateBitten0() {
		
		TweenMax.to(bittenContent0, 1, {opacity:0});
	}
	
		window.addEventListener("load", animateBitten0);
	
	
	
	let bittenContent = document.querySelector("#bitten_x5F_content");
	
	function animateBitten() {
	
		TweenMax.to(bittenContent, 1, {opacity:100});
	}
	
	bitten.addEventListener("click", animateBitten);



		
	// 4. FIND OR CREATE A SHELTER! //	

	let shelterContent0 = document.querySelector("#shelter_x5F_content_1_");
		
	function animateShelter0() {
			
		TweenMax.to(shelterContent0, 1, {opacity:0});
	}
	
	window.addEventListener("load", animateShelter0);
	
	
	let shelterContent = document.querySelector("#shelter_x5F_content_1_");
	
	function animateShelter() {
			
		TweenMax.to(shelterContent, 1, {opacity:100});
	}
	
	shelter.addEventListener("click", animateShelter);




	// 5. CONQUER A SUPERMARKET! //	

	let supermarketContent0 = document.querySelector("#supermarket_x5F_content_1_");
		
	function animateSupermarket0() {
			
		TweenMax.to(supermarketContent0, 1, {opacity:0});
	}
	
	window.addEventListener("load", animateSupermarket0);
	
	
	let supermarketContent = document.querySelector("#supermarket_x5F_content_1_");
	
	function animateSupermarket() {
			
		TweenMax.to(supermarketContent, 1, {opacity:100});
	}
	
	supermarket.addEventListener("click", animateSupermarket);




	// 6. DON’T BE A HERO! //	

	let heroContent0 = document.querySelector("#hero_x5F_content_1_");
		
	function animateHero0() {
			
		TweenMax.to(heroContent0, 1, {opacity:0});
	}
	
	window.addEventListener("load", animateHero0);
	
	
	let heroContent = document.querySelector("#hero_x5F_content_1_");
	
	function animateHero() {
			
		TweenMax.to(heroContent, 1, {opacity:100});
	}
	
	hero.addEventListener("click", animateHero);




	// 7. ALWAYS WALK IN PAIRS!  //	

	let pairsContent0 = document.querySelector("#pairs_x5F_content");
		
	function animatePairs0() {
			
		TweenMax.to(pairsContent0, 1, {opacity:0});
	}
	
	window.addEventListener("load", animatePairs0);
	
	
	let pairsContent = document.querySelector("#pairs_x5F_content");
	
	function animatePairs() {
			
		TweenMax.to(pairsContent, 1, {opacity:100});
	}
	
	pairs.addEventListener("click", animatePairs);




	// HANDS ZOMBIES //	

	let imageHand1 = document.querySelector("#hand_x5F_1"),
	imageHand2 = document.querySelector("#hand_x5F_2"); 

	function animateHand() {

		TweenMax.to(imageHand1, 1, { x:50 , ease:Back.easeInOut });
		TweenMax.to(imageHand2, 1, { x:-50 , ease:Back.easeInOut });
	}

	window.addEventListener("load", animateHand);




	// CIRCLES ZOMBIES //

	let imageCircle1 = document.querySelector("#circle_x5F_1"),
	imageCircle2 = document.querySelector("#circle_x5F_2"); 

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




	// SKULL MOUTH //

	let imageSkull = document.querySelector("#mouth"),
	skull = document.querySelector("#skull");

	function animateSkull() {
		TweenMax.to(imageSkull, 1, {y: -5, transformOrigin: "50% 50%"});
	}

	function unAnimateSkull() {
		TweenMax.to(imageSkull, 1, {y: 5, transformOrigin: "50% 50%"});
	}

	skull.addEventListener("mouseover", animateSkull);
	skull.addEventListener("mouseout", unAnimateSkull);




	// SHELTER FENCE //

	let imageFence = document.querySelector("#fence");

	function animateFence() {
		TweenMax.to(imageFence, 1, {ease: "hop", scale:1.05});
	}

	function unAnimateFence() {
		TweenMax.to(imageFence, 1, {ease: "hop", scale:1.0});
	}

	imageFence.addEventListener("mouseover", animateFence);
	imageFence.addEventListener("mouseout", unAnimateFence);




	// HERO BALLON //

	let imageCape = document.querySelector("#ballon");

	function animateCape() {
		TweenMax.to(imageCape, 1, {ease: "hop", scale:1.05});
	}

	function unAnimateCape() {
		TweenMax.to(imageCape, 1, {ease: "hop", scale:1.0});
	}

	imageCape.addEventListener("mouseover", animateCape);
	imageCape.addEventListener("mouseout", unAnimateCape); 




	// SIGN ZOMBIE ZONE //

	let imageSign = document.querySelector("#zombie_x5F_sign");

	function animateSign() {
		TweenMax.to(imageSign, 1, {ease: "hop", scale:1.5, rotation:30 });
	}

	function unAnimateSign() {
		TweenMax.to(imageSign, 1, { ease: "hop", scale:1, rotation:0 });
	}

	imageSign.addEventListener("mouseover", animateSign);
	imageSign.addEventListener("mouseout", unAnimateSign); 




	// ZOMBIES //

	let imageZombie = document.querySelector("#zombie_x5F_6");

	function animateZombie() {
			TweenMax.to(imageZombie, 1, {ease:SteppedEase.config(4), scale:1.05});
	}
	
	function unAnimateZombie() {
			TweenMax.to(imageZombie, 1, { ease:SteppedEase.config(4), scale:1.0});
	}
	
	imageZombie.addEventListener("mouseover", animateZombie);
	imageZombie.addEventListener("mouseout", unAnimateZombie); 



	let imageZombie2 = document.querySelector("#zombie_x5F_5");

	function animateZombie2() {
			TweenMax.to(imageZombie2, 1, { ease:SteppedEase.config(4), x:-6 });
	}
	
	function unAnimateZombie2() {
			TweenMax.to(imageZombie2, 1, { ease:SteppedEase.config(4), x:3 });
	}
	
	imageZombie2.addEventListener("mouseover", animateZombie2);
	imageZombie2.addEventListener("mouseout", unAnimateZombie2); 



	let imageZombie3 = document.querySelector("#zombie_x5F_4");

	function animateZombie3() {
			TweenMax.to(imageZombie3, 1, { ease:SteppedEase.config(4), y:-10 });
	}
	
	function unAnimateZombie3() {
			TweenMax.to(imageZombie3, 1, { ease:SteppedEase.config(4), y:0 });
	}
	
	imageZombie3.addEventListener("mouseover", animateZombie3);
	imageZombie3.addEventListener("mouseout", unAnimateZombie3); 



	let imageZombie4 = document.querySelector("#zombie_x5F_3");

	function animateZombie4() {
			TweenMax.to(imageZombie4, 1, { ease:SteppedEase.config(4), rotation:-10 });
	}
	
	function unAnimateZombie4() {
			TweenMax.to(imageZombie4, 1, { ease:SteppedEase.config(4), rotation:0 });
	}
	
	imageZombie4.addEventListener("mouseover", animateZombie4);
	imageZombie4.addEventListener("mouseout", unAnimateZombie4); 


})();