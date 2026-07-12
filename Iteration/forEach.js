const arr = [
    {firstname: "nikita",
    lastname: "singh"
    },
    {firstname: "bala",
    lastname: "kriti"
    },
    {firstname: "bitu",
    lastname: "singh"
    },
]

//arr.forEach((item, index, arr) => {console.log(item.firstname, index, arr)})
arr.forEach(printName)
function printName  (item) {
    console.log(item.firstname)
}