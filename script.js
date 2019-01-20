
var min = 0;
var j, joke, num;
var n = 2;
var max = n-1;
//new jokes(n);			//Array of size n 

var joke_list = ['hello','world']

document.getElementById('joke_button').addEventListener('click', function(){
	generateJoke();
});



function getRandomInt(min, max) {		//returns a random integer
   	min = Math.ceil(min);
    	max = Math.floor(max);
    	num = Math.floor(Math.random() * (max - min + 1)) + min;
	console.log(num);
	return num;
}


function generateJoke() {			//generates a random joke 
	j = getRandomInt(min, max);
	console.log(j);

	joke = joke_list[j];
	console.log(joke);
	return joke;
}






