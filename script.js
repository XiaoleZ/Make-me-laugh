var q = 0;
(function () {
	var text_element = document.getElementById('joke_text'),
			min = 0,
			j, joke, num,
			joke_list = [
		'Q: What goes up and down but does not move?\nA: Stairs',
		'Q: Where should a 500 pound alien go?\nA: On a diet',
		'Q: What did one toilet say to the other?\nA: You look a bit flushed.',
		'Q: Why did the picture go to jail?\nA: Because it was framed.',
		'Q: What did one wall say to the other wall?\nA: I\'ll meet you at the corner.',
		'Q: What did the paper say to the pencil?\nA: Write on!',
		'Q: What do you call a boy named Lee that no one talks to?\nA: Lonely',
		'Q: What gets wetter the more it dries?\nA: A towel.',
		'Q: Why do bicycles fall over?\nA: Because they are two-tired!',
		'Q: Why do dragons sleep during the day?\nA: So they can fight knights!',
		'Q: What did Cinderella say when her photos did not show up?\nA: Someday my prints will come!',
		'Q: Why was the broom late?\nA: It over swept!',
		'Q: What part of the car is the laziest?\nA: The wheels, because they are always tired!',
		'Q: What did the stamp say to the envelope?\nA: Stick with me and we will go places!',
		'Q: What is blue and goes ding dong?\nA: An Avon lady at the North Pole!',
		'Q: We\'re you long in the hospital?\nA: No, I was the same size I am now!',
		'Q: Why couldn\'t the pirate play cards?\nA: Because he was sitting on the deck!',
		'Q: What did the laundryman say to the impatient customer?\nA: Keep your shirt on!'
	],
			max = joke_list.length
	
	document.getElementById('joke_button').addEventListener('click', function(){
		q = q +1;
		q = q % 5;
		generateJoke();
		changeImage(q);
		
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

	var img_button = ["button1.png","button2.png","button3.png","button4.png","button5.png"];

	function changeImage(index){
		var x = document.getElementById("image0");
		// var v = x.getAttribute("src");	
  		x.setAttribute("src", img_button[index]);	
	}
}());
