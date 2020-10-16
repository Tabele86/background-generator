// import { without } from "lodash";
// const { random } = require('lodash');
// var _ = require('lodash');

// const { result } = require('lodash');

let css = document.querySelector('h3');
let color1 = document.querySelector('.color1');
let color2 = document.querySelector('.color2');
let direction = document.querySelector('.gradientDirection');
let body = document.getElementById('gradient');
let randomBG = document.querySelector('.randomBG');

const setGradient = () => {
	body.style.background = 'linear-gradient(to ' + direction.value + ' ,' + color1.value + ',' + color2.value + ')';
	css.textContent = body.style.background + ';';
};
color1.addEventListener('input', setGradient);

color2.addEventListener('input', setGradient);

direction.addEventListener('input', setGradient);

// const randomBG = () => {
// const randomColor1 = Math.floor(Math.random() * 16777215).toString(16);
// 	document.body.style.backgroundColor = '#' + randomColor;
// 	color.innerHTML = '#' + randomColor;
// };

const randomColor = () => {
	let letters = '0123456789ABCDEF';
	let color = '#';
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
};

const randomDirection = () => {
	return directions[Math.floor(Math.random() * directions.length)];
};

let directions = [ 'right', 'left', 'bottom right', 'bottom left' ];

const setRandomGradient = () => {
	color1.value = randomColor();
	color2.value = randomColor();
	direction.value = randomDirection();
	setGradient();
};

randomBG.addEventListener('click', setRandomGradient);
