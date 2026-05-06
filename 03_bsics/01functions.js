// ++++++++++++++++++++ Functions ++++++++++++++++++++

// Functions are reusable blocks of code that perform a specific task. They allow you to break down your code into smaller, more manageable pieces, and can be called multiple times throughout your program.

// console.log("t");
// console.log("a");
// console.log("r");
// console.log("i");
// console.log("q");


// ab ya kam 10 bar karna ho to pareshani hogi, isliye hum function ka use karenge

function printName() {
    console.log("t");
    console.log("a");
    console.log("r");
    console.log("i");
    console.log("q");
}

// printName();

// function addNumber(num1, num2  ) {

//     console.log(num1 + num2);

// }

function addNumber(num1, num2) {

    // let result = num1 + num2;
    // return result;

    return num1 + num2;

}



const addnum = addNumber(3, 4);

// console.log("Result:",addnum);

function loginUser(usernaem = "Guest") {
    if (usernaem === undefined) {

        console.log("Please enter a username");
        
        
         
    }
    // console.log(usernaem);
    
    
    return `${usernaem} is logged in successfully`;

}
// console.log((loginUser("Tariq")
// )
// );

// console.log((loginUser()
// )
// );


// +++++++++++++++++++  Shopping Cart Example ++++++++++++++++++++

function calculateCartPrice(val1, val2,...num) { // num ka sath ham ...num bhi use kar sakte hain, jisse hum multiple numbers ko ek array ke form mein pass kar sakte hain
    return [val1, val2, ...num];
}

// console.log(calculateCartPrice(20, 30, 40, 50));


const users = {
    name: "Tariq",
    age: 25,

}

function handelObject(anyobj){
    console.log(`User Name is ${anyobj.name} and age is ${anyobj.age}`);
    
}

// handelObject(users);
// handelObject({
    // name: "Tariq",
    // age: 25
    

// });

const myArr = [1, 2, 3, 4, 5];

function handelArray(anyArr){
    return anyArr[4];
} 