const arr = [1,2,3,4,5];

//const newArr = arr.map( (num) => num*2 );   // it returns new array. it is use to translform a array
//const newArr = arr.map( (num) => num*2).map( (num) => num+10)
//console.log(newArr);  // [2,4,6,8,10]
//console.log(arr) // [1,2,3,4,5]


//using forEach
arr.forEach( (num) => { // It doesn't return anything and it is use to do something on each element
    console.log(num*2)
});
console.log(arr)