class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`username is ${this.username}`); 
    }

    static userId(){
        return '124'
    }
}

const nikita = new User("nikita")
console.log(nikita)
console.log(nikita.userId());
