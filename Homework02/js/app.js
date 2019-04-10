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
const prefix = '&#';

while(sumbol <= 2000){
	console.log(prefix + sumbol);
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
/*let arrayLength = parseFloat(prompt('Please, enter array length', '1'));
let array = [];

for(let i = 0; i <= arrayLength; i++){
	//array;
}
console.log(arrayLength);

*/
//console.log('123');



for(let i =1; i <= 100 ; i++){
	if( i % 3 === 0 && i % 10 === 0){
		console.log('TriTon');
	} else 	if(i % 3 === 0){
		console.log('Tri');
	} else if(i %10 === 0){
		console.log('Ton')
	} else {
		console.log(i);
	}
}

















































































