
const obj = {
    name: "nikita",
    price:25,
    welcome:function(){
        console.log(`${this.name}, welcome to website`)
        // console.log(this.username)
        console.log(this)
    }
}

//obj.welcome()
// console.log(this)


// function test(){
//     const username = "nikita";
//     console.log(`${this.username}`)
// }

// test()

// const test = function(){
//     const username = "nikita";
//     console.log(`${this.username}`)
// }
// test()

// const test = () => {
//     const username = "nikita";
//     console.log(`${this.username}`)
// }
// test()


// const addTwoNum = (num1, num2) => {
//     console.log("nikita")
//     return num1 + num2
// }

// const addTwoNum = (num1, num2) => (num1 + num2)
const addTwoNum = (num1, num2) => ({name:"nikita"})
console.log(addTwoNum(3,6))