// let abc = 'nikita';
// abc[2] = 'r';
// console.log(abc) // ans is nikita because abc string is immutale

// // defentelly we can overrite by
// abc = 'r' 
// console.log(abc) // r


//let a = 10;
//let b = a++; // post increment so that first assign the value to b that is 10 and then increment the value of a that is 11
//console.log(a+b); // 11 + 10 = 21

// let str = "my name is nikita" // ym eman si atikin

// let result = str.split(' ')
// .map((str1) => str1.split('').reverse().join(''))
// .join(' ');
// console.log(result)

// let words = str.split(' ');
// let result = '';
// for(let i = 0; i < words.length; i++){
//     result = result + words[i].split('').reverse().join('') + " ";
// }
// console.log(result)


// let name = "nikita singh" // n:2, i:3 and so on.
// let result = {};
// for(let i=0; i < name.length; i++){
//     let char = name.charAt(i)
//     if(result[char]){
//         result[char]++;
//     } else{
//         result[char] = 1;
//     }
// }
// console.log(result)


// let arr = [1, 10, 18, 14, 6]
// function abc(b, ...a){ // // ...a is a rest parameter that collects remaining arguments and returns them as an array.
//     console.log(a);
// }
// abc(8,9,10,11,12) //[9,10,11,12]


// const arr = ['a', 1, 'b', 2, 'c', 3]
// let arr1 = []
// let str = []


// for(let i=0; i<arr.length; i++){
//     if(typeof arr[i] === 'number'){
//         arr1.push(arr[i])
//     }else{
//         str.push(arr[i]);
//     }
// }

// console.log(arr1)
// console.log(str)


//how split two numbers without using third variable

// let a = 5;
// let b = 4;
// [a,b] = [b,a]
// console.log(a,b)


// how to bring out common element
const a1 = [1,2,3,4,5];
const a2 = [3,4,5,6,7];

//first approch
// let commonArr = [];
// for(let i = 0; i<a1.length; i++){
//     for(let j = 0; j < a2.length; j++){
//         if(a1[i] == a2[j]){
//             commonArr.push(a1[i])
//         }
//     }
// }
// console.log(commonArr);

//second approch

// const commonArr = a1.filter((item) => a2.includes(item))
// console.log(commonArr);

const array = [1,2,3,4,5]
const result = array.reduce((item, acc) => {
    acc = acc + item;
}, 0 )
console.log(result)