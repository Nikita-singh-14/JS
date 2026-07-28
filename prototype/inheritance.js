class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`username is ${this.username}`); 
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
        
    }
}

const nikita = new Teacher("nikita", "nikita@gmail.com", "poit")

console.log(nikita)
nikita.addCourse()
nikita.logMe()


const anu = new User("anu")

console.log(anu)
// anu.addCourse()
anu.logMe()

console.log( nikita instanceof Teacher); //true
console.log(nikita instanceof User); //true

