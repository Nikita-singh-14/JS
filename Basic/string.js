const str1 = "nikita";
const str2 = "singh";
console.log(typeof str1); //string
//console.log(str1 + str2) //not recomendedd
console.log(`${str1} and ${str2}`) // good practice

let str3 = new String("nikita");
console.log(typeof str3); //object
console.log(str3[2]); //k
console.log(str3.charAt(1))// 2
console.log(str3.__proto__)
console.log(str3.length)
console.log(str3.toUpperCase())
console.log(str3.indexOf('k'))//2
console.log(str3.substring(0,4)); //niki
console.log(str3.slice(0, 3)); //nik
console.log(str3.slice(-6, 3));
console.log(str3.replace("nik", "anu"))

let str4 = "  nikita  ";
console.log(str4.trim())

let str5 = "nikita_singh_kumari";
console.log(str5.split("_"))

console.log(str5.includes("nikita")) //true