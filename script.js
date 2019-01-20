(function () {
	var text_element = document.getElementById('joke_text'),
			min = 0,
			j, joke, num,
			joke_list = [
		'What goes up and down but does not move?\nA: Stairs',
		'Where should a 500 pound alien go?\nA: On a diet',
		'What did one toilet say to the other?\nA: You look a bit flushed.',
		'Why did the picture go to jail?\nA: Because it was framed.',
		'What did one wall say to the other wall?\nA: I\'ll meet you at the corner.',
		'What did the paper say to the pencil?\nA: Write on!',
		'What do you call a boy named Lee that no one talks to?\nA: Lonely',
		'What gets wetter the more it dries?\nA: A towel.',
		'Why do bicycles fall over?\nA: Because they are two-tired!',
		'Why do dragons sleep during the day?\nA: So they can fight knights!',
		'What did Cinderella say when her photos did not show up?\nA: Someday my prints will come!',
		'Why was the broom late?\nA: It over swept!',
		'What part of the car is the laziest?\nA: The wheels, because they are always tired!',
		'What did the stamp say to the envelope?\nA: Stick with me and we will go places!',
		'What is blue and goes ding dong?\nA: An Avon lady at the North Pole!',
		'We\'re you long in the hospital?\nA: No, I was the same size I am now!',
		'Why couldn\'t the pirate play cards?\nA: Because he was sitting on the deck!',
		'What did the laundryman say to the impatient customer?\nA: Keep your shirt on!'
	],
			max = joke_list.length - 1

	document.getElementById('joke_button').addEventListener('click', function(){
		generateJoke();
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
}());
