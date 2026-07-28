// class User {
//     constructor(username, email, password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     encryptPassword(){
//         const salt = Math.floor(Math.random()*1000)
//         console.log(`${this.password}${salt}`)
//     }
//     upperCaseName(){
//         console.log(`${this.username.toUpperCase()}`)
//     }
// }

// const nikita = new User("nikita", "nikita@gamil.com", "abc")
// console.log(nikita);
// nikita.encryptPassword()
// nikita.upperCaseName()

//behind the scene

function User(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}

User.prototype.encryptPassword = function(){
    const salt = Math.floor(Math.random()*1000)
    console.log(`${this.password}${salt}`)
}

User.prototype.upperCaseName = function(){
    console.log(`${this.username.toUpperCase()}`)
}

const nikita = new User("nikita", "nikita@gamil.com", "abc")
console.log(nikita);
nikita.encryptPassword()
nikita.upperCaseName()

