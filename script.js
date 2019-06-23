(() => {
	let text_element = document.getElementById('joke_text'),
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
		'What goes up and down but does not move?<br>Stairs',
		'Where should a 500 pound alien go?<br>On a diet',
		'What did one toilet say to the other?<br>You look a bit flushed.',
		'Why did the picture go to jail?<br>Because it was framed.',
		'What did one wall say to the other wall?<br>I\'ll meet you at the corner.',
		'What did the paper say to the pencil?<br>Write on!',
		'What do you call a boy named Lee that no one talks to?<br>Lonely',
		'What gets wetter the more it dries?<br>A towel.',
		'Why do bicycles fall over?<br>Because they are two-tired!',
		'Why do dragons sleep during the day?<br>So they can fight knights!',
		'What did Cinderella say when her photos did not show up?<br>Someday my prints will come!',
		'Why was the broom late?<br>It over swept!',
		'What part of the car is the laziest?<br>The wheels, because they are always tired!',
		'What did the stamp say to the envelope?<br>Stick with me and we will go places!',
		'What is blue and goes ding dong?<br>An Avon lady at the North Pole!',
		'We\'re you long in the hospital?<br>No, I was the same size I am now!',
		'Why couldn\'t the pirate play cards?<br>Because he was sitting on the deck!',
		'What did the laundryman say to the impatient customer?<br>Keep your shirt on!',
		'What did the Buddhist ask the hot dog vendor?<br>“Make me one with everything.”',
		'You know why you never see elephants hiding up in trees?<br>Because they’re really good at it.',
		'What is red and smells like blue paint?<br>Red paint.',
		'Where does the General keep his armies?<br>In his sleevies!',
		'Why aren’t koalas actual bears?<br>The don’t meet the koalafications.',
		'What do you call bears with no ears?<br>B',
		'Why dont blind people skydive?<br>Because it scares the crap out of their dogs.',
		'What’s brown and sticky?<br>A stick.',
		'What does a pepper do when it’s angry?<br>It gets jalapeño face!',
		'What’s a foot long and slippery?<br>A slipper.',
		'Two gold fish are in a tank.<br>One looks at the other and says, “You know how to drive this thing?!”',
		'Two soldiers are in a tank.<br>One looks at the other and says, “BLUBLUBBLUBLUBBLUB.”',
		'As a scarecrow, people say I’m outstanding in my field.<br>But hay, it’s in my jeans.',
		'How did the hipster burn his mouth?<br>He ate the pizza before it was cool.',
		'What’s the difference between an oral thermometer and a rectal thermometer?<br>The taste.',
		'An atheist, a Crossfitter, and a vegan walk into a bar.<br>I know because they told me.',
		'I waited and stayed up all night and tried to figure out where the sun was.<br>Then it dawned on me.',
		'I told my friend 10 jokes to get him to laugh.<br>Sadly, no pun in 10 did.',
		'What’s red and moves up and down?<br>A tomato in an elevator',
		'I bought the world’s worst thesaurus yesterday.<br>Not only is it terrible, it’s terrible.',
		'Why can’t you hear a pterodactyl go to the bathroom?<br>Because the “P” is silent!',
		'How did the blonde die ice fishing?<br>She was hit by the zamboni.',
		'How Long is a Chinese man’s name.<br>No, it actually is.',
		'How does NASA organize a party?<br>They planet.',
		'What’s a pirates favorite letter?<br>You think it’s R but it be the C.',
		'Have you heard about corduroy pillows?<br>They’re making headlines.',
		'What did the green grape say to the purple grape?<br>OMG!! BREATHE!! BREATHEEEEE!!',
		'What do Alexander the Great and Winnie the Pooh have in common?<br>Same middle name.',
		'What did the left eye say to the right eye?<br>Between you and me, something smells.',
		'What do Cannon Balls do when they’re in love?<br>Make bbs.',
		'Why did the cowboy get a wiener dog?<br>He wanted to get a long little doggie.',
		'Sometimes I tuck my knees into my chest and lean forward.<br>That’s just how I roll.',
		'Cole’s Law: Thinly Sliced Cabbage<br>50. I intend to live forever.'
	],
	max = joke_list.length-1;

	document.getElementById('joke_button').addEventListener('click', () => {
		let q = 0;
		q = q +1;
		q = q % 7;
		generateJoke();
		changeImage(q);
		generateImg();
	});

	const getRandomInt = (min, max) => {		//returns a random integer
		min = Math.ceil(min);
		max = Math.floor(max);
		num = Math.floor(Math.random() * (max - min + 1)) + min;
		return num;
	}

	const generateJoke = () => {			//generates a random joke
		j = getRandomInt(min, max);
		console.log(joke_list[j], j)
		text_element.innerHTML = joke_list[j]
	}

	let bg_img = ['background3.gif', 'background2.gif', 'dog3.gif','dog4.gif','dog5.gif','tech1.gif','tech2.gif','tech3.gif','tech4.gif','cartoon1.gif','cartoon2.gif','cartoon3.gif','cartoon4.gif','bird1.gif','cat1.gif','cat2.gif','dog1.gif','dog2.gif','sky1.gif','water1.gif','smile.gif','dog3.gif'],
	img_max = bg_img.length-1

	const generateImg = () => {
		j = getRandomInt(min, img_max);
		console.log(bg_img[j], j)
		document.body.style.backgroundImage="url('"+bg_img[j]+"')"
	}

	let img_button = ["button1.png","button2.png","button3.png","button4.png","button5.png","button6.png","button7.png"];

	const changeImage = (index) => {
		let x = document.getElementById("image0");
  		x.setAttribute("src", img_button[index]);
	}
}());
