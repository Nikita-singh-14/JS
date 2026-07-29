// console.log(Math.PI)
// Math.PI = 5
// console.log(Math.PI)

const descripter = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descripter)

const nikita = {
    name: "nikita",
    rollno: 36,
    isPresent: true,
    function(){
        console.log("Blunder")
    }
}

Object.defineProperty(nikita, "name", {
    writable: false,
    enumerable: false
})

// console.log(Object.getOwnPropertyDescriptor(nikita, "name"));

for (const [key, value] of Object.entries(nikita)) {
    if(typeof value !== 'function'){
        console.log(`${key}: ${value}`)
    }
    
}
