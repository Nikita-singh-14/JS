// https://stackoverflow.com/questions/8312459/iterate-through-object-properties

class User {
    constructor(email, password){
        this.email = email
        this.password = password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }
    get password(){
        return `${this._password}12314`
    }
    set password(value){
        this._password = value
    }
}

const nikita = new User("nikita@gmail.com", "qwerysf")
console.log(nikita.email);
console.log(nikita.password);
