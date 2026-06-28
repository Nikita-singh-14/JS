const accountId = 123456;
let emailId = "nikita@gmail.com";
var cityName = "muzaffarpur";
stateName = "bihar";  //this is also a type of variable declartion but not a good practice. it does not use in industry.
let name;  // inilazied but not assign any value so the result is undefined

//prefer not to use var // because of issue in block scope and functional scope.

// accountId = 123;  //not allowed

stateName = "asam";
emailId = "anu@gmail.com";
cityName = "patna";
console.table([accountId, emailId, cityName, stateName, name])

