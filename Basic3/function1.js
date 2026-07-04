function firstFun(){
    console.log("hello")
}

// firstFun()

// function addTwoNum (num1, num2){
//     console.log(num1+num2)
// }

function addTwoNum (num1, num2){
    return num1+num2
}
const result = addTwoNum(2,"a")
// console.log("result:", result)


function objFun(getObj){
    getObj.name = "anu"
    return getObj;
}


const obj = {
    name:"nikita",
    age:21
}

// console.log(objFun(obj))

function arrFun(getArr){
    getArr[0] = 36
    return getArr;
}

const arr = [1,4,7,9];
// console.log(arrFun(arr))

// function loginUserMessage(name){
//     if(name === undefined){
//         console.log("please enter name");
//         return
//     }
//     return `${name} just logged.`
// }

function loginUserMessage(name = "bitu"){
    if(!name){
        console.log("please enter name");
        return
    }
    return `${name} just logged.`
}

// console.log(loginUserMessage())

//Rest Operator
function calculateCardprice(val1, ...num1){
    return num1
}

console.log(calculateCardprice(18,42))