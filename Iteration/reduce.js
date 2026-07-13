const arr = [1,2,3,4,5];
// const totalVal = arr.reduce( (acc, currVal) => {
//     console.log(`Accumulator: ${acc} and currVal: ${currVal}`)
//     return acc + currVal
// },0)

const totalVal = arr.reduce((acc, currVal) => acc + currVal, 0)
//console.log(totalVal)

const courses = [
    {   courseName: "java",
        price:999
    },
    {   courseName: "Web dev",
        price:12999
    },
    {   courseName: "javaScript",
        price:5999
    },
    {   courseName: "python",
        price:499
    },
]

// const priceToPay = courses.reduce((acc,course) => acc + course.price, 0)

//using forEach
let priceToPay = 0;
courses.forEach((course) => {
    priceToPay = course.price + priceToPay
})

console.log(priceToPay)