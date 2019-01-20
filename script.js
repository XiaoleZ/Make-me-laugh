var q = 0;
(function () {
	var text_element = document.getElementById('joke_text'),
			min = 0,
			j, joke, num,
			joke_list = [
		'What does rhyme with cucumber?\nYour number',
		'Where should a 500 pound alien go?\nOn a diet',
		'What did one toilet say to the other?\nYou look a bit flushed.',
		'Why did the picture go to jail?\nBecause it was framed.',
		'What did one wall say to the other wall?\nI\'ll meet you at the corner.',
		'What did the paper say to the pencil?\nWrite on!',
		'What do you call a boy named Lee that no one talks to?\nLonely',
		'What gets wetter the more it dries?\nA towel.',
		'Why do bicycles fall over?\nBecause they are two-tired!',
		'Why do dragons sleep during the day?\nSo they can fight knights!',
		'What did Cinderella say when her photos did not show up?\nSomeday my prints will come!',
		'Why was the broom late?\nIt over swept!',
		'What part of the car is the laziest?\nThe wheels, because they are always tired!',
		'What did the stamp say to the envelope?\nStick with me and we will go places!',
		'What is blue and goes ding dong?\nAn Avon lady at the North Pole!',
		'We\'re you long in the hospital?\nNo, I was the same size I am now!',
		'Why couldn\'t the pirate play cards?\nBecause he was sitting on the deck!',
		'What did the laundryman say to the impatient customer?\nKeep your shirt on!',
		'What did the red light say to the green light?\nDon\'t look, I\'m changing.',
		'Did you just fart?\n Because you just blow me away',
		'Do you still love me>\n!yes babe',
		'Choosing my kids\' name was easier than deciding what to name this variable',
	],
			max = joke_list.length-1
	
	document.getElementById('joke_button').addEventListener('click', function(){
		q = q +1;
		q = q % 7;
		generateJoke();
		changeImage(q);
		generateImg();
		
	});

	function getRandomInt(min, max) {		//returns a random integer
		min = Math.ceil(min);
		max = Math.floor(max);
		num = Math.floor(Math.random() * (max - min + 1)) + min;
		return num;
	}

	function generateJoke() {			//generates a random joke
		j = getRandomInt(min, max);
		console.log(joke_list[j], j)
		text_element.innerHTML = joke_list[j]
	}

	var bg_img = ['background3.gif', 'background2.gif', 'dog3.gif','dog4.gif','dog5.gif','tech1.gif','tech2.gif','tech3.gif','tech4.gif','cartoon1.gif','cartoon2.gif','cartoon3.gif','cartoon4.gif','bird1.gif','cat1.gif','cat2.gif','dog1.gif','dog2.gif','sky1.gif','water1.gif','smile.gif','dog3.gif'],
	img_max = bg_img.length-1

	function generateImg() {
		j = getRandomInt(min, img_max);
		console.log(bg_img[j], j)
		document.body.style.backgroundImage="url('"+bg_img[j]+"')"
	}

	var img_button = ["button1.png","button2.png","button3.png","button4.png","button5.png","button6.png","button7.png"];

	function changeImage(index){
		var x = document.getElementById("image0");
		// var v = x.getAttribute("src");	
  		x.setAttribute("src", img_button[index]);	
	}
}());
