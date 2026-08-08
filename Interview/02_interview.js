// what is callback function
//it is a function that pass as argument in another function that excute at letar time either syncronsally
// or asyncrosanaly

// function goodmorning(callback){
//     console.log("good morning");
//     callback();
// }

// function printName(){
//     console.log("nikita")
// }

// goodmorning(printName)


//find duplicate element
let arr = [1,2,3,4,5,6,7,8,1,6,1]


// let result = [];
// for(let i = 0 ; i<arr.length; i++){
//     for(let j = i+1; j<arr.length-1; j++){
//         if(arr[i] === arr[j]){
//             result.push(arr[j])
//     }
//     }
// }
// console.log(result)


let arr1 = new Set();
let duplicate = new Set();
for(let i = 0; i<arr.length; i++){
    if(arr1.has(arr[i])){
        duplicate.add(arr[i])
    }else{
        arr1.add(arr[i])
    }
}
console.log(duplicate)

// let str = "My name is nikita" //substring ki is present or not
// console.log(str.includes('ki'));

// let str = "My name is ki nikita ki" //how many times ki is present = 2

// function findSubStringCount (str, sub){
//     let count = 0;
//     for(let i = 0; i<str.length; i++){
//         if(str.indexOf(sub) === -1){
//             return count
//        }else{
//         count++;
//         str = str.replace('ki', "a");
//        }
//     }
// }

// console.log(findSubStringCount(str, 'ki'))


// function findSubStringCount(str, sub) {
//     let count = 0;

//     for (let i = 0; i <= str.length - sub.length; i++) {
//         if (str.substring(i, i + sub.length) === sub) {
//             count++;
//         }
//     }

//     return count;
// }

// console.log(findSubStringCount("My name is ki nikita ki", "ki"));

let str1 = 'singh';
let str2 = 'nikita'
let str3 = str1 && str2;
console.log(str3) // singh nikita


// [a] = [100, 200, 300, 400]
// console.log(a) // 100 because of array destructuring

let a = 5;
//const b = ++a + a++; // 6 + 6 = 12
const b = a++ + ++a // 5 + 7 = 12
console.log(a)
console.log(b) // 6 + 6 = 12