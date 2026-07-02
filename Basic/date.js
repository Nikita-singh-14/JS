const date = new Date();
// console.log(typeof date);

// console.log(date.toDateString())
// console.log(date.toISOString());
// console.log(date.toJSON());
// console.log(date.toLocaleDateString('default',{
//     weekday: "long",
//     month: "2-digit",
//     year: "numeric"
// }));
// console.log(date.toLocaleString());
// console.log(date.toString());
// console.log(date.toString());

const myTimeStamp = Date.now();
console.log(Math.floor(myTimeStamp / 1000))

const myCreateDate = new Date("02-07-2026")
console.log(myCreateDate.toLocaleString());

const expireDate = Date.now() + 10;
while (Date.now() < expireDate) {
    console.log(new Date());
}





