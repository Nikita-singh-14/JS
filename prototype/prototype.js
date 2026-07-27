// let myName = "nikita    "
// console.log(myName.trueLength);

let std = ["nikta", "anu"]

let obj = {
    nikita: "Software Developer",
    anu: "Data Sciencist",
    getPower: function(){
        console.log(`nikita power is ${this.nikita} `)
    }
}

// Object.prototype.bitu = function(){
//     console.log(`bitu is present in all object`)
// }

// obj.bitu()
// std.bitu()
Array.prototype.bitu = function(){
    console.log(`bitu is present in all object`)
}
//
// obj.bitu() // No
//std.bitu()

Function.prototype.bitu = function(){
    console.log(`bitu is present in all object`)
}

//obj.bitu()  //No
//std.bitu()


//Inheritance
const User = {
    name: "nikita",
    email: "nikita@gmail.com"
}
const Teacher = {
    makeVideo: true
}
const teacherSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment : 'js assignement',
    fulltime: true,
    __proto__ : teacherSupport
}

Teacher.__proto__ = User;

Object.setPrototypeOf(teacherSupport, Teacher)


let anotherUserName = "nikita      "
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True Length is ${this.trim().length}`)  
}

anotherUserName.trueLength()