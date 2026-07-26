const user = {
    username: "nikita",
    loginCount: 4,
    signedIn: true,
    greetings: function(){
        //console.log(`Welcome ${this.username}`)
        console.log(this)
    }
}

//console.log(user.greetings())


function User(username, loginCount, isLoggedIn){
    this.username = username,
    this.loginCount = loginCount,
    this.isLoggedIn = isLoggedIn
    return this
}

const userOne = new User("nikita", 4, true)
console.log(userOne.constructor)

// new keyword creates copy of intances

const userTwo = new User("Anu", 5, false)
//console.log(userTwo.username)