const arr = [1,2,3,4,5];
const filterArr = arr.filter( (num) => num>2)
//console.log(filterArr)

//using forEach

const newFilterArr = [];
arr.forEach((num) => {
    if(num>2){
        newFilterArr.push(num)
    }
})

console.log(newFilterArr)