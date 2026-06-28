let score = 99;
let stringScore = String(score);
//console.log(typeof stringScore); //string
//console.log(typeof(score)) //number

let age = "22";
let numberAge = Number(age) 
//console.log(typeof age) //number
//console.log(numberAge)

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn)

// 1 => true, 0 =>false
// "" => false
// "nikita" => true

// *************   operations    **********//
let value = 14;
let negValue = -value;
//console.log(negValue);

let str1 = "hey"
let str2 = " nikita"
let str3 = str1 + str2;
// console.log(str3);

// console.log("1" + 2);
// console.log(2 + 2 + "2");
// console.log("2" + 2 + 2);

// console.log(+true);
// console.log(+"");

let num1, num2, num3;
num1 = num2 = num3 = 2+2

let gameCounter = 5;
//console.log(gameCounter++); //5 first print then increment
console.log(++gameCounter); //6 first increment then print


let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"

let p = 2n;
let q = p++;
console.log(`p:${p}, q:${q}`)
console.log(p);
console.log(q);
//https://tc39.es/ecma262/multipage/ecmascript-language-expressions.html#sec-postfix-increment-operator