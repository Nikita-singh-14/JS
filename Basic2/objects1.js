// Singleton (construction)
const obj = new Object();
obj.name = "nikita";
// console.log(typeof obj)

//Object Literal

const obj2 = {
    name:"nikitaSingh",
}
// console.log(obj2)

const symKey = Symbol("Hii")

const jsUser = {
    name:"nikita",
    "full name": "nikita singh",
    age:21,
    [symKey]:"Hello"
}
// console.log(jsUser[symKey])
// console.log(jsUser["full name"])
// console.log(jsUser.name);
// console.log(jsUser["name"])

jsUser.name = "anu singh";
// console.log(jsUser);

// Object.freeze(jsUser);

jsUser.name = "bitu singh";
// console.log(jsUser);

jsUser.geeting = function(){
    console.log(`hi, how are you ${this["full name"]}`)
}
console.log(jsUser.geeting());