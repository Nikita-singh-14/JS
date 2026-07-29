function User(email, password){
    Object.defineProperty(this, 'email', {
       get: function(){
        return this._email.toUpperCase();
       },
        set: function(value){
            this._email = value
        }
    })

    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase();
        },
        set: function(value){
            this._password = value
        }
    })
    this.email = email
    this.password = password
}

const nikita = new User("nikita@gmail.com", "qwerysf")
console.log(nikita.email);
console.log(nikita.password);