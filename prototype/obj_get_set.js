const User = {

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    },
    email: "nikita@gmail.com",
    password: "fujygg",
}

const nikita = Object.create(User);
console.log(nikita.email);
