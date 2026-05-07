//  Is jga ham scope ka bary mai janin ga kah scope kya hota hai aur scope ki types kya hoti hain

//  Scope is the area of the code where a variable is defined and can be accessed. There are three types of scopes in JavaScript: global scope, function scope, and block scope.


// 1. Global Scope: Variables declared outside of any function or block have global scope. They can be accessed from anywhere in the code.

var globalVariable = "I am a global variable";

function accessGlobalVariable() {
    console.log(globalVariable); // Output: I am a global variable
}

accessGlobalVariable();
console.log(globalVariable); // Output: I am a global variable

// 2. Function Scope: Variables declared inside a function have function scope. They can only be accessed within that function.

function myFunction() {
    var functionVariable = "I am a function variable";
    console.log(functionVariable); // Output: I am a function variable
}

myFunction();
// console.log(functionVariable); // This will throw an error because functionVariable is not defined outside the function

// 3. Block Scope: Variables declared with let or const inside a block (e.g., inside an if statement or a loop) have block scope. They can only be accessed within that block.

if (true) {
    let blockVariable = "I am a block variable";
    console.log(blockVariable); // Output: I am a block variable
}

// console.log(blockVariable); // This will throw an error because blockVariable is not defined outside the block

// In summary, understanding scopes is crucial for managing variable accessibility and avoiding unintended side effects in your code.

// next we will discuss about nested functions and closures, which are closely related to scopes in JavaScript.

// Nested functions are functions defined inside another function. They have access to the variables of the outer function, which is a key feature of closures. Closures allow a function to access and manipulate variables from its outer scope even after the outer function has finished executing. This is a powerful concept that enables data encapsulation and the creation of private variables in JavaScript.

function outerFunction() {
    var outerVariable = "I am an outer variable";

    function innerFunction() {
        console.log(outerVariable); // Output: I am an outer variable
    }

    return innerFunction;
}

// var myInnerFunction = outerFunction();
// myInnerFunction(); // Output: I am an outer variable

// In this example, the innerFunction is a closure that has access to the outerVariable defined in the outerFunction, even after the outerFunction has finished executing.

// ham is ko  icecream ke example se samajhtay hain

function one () {
    const iceCream = "Chocolate";
    function two () {
        const website = "youtube";
        console.log(iceCream);
    }
    // console.log(website);

    two();
    
}

one();

// ab yahi kam if else ke example se samajhtay hain

if (true) {
    const iceCream = "Vanilla";
    if (iceCream === "Vanilla") { 
        const website = "Facebook";
        console.log(iceCream); // Output: Vanilla
    }
    // console.log(website); // This will throw an error because website is not defined outside the inner block


}


// ++++++++++++++++++++++++++++++++  intersting example ++++++++++++++++++++++++++++++++

function addone(num) {
    return num + 1;
}
addone(5); // Output: 6

const addTwo = function(num) {
    return num + 2;
}
addTwo(5); // Output: 7

