//Immediately Invoked Function Expressions (IIFE)

//two main reasion to write IIFE
//1)for immediately invoked
//2) for prevent functions from polluting the global scope it's create a local scope for variables.
//global scope me jo varibale declare hai usse bahut bar problem hoti hai usse bachne ke liye hum ka use karte hai
function test () {
    console.log(`DB Connected`);
}
test();


((name) => {
    console.log(`DB Connected Two ${name}`);
})("nikita")