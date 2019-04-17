//exercise 01

/*let num = 4;

while(num <= 400){
	console.log(num);
	num++;
}
//or
for(let num = 4; num <= 400; num++){
	console.log(num);
}*/

//exercise 02
/*let num = 4;
while(num <= 13){
	console.log(num);
	num+=3;
}
//or
for(let num = 4; num <= 13; num+=3){
	console.log(num);
}
*/

//exercise 03
/*let j = 654;

while(j >= 0){
	console.log(j);
	j--;
}
//or
for(let j = 654; j >= 0; j--){
	console.log(j);
}*/

//exercise 04
/*let year = 1983;

while(year <= 2017){
	console.log(year);
	year++;
}
//or
for(let year = 1983; year <= 2017; year++){
	console.log(year);
}*/

//exercise 05
/*let num = -2;
while(num <= 100){
	console.log(num);
	num+=2;
}

//or
for(let num = -2; num <= 100; num+=2)console.log(num);*/

//exercise 06
/*const num = 7;
let index = 1;

while(index <= 9){
	console.log(num + ' * ' + index + ' = ' + index * num);
	index ++;
}*/
//or
/*for(let num = 7, index = 1; index <= 9; index ++){
	console.log(num + ' * ' + index + ' = ' + num * index);
}
*/

//exercise 07
/*let sumbol = 1000;

while(sumbol <= 2000){
	console.log('&#' + sumbol);
	sumbol++;
}*/
//or
/*for(let sumbol = 1000; sumbol <= 2000; sumbol++){
	console.log('&#' + sumbol);
}
*/

//exercise 08
/*let result = 0;
let i = 0;

while(i <= 100){
	result+=i;
	i++;
}
console.log(result);
*/
//or

/*let result = 0;
for(let i =0; i <= 100; i++){
	result+=i;
}
console.log(result);*/

//exercise 09
/*
let i = 1;

while(i <= 50){
	let j = 1;
	while(j <= 50){
		console.log(`${i} * ${j} = ${i*j}`);//?? IE dosn't support
		j++;
	}
	i++;
}*/
//or
/*
for(let i = 1; i <= 50; i++){
	for(let j = 1; j <= 50; j++){
		console.log(i + ' * ' + j + ' = ' +i * j);
	}
}
*/

//exercise 10
/*let arrayLength = parseFloat(prompt('Please, enter array length', '1')) -1;
let array = [];

for(let i = 0, j = ''; i <= arrayLength; i++){
	j+='x';
	array[i] = j;
}
console.log(array);*/

//exercise 11
/*let arrayLength = parseFloat(prompt('Please, enter array length', '1')) -1;
let array = [];

for(let i = 0; i <= arrayLength; i++){
	
	let j = '';
	for(let n = 0; n <= i; n++){
		j += i+1;
	}
	array[i] = j;
}
console.log(array);*/

//exercise 12
/*let array = [1, 5, 3, 2, 1 , 2];
let result = 0;
let elementsQuantity = 0;

for(let i = 0; i < array.length; i++){

	if(result <= 10){
		result += array[i];
		elementsQuantity = i + 1;
	}
}
console.log(elementsQuantity);*/

//exercise 13
/*let array = [1, 5, 3, 2, 1 , 2];
let newArray = [];

for(let i = array.length-1; i >= 0; i--){
	newArray.push(array[i]);
	
}
console.log(newArray);
*/

//exercise 14
/*const oldArray = [-2, 1, 20, 5, 11, 0, -55, 78, 3, 24, 101 , 2, 13, 8, 19];
let newArray = [];

for(let i = 0; i <= oldArray.length; i++){
	if(oldArray[i] > 0 && oldArray[i] < 10){
		newArray.push(oldArray[i]);
	}
	
}
console.log(newArray);*/

//exercise 15
/*const oldArray = [-2, 1, 20, 5, 11, 0, -55, 78, 3, 24, 101 , 2, 13, 8, 19];
let newArray = [];

for(let i = 0; i <= oldArray.length; i++){
	if(oldArray[i] % 2 ===  0 ) newArray.push(oldArray[i]);	
}
console.log(newArray);*/

//exercise 16
const oldArray = [1, 2, 3, 4, 5, 6];
let newArray = [];

for(let i = 0; i <= oldArray.length; i++){
	if(oldArray[i] % 2 ===  0 ) newArray.push(oldArray[i]);	
}
console.log(newArray);























































































