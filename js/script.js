"use strict";

//let num = 5;
//const leftBorderWidth = 1;

//num = 10;
//console.log(num);


//const oba = {
//    a: 50
//};

//oba.a = 10;

//console.log(oba);


//console.log(name);
//var name = 'Kit';

//{
//    let result = 50;
//}


//let number = 4.6;

//console.log(-4/0);
//console.log('string' * 9);

//const persone = `Anton`;

//const bool = false;

//console.log(Something);

//const obj = {
//    name: "Persey",
//    age: 11,
//    isMarried: false
//};

//obj.color = "orange";
//obj["color"] = "orange";

//console.log(obj.name);
//console.log(obj['color']);

//let arr = ['plum.png', 5, 'orangre.jpg', {}, []];
//console.log(arr[0]);

//alert('Hello');

//const result = confirm("Are you here?");
//console.log(result);

//const answer = prompt("Are you Ok?", "Ok");
//console.log(typeof(answer));

//const answers = [];

//answers[0] = prompt("What is your name?");
//answers[1] = prompt("How old are you?");
//answers[2] = prompt("Do you like my cat?");

//document.write(answers);

//const category = "toys";

//console.log(`https://someurl.com/${category}/5`);

//const user = "Anton";

//alert(`Hello, ${user}`);

//console.log("arr" + " - object");
//console.log(4 + +"5");

//let incr = 10,
//    decr = 10;

//incr++;
//--decr;

//console.log(incr++);
//console.log(--decr);

//console.log(5%2);

//console.log(2*4 == "8");
//console.log(2*4 === "8");
//console.log(2 + 2 * 2 != "6");
//console.log(2 + 2 * 2 !== "6");


//const isChecked = true,
//      isClose = false;

//console.log(isChecked && isClose);
//console.log(isChecked || isClose);
//console.log(isChecked && !isClose);

//if (4 == 9) {
//    console.log('Ok');
//} else {
//    console.log('Error');
//}

//const num = '50';

//if (num < 49) {
//    console.log('Error');
//} else if (num > 100) {
//    console.log('Too much');
//} else {
//    console.log('Ok');
//}

//(num === 50) ? console.log('Ok') : console.log('Error');

//switch (num) {
//case '49':
//    console.log('Error');
//    break;
//case '100':
//    console.log('Error');
//    break;
//case '50':
//    console.log('Congretulation');
//    break;
//default:
//    console.log('No way');
//    break;
//}
    
//const hamburger = 3;
//const fries = 1;
//const cola = 0;

//if (hamburger === 3 && cola && fries) {
//    console.log('Yammy');
//}
//else {
//    console.log('Go out')
//}

//console.log((hamburger && cola && fries));
    

//const hamburger = 3;
//const fries = 0;
//const cola = 0;

//if (hamburger || cola || fries) {
//    console.log('Yammy');
//}
//else {
//    console.log('Go out')
//}

//console.log((hamburger || cola || fries));
    
    
//const hamburger = 3;
//const fries = 3;
//const cola = 0;
//const nagets = 2;

//if (hamburger === 3 && cola === 2 || fries === 3 && nagets) {
//    console.log('Yammy');
//}
//else {
//    console.log('Go out')
//}

//console.log((hamburger === 3 && cola === 2 || fries === 3 && nagets));      

//let num = 50;

//while (num <= 55) {
//    console.log(num);
//    num++;
//}

//do {
//    console.log(num);
//    num++;
//}

//while (num <= 55);

//for (let i = 1; i < 8; i++) {
//    console.log(num);
//    num++;
//}

for (let i = 1; i < 10; i++) {
    if (i === 6) {
	//break;
	continue;
    }
    console.log(i);
}
