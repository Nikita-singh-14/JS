const userEmail = "nk@gmail.com"
// falsy value
//false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy
//"0", 'false', " ", [], {}, function(){}

const empArr = [];
if(empArr.length === 0){
   // console.log("Array is empty");
    
}

const empObj = {};
if(Object.keys(empObj).length === 0){
 //   console.log("Object is empty");
}

//Nullish Coalescing Operator (??) : null undefined

let val1;
//val1 = 5 ?? 10
//val1 = null ?? 10
//val1 = undefined ?? 10
val1 = null ?? undefined ?? 20
console.log(val1);

//Terniary Operator 
//condition ? true : false
const iceTeaPrice = 10;
//iceTeaPrice >= 80 ? console.log("greater than 80") : console.log("less than 80")
