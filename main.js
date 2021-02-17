/*
var name = 'I am a programmer';

const a = 12;

let b = 15;

var name = 'janet';

b = 'boy';

let numberOne;
// let 2name
let name2;
let $now = 5;
console.log($now);

////// STRINGs
let school = 'Alabian soultions';
// let description = "Alabian Solutions's ex-students are the best";
// description = "Alabian Solutions's ex-students are the best";

console.log(school);
// console.log(description);

////// NUMBERS
console.log(undefined + 1);

let emptyVar;
console.log(emptyVar);

/// CONCATENATION
let name = 'Favour';
let hobby = 'Many things';
let description = 'I am ' + name + ' and my hobbies are ' + hobby;

//// TEMPLATE LITERALS
description = `I am ${name} and my hobbies are ${hobby}`;
console.log(description);

///// ARITHMETIC OPERATION
let num1 = 10;
let num2 = 6;
let num3 = 5;

let sum = num1 + num2 + num3;
console.log(sum);
let substraction = num1 - num2 - num3;
console.log(substraction);
let multiply = num1 * num2;
console.log(num1 / num2);

/*modulos gets the remainder of two divided numbers
console.log(num1 % num2);

console.log(num1++);
let x = '2';
let convertedString = parseInt(x);
console.log(convertedString + 11);
console.log('2' * 11);
console.log(1 == '1');
console.log(1 === '1');
console.log(5 >= 2);
console.log(3 >= 10);
console.log(5 != '5');
console.log(5 !== '5');

console.log(10 !== 10);

///// LOGICAL OPERATORS
let isDeveloper = true;
let isAccountant = false;
let knowHTML = true;
let knowValuation = false;

console.log('====== LOGICAL OPERATION =======');

console.log(isDeveloper && isAccountant);
console.log(isAccountant && knowHTML);
console.log(isAccountant && knowValuation);

console.log(isDeveloper || knowValuation);

let unknown = null;

console.log(typeof isDeveloper);
console.log(typeof description);
console.log(typeof num1);
console.log(typeof unknown);

////// ARRAY
let names = ['james', 'raymond', 'tolu', 'ola'];
console.log(names.length);
let colours = ['red', 'orange', 'blue', 'green', 'yellow'];

//array mutation
colours[3] = 'plantain';
colours[5] = 'new colour';

let numbers = [];
numbers[0] = 100;
numbers[1] = 550;
numbers[2] = 50;
console.log(numbers);

//destructuring arrays
const [c, d, e, f] = [10, 20, 100, 34];

console.log(
  `the value of x is ${c} the value of y is ${d} also for e ${e} and f ${f}`
);

/// using spread operator in an array
let misssingNumbers = [3, 4, 5];

let arr = [1, 2, ...misssingNumbers, 6, 7];

let greetings = 'Hello World';

let stringArr = [...greetings];
console.log(stringArr);
stringArr.push('new element');
console.log(stringArr.includes('9'));

console.log('====== multi demensional array ======');

// const multiArr = [
//   [1, 2, 4, 5],
//   ['a', 'b', 'c', 'd'],
// ];

// console.log(multiArr[0][1]);
// let newArr = multiArr[1];
// console.log('new array', newArr);

let quizQuestions = [
  [
    'What is the capital of Lagos State?',
    [1, 3, 5],
    'Agege',
    'Mushin',
    'Ikeja',
  ],
  [
    'What is the capital of Kaduna State?',
    'Kagoro',
    'Kachia',
    'Kaduna',
    'kaduna',
  ],
];

console.log(quizQuestions[0][1][2]);

*/

console.log('======= LOGIC IF STATEMENT ======');
let email = prompt('please put you mail');

console.log(email);
let position = email.indexOf('gmail');
console.log(position);

if (position !== -1) {
  alert('correct email ✅✅✅✅✅');
} else {
  alert('Wrong email ❌❌❌❌');
}
