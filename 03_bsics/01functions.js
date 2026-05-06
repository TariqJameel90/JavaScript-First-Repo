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

console.log((loginUser()
)
);

