const str = "Hello World";
const arr = [1, 2, 3]
for (const s of arr) {
    // if(s === " "){
    //     continue;
    // }
    //  console.log(s);
}

for (const key in arr) {
    //console.log(arr[key])
}
const map = new Map();
map.set("firstname", "nikita")
map.set("lastname", "singh")
map.set("gender", "female")

//console.log(map.get("firstname"))

// for (const key in map) {
//     console.log(key)
// }

for (const [key,value] of map) {
    //console.log(key, ":-", value)
}


const obj = {name:"nikita", age:23}
for (const key in obj) {
    console.log(key , obj[key])
}