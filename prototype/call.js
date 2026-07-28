function setUsername(username){
    //complex database call
    this.username = username
    console.log("called")
}

function createUser(username, email, password){
    setUsername.call(this, username)
    this.email = email
    this.password = password
}

const nikita = new createUser("nikita", "nikita@gmail.com", "1234")
console.log(nikita);
