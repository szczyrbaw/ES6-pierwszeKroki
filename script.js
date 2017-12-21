//const sayHello = () => alert('Hello world!');
//sayHello();

//Zadanie 1
const stringOne = "Hello";
const stringTwo = "World!";

console.log(`${stringOne} ${stringTwo}`);

//Zadanie 2

const multiply = (x = 1, y = 1) => {return console.log(x + y)};
multiply(2, 5);
multiply(6, 6);
multiply(2);

//Zadanie 3

const average = args => args.reduce((a, b) => a + b, 0) / args.length;

const res1 = average([1, 3, 2]);
const res2 = average([10, 30, 55, 72]);
console.log(res1);
console.log(res2);

//Zadanie 4

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

console.log(average([...grades]));

//Zadanie 5

const someArr = [1, 4, 'Iwona', false, 'Nowak'];
const [a, b, c, d, e] = someArr;

console.log(c, e);