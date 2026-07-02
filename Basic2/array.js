// Array
const myArr = new Array(1,6,2,7,3);
const myArr2 = new Array(9,8,4);
// const myArr3 = myArr.concat(19,5)
const myArr3 = myArr.join(myArr2)
//console.log(myArr3)
myArr.push(5);
//console.log(myArr);
myArr.pop()
//console.log(myArr);
myArr.unshift(2)
//console.log(myArr);
myArr.shift()
//console.log(myArr);

// console.log(myArr.includes(20));
// console.log(myArr.indexOf(6));

const newArr = myArr.join()
// console.log(newArr);
// console.log(typeof newArr);


const myn1 = myArr.slice(1,4); // original array same
console.log(myn1);
console.log(myArr);

const myn2 = myArr.splice(1,4);  //change in original array
console.log(myn2);
console.log(myArr);




