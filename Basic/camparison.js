// console.log(1 > 0);
// console.log(1 >= 0);
// console.log(1 == 0);
// console.log(1 <= 0);

// console.log("2" > 0);
//console.log(2 === "1");

// console.log(null > 0)
// console.log(null >= 0)
// console.log(null == 0)
// console.log(null <= 0)
// console.log(null < 0)

// console.log(undefined > 0);
// console.log(undefined >= 0);
// console.log(undefined == 0);

/*   Data type  */
//memory me story karne ke tarike par data type ko 2 part me devide kiya gya hai
//premitive
//number, string, null, undefined, symbol, BigInt, Boolean

let id = Symbol('123');
let anotherId = Symbol('123')
//console.log(id === anotherId)

let bigintNumber = 1234587591n;
//console.log(typeof bigintNumber)

//Reference type (non-premitive)
//array, object, function

let arr = [1,3,6,83]
console.log(typeof arr)

let obj = {
    name: "nikita",
    age: 23,
    gender: "female"
}
console.log(typeof obj)

let fun = function(){
    console.log("hello world")
}
console.log(typeof fun)