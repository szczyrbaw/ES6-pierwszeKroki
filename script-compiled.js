"use strict";

//const sayHello = () => alert('Hello world!');
//sayHello();

//Zadanie 1
var stringOne = "Hello";
var stringTwo = "World!";

console.log(stringOne + " " + stringTwo);

//Zadanie 2

var multiply = function multiply() {
  var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return console.log(x + y);
};
multiply(2, 5);
multiply(6, 6);
multiply(2);

//Zadanie 3

var average = function average(args) {
  return args.reduce(function (a, b) {
    return a + b;
  }, 0) / args.length;
};

var res1 = average([1, 3, 2]);
var res2 = average([10, 30, 55, 72]);
console.log(res1);
console.log(res2);

//Zadanie 4

var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

console.log(average([].concat(grades)));

//Zadanie 5

var someArr = [1, 4, 'Iwona', false, 'Nowak'];
var a = someArr[0],
    b = someArr[1],
    c = someArr[2],
    d = someArr[3],
    e = someArr[4];


console.log(c, e);
