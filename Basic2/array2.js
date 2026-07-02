const myHeros = ["thor", "Ironman", "spiderMan"];
const myNewHeros = ["superman", "flash", "batman"]
// myHeros.push(myNewHeros)
// console.log(myHeros.flat())

// const newOne = myHeros.concat(myNewHeros)
// console.log(newOne)

const allheros = [...myHeros, ...myNewHeros, "nikita"]
// console.log(allheros)

// console.log(Array.isArray("nikita"));
// console.log(Array.from("nikita"));
// console.log(Array.from({name: "nikita"}))

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3))
