'use strict'
// exercise 01

/*let x = 400;
let a;
let b;

if(a > b){
	x = a + b/2 * 4;
} else if(a < b){
	x = a - b + 2/b * 4;
}

console.log(x);*/

// exercise 02 
// 2.1
/*const x = parseFloat(prompt('Please, enter x'));
const y = parseFloat(prompt('Please, enter y'));

if(-4 * x + 4 * y - 16 <= 0 && 4 * x + 4 * y - 16 <= 0 && 0 * x + 8 * y >=0) {
	alert('the point belong to the plane');
} else {
	alert('the point does not belong to the plane');
}*/

//2.2
/*const x = parseFloat(prompt('Please, enter x'));
const y = parseFloat(prompt('Please, enter y'));

if(-2 * x + 2 * y + 0 <= 0 && 2 * x + 2 * y + 0 <= 0 && 0 * x + 2 * y - 2 >=0 && 0 * x + 2 * y + 2 <=0) {
	alert('the point belong to the plane');
} else {
	alert('the point does not belong to the plane');
}*/


//math.by уравнение прямой по двум точкам <0
//уравнение круга на плоскости

// exercise 03
/*let day = prompt('Please, enter day number of the week', '1 - 7');

switch(day){
	case '1':
		alert('Monday');
		break;
	case '2':
		alert('Tuesday');
		break;
	case '3':
		alert('Wednesday');
		break;
	case '4':
		alert('Thursday');
		break;
	case '5':
		alert('Friday');
		break;
	case '6':
		alert('Saturday');
		break;
	case '7':
		alert('Sunday');
		break;
	default:
		alert('There is no such day of the week!');
}*/

// exercise 04
/*let firstValue = parseFloat(prompt('Please, enter first number'));
let secondValue = parseFloat(prompt('Please, enter second number'));

firstValue > secondValue ? alert('Max value: ' + firstValue) : alert('Max value: ' + secondValue);*/

// exercise 05
/*let firstVal = parseFloat(prompt('Please, enter first number'));
let secondVal = parseFloat(prompt('Please, enter second number'));

if(firstVal > secondVal){
	alert('Max value: ' + firstVal)
} else if(firstVal < secondVal){
	alert('Max value: ' + secondVal)
} else {
	alert('Values are equal')
}*/

// exercise 06
/*let apartment = parseFloat(prompt('Please, enter number of apartment'));

if(apartment > 0 && apartment <= 20){
	alert('Go to the first entry.');
} else if(apartment > 20 && apartment <= 48){
	alert('Go to the second entry.');
} else if(apartment > 48 && apartment <= 90){
	alert('Go to the third entry.');
} else {
	alert('There is no such apartment in the house!');
}*/

// exercise 07
/*let login = prompt('Please, enter your login');
let password = prompt('Please, enter your password');

let message = ((login === 'Ivan' && password === '334455') || (login === 'Alex' && password === '777') || (login === 'Petr' && password === 'b5678')) ? 'Welcome' : 'Error';
alert(message);*/

// exercise 08
/*let yearOfBirth = parseFloat(prompt('Please, enter your age', 'YYYY'));
const age = new Date().getFullYear() - yearOfBirth;

let message = age >= 16 ? age + ' years old. Welcome!' : age + ' years old. Entry denied.';

alert(message);*/

// exercise 09
/*let experience = parseFloat(prompt('Please, enter your work experience.'));

if(experience >= 3 && experience <= 10){
	alert('Your increase is 10%');
} else if(experience > 10 && experience <= 20){
	alert('Your increase is 20%');
} else if(experience > 20){
	alert('Your increase is 25%');
} else {
	alert('Your increase is 0%');
}*/

// exercise 10
/*let num = prompt('Please, enter quantity of products.');
let arrNum = num.split('');
let lastItem = parseFloat(arrNum[arrNum.length-1]);
let penultimateItem = parseFloat(arrNum[arrNum.length-2]);

if(penultimateItem && penultimateItem === 1){
	wordDeclensionTwoDigit();
} else {
	wordDeclensionSingle();
}

function wordDeclensionTwoDigit() {
	console.log(num + ' ' + 'товаров');
}

function wordDeclensionSingle() {
	if(lastItem === 1){
		console.log(num + ' ' + 'товар');
	} else if(lastItem > 1 && lastItem <=4){
		console.log(num + ' ' + 'товара');
	} else {
		console.log(num + ' ' + 'товаров');
	}
}*/
