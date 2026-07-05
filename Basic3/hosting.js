var c = 300;
let a = 200;

const b = 50;

if(true){
    let a = 10;
    const b = 20;
    //var c = 30;
    c = 30
    // console.log("Inner", a)
}

//console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "nikita";
    function two(){
        const website = " Instagram"
        //console.log(username + website)
    }

    //console.log(website);
    two();
}
// console.log(username);
one()

console.log(addOne(5));
function addOne(num){     //these type of declaration support hosting
    return num+1;
}

const addTwo = function(num){
    return num+2;
}
console.log(addTwo(5));

