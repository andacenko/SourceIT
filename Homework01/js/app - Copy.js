'use strict';

// switch case
const age = 18;

if(age >= 18){//if(true) ; if(age) !=0;
	//console.log('sucess beer');

	if(age >= 21){//=== if(age >= 21) console.log('sucess vodka');
		//console.log('sucess vodka');
	}
} else {
	//console.log('cancel beer or vodka');

}

if(age === 18){// age =='18' - true  all time we should use === only

}

if(age !== 8){

}
//
const isAuth = false;

if(!isAuth){
	//code
}

//
const isLog = 'test';

if(!!isLog){//преобразование в явно булевский тип
	//code
}

//
if(age === 18){
	//code
} else if(age === 19){//просто опустили скобки
	//code
} else if(age === 21){
	//code
}

// &&  ||
if(age > 18 && age < 21 ){//у && приоритет больше, чем у ||
	//console.log('cancel vodka, but sucess beer. If both values will betrue');
}

if(age > 18 || age < 21 ){
	//console.log('if one true');
}

if(age > 18 && (age < 21 || age < 21) ){//скобки задают приоритет
	//console.log('if one true');
}


//switch case исп для строгого равенства
switch(+age){//преобразует в число как parseFloat()
	case 18: 
		//console.log('beer');
		break;//all code was done until break
	case 19: 
		//console.log('beer');
		break;
	case 20: 
		//console.log('beer');

		//switch(nextValue){} may be, but hard code
		break;
	default:
		console.log('default');//необязателен может быть и не в конце, тогда нужен break
}

//condition ? true : false;
const message = (age > 18) ? 'beer'/* можно вложить тернарный оператор, но хард-код */ : 'cancel';//все части обязательны

//console.log(message);

//циклы
//с предусловием
while(age < 18){//while(true)
	//code
}


let num = 0;

//while(num <= 10){
	//console.log(num);
	//num++;
	//or
	//console.log(num++);
//}

//infinity
while(true){
	const x = (Math.floor(Math.random() * 100));

	//console.log(x);
	if(x < 50){
		break;
	}	
}


//с постусловием выполнится хотябы 1 раз
/*do{
	console.log(num++)
} while (num<10);*/

//for(;;) infinity
for(let num = 0; num < 10; num++){//let обязательно, если здесь объявляем. А именно здесь и место ее объявлять
	//code
	//num +1
	//condition
	//code...
}


for(let num = 0, num1 = 4; num < 10; num++, num1 +=2){
	//code
}

for(let num = 0; num < 10; num++){
	if(num % 2 === 0){
		continue;//
	}
	//console.log(num); //even numbers
}

//таблица умножения
for(let a = 2; a < 10; a++){
	for(let b = 2; b < 10; b++){
		//console.log(a * b);
	}
}


/*------------------------------------------------------------*/
//массивы - это ссылка
const test = [];

const numbers= [1, 2, 3, 4, 5, 6, 7];

//numbers.length = 0; можно очистить массив, если он констарта (очистит ссылку)

//console.log(numbers[2]);

numbers[2] = 45;// =

numbers[numbers.length] = 789 //add el to the end


//console.log(numbers);

const numbersOld = new Array(10);//old style сразу выделится место в памяти 

for(let i =0; i < numbersOld.length; i++){
	numbersOld[i] = 5;
}

//console.log(numbersOld);

//for in
for(let index in numbers){//index correct variables's name
	//console.log(index, numbers[index]);
}

//for of только для перебора даст только значения
for(let elem of numbers){
	//console.log(elem);
}











