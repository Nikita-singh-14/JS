const instaUser = {}
instaUser.userName = "nikita1234";
instaUser.password = "12345678";
instaUser.isLoggedIn = false;

// console.log(instaUser)

const obj1 = {1:"a", 2:"b"};
const obj2 = {3:"a", 4:"b"};
const obj3 = {5:"a", 6:"b"};

// const newObj = {obj1, obj2, obj3}

//const newObj = Object.assign({}, obj1, obj2, obj3)
const newObj = {...obj1, ...obj2, ...obj3}
// console.log(newObj)

// console.log(Object.keys(instaUser));
// console.log(Object.values(instaUser))
// console.log(Object.entries(instaUser))

console.log(instaUser.hasOwnProperty("userName"))

//deStructuring
const {userName: name} = instaUser;
console.log(name)